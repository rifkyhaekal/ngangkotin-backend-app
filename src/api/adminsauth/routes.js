const routes = (handler) => [
  {
    method: 'POST',
    path: '/admins/auth',
    handler: handler.postAdminAuthHandler,
  },
  {
    method: 'PUT',
    path: '/admins/auth',
    handler: handler.putAdminAuthHandler,
  },
  {
    method: 'DELETE',
    path: '/admins/auth',
    handler: handler.deleteAdminAuthHandler,
  },
];

export default routes;
