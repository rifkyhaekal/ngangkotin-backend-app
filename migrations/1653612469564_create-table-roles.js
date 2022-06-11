/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('roles', {
    id: {
      type: 'INTEGER',
      notNull: true,
    },
    role: {
      type: 'VARCHAR(15)',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('roles', 'ifExists');
};
