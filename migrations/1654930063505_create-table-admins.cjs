/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('admins', {
    email: {
      type: 'VARCHAR(150)',
      primaryKey: true,
    },
    fullname: {
      type: 'TEXT',
      notNull: false,
    },
    is_verified: {
      type: 'BOOLEAN',
      notNull: false,
    },
    profile_url: {
      type: 'TEXT',
      notNull: false,
    },
    gmail_id: {
      type: 'VARCHAR(50)',
      notNull: false,
    },
    role_id: {
      type: 'INTEGER',
      notNull: false,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('admins', 'ifExists');
};
