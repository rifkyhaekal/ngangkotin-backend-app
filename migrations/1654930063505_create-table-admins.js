/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('admins', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    email: {
      type: 'VARCHAR(150)',
      unique: true,
      notNull: false,
    },
    fullname: {
      type: 'TEXT',
      notNull: true,
    },
    is_verified: {
      type: 'BOOLEAN',
      notNull: false,
    },
    profile_url: {
      type: 'TEXT',
      notNull: false,
    },
    role_id: {
      type: 'VARCHAR(15)',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('admins', 'ifExists');
};
