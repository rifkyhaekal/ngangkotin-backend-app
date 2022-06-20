// mengimpor dotenv dan menjalankan konfigurasinya
import dotenv from 'dotenv';
dotenv.config();

import Hapi from '@hapi/hapi';
import Jwt from '@hapi/jwt';

// admins
import admins from './api/admins/index.js';
import AdminsService from './services/postgres/AdminsService.js';
import AdminsValidator from './validator/admins/index.js';

// adminsauth
import adminsAuth from './api/adminsauth/index.js';
import AuthenticationsService from './services/postgres/AuthenticationsService.js';
import TokenManager from './tokenize/TokenManager.js';
import AdminsAuthValidator from './validator/adminsauth/index.js';

const init = async () => {
  const adminsService = new AdminsService();
  const authenticationsService = new AuthenticationsService();
  const server = Hapi.server({
    port: process.env.PORT,
    host: process.env.HOST,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // registrasi plugin eksternal
  await server.register([
    {
      plugin: Jwt,
    },
  ]);

  // mendefinisikan strategy autentikasi jwt
  server.auth.strategy('angkotonline_jwt', 'jwt', {
    keys: process.env.ACCESS_TOKEN_KEY,
    verify: {
      aud: false,
      iss: false,
      sub: false,
      maxAgeSec: process.env.ACCESS_TOKEN_AGE,
    },
    validate: (artifacts) => ({
      isValid: true,
      credentials: {
        id: artifacts.decoded.payload.id,
        roleId: artifacts.decoded.payload.roleId,
      },
    }),
  });

  await server.register([
    {
      plugin: admins,
      options: {
        service: adminsService,
        validator: AdminsValidator,
      },
    },
    {
      plugin: adminsAuth,
      options: {
        authenticationsService,
        adminsService,
        tokenManager: TokenManager,
        validator: AdminsAuthValidator,
      },
    },
  ]);

  server.ext('onPreResponse', (request, h) => {
    const { response } = request;

    if (response instanceof ClientError) {
      const newResponse = h.response({
        status: 'fail',
        message: response.message,
      });
      newResponse.code(response.statusCode);
      return newResponse;
    }

    if (response instanceof InternalServerError) {
      const newResponse = h.response({
        status: 'error',
        message: response.message,
      });
      newResponse.code(response.statusCode);
      console.error(response);
      return newResponse;
    }

    console.error(response.message);
    return response.continue || response;
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
