/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('passengers', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    email: {
      type: 'VARCHAR(150)',
      unique: true,
      notNull: false,
    },
    password: {
      type: 'TEXT',
      notNull: true,
    },
    fullname: {
      type: 'TEXT',
      notNull: true,
    },
    phone_number: {
      type: 'INTEGER(13)',
      notNull: true,
    },
    user_role: {
      type: 'VARCHAR(15)',
      notNull: true,
    },
    profile_url: {
      type: 'TEXT',
      notNull: false,
    },
    created_at: {
      type: 'datetime',
      notNull: true,
    },
    updated_at: {
      type: 'datetime',
      notNull: true,
    },
  });

  pgm.addConstraint(
    'users',
    'fk_users.user_role_roles.id',
    'FOREIGN KEY(user_role) REFERENCES roles(id) ON DELETE CASCADE'
  );
};

exports.down = (pgm) => {
  pgm.dropTable('users');
  pgm.dropConstraint('users', 'fk_users.user_role_roles.id');
};
