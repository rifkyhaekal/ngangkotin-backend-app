import AdminsHandler from './handler.js';
import routes from './routes.js';

const admins = {
  name: 'admins',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const adminsHandler = new AdminsHandler(service, validator);
    server.route(routes(adminsHandler));
  },
};

export default admins;
