/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('admins', {
    id: {
      type: 'VARCHAR(50)',
      notNull: true,
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
    role: {
      type: 'VARCHAR(15)',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('admins', 'ifExists');
};
