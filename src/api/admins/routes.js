const route = (handler) => [
  {
    method: 'PUT',
    path: '/admins/{email}',
    handler: handler.putAdminByEmailHandler,
  },
];
