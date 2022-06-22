/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('roles', {
    id: {
      type: 'SMALLSERIAL',
      notNull: true,
      primaryKey: true,
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
