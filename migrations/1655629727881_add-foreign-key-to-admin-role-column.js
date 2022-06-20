/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.addConstraint(
    'admins',
    'fk_admins.role_roles.id',
    'FOREIGN KEY(role_id) REFERENCES roles(id) ON DELETE CASCADE'
  );
};

exports.down = (pgm) => {
  pgm.dropConstraint('admins', 'fk_admins.role_roles.id');
};
