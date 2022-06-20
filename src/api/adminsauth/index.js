import AdminsAuthHandler from './handler.js';
import routes from './routes.js';

const adminsAuth = {
  name: 'adminsauth',
  version: '1.0.0',
  register: async (
    server,
    { authenticationsService, adminsService, tokenManager, validator }
  ) => {
    const adminsAuthHandler = new AdminsAuthHandler(
      authenticationsService,
      adminsService,
      tokenManager,
      validator
    );

    server.route(routes(adminsAuthHandler));
  },
};

export default adminsAuth;
