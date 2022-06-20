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
      type: 'INTEGER',
      notNull: true,
    },
    role_id: {
      type: 'VARCHAR(15)',
      notNull: true,
    },
    profile_url: {
      type: 'TEXT',
      notNull: false,
    },
    is_active: {
      type: 'BOOLEAN',
      notNull: true,
    },
    latitude: {
      type: 'DOUBLE PRECISION',
      notNull: false,
    },
    longtitude: {
      type: 'DOUBLE PRECISION',
      notNull: false,
    },
    created_at: {
      type: 'INTEGER',
      notNull: true,
    },
    updated_at: {
      type: 'INTEGER',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('passengers', 'ifExists');
};
