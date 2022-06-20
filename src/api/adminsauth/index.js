const AdminsAuthHandler = require('./handler');
const routes = require('./routes');

module.exports = {
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
