/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('roles', {
    id: {
      type: 'VARCHAR(1)',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {};
