import AdminsAuthHandler from './handler.js';
import routes from './routes.js';

const adminsAuth = {
  name: 'adminsAuth',
  version: '1.0.0',
  register: async (
    server,
    {
      authenticationsService,
      adminsService,
      tokenManager,
      authValidator,
      dataValidator,
    }
  ) => {
    const adminsAuthHandler = new AdminsAuthHandler(
      authenticationsService,
      adminsService,
      tokenManager,
      authValidator,
      dataValidator
    );

    server.route(routes(adminsAuthHandler));
  },
};

export default adminsAuth;
