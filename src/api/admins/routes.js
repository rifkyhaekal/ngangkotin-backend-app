const routes = (handler) => [
  {
    method: 'PUT',
    path: '/admins/{email}',
    handler: handler.putAdminByEmailHandler,
  },
];

export default routes;
