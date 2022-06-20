const { Pool } = require('pg');
const AuthenticationError = require('../../exceptions/AuthenticationError');
const NotFoundError = require('../../exceptions/NotFoundError');
const InvariantError = require('../../exceptions/InvariantError');

class AdminsService {
  constructor() {
    this._pool = new Pool();
  }

  async editAdminByEmail(email, { id, fullname, isVerified, profileUrl }) {
    const roleId = 1;
    const query = {
      text: 'UPDATE admins SET id = $1, fullname = $2, isVerified = $3, profileUrl = $4, role_id = $5 WHERE email = $6',
      values: [id, fullname, isVerified, profileUrl, roleId, email],
    };

    const result = await this._pool.query(query);

    if (!result.rows[0]) {
      throw new NotFoundError(
        'Gagal memperbarui admin. Email tidak ditemukan!'
      );
    }
  }

  async verifyAdminCredential(emailChecked) {
    const query = {
      text: 'SELECT email FROM admins WHERE email = $1',
      values: [emailChecked],
    };

    const emailRegistered = await this._pool.query(query);

    if (!emailRegistered.rows) {
      throw new AuthenticationError('Kredensial yang diberikan salah!');
    }

    return emailRegistered;
  }

  async getAdminById(adminId) {
    const query = {
      text: 'SELECT * FROM admins WHERE id = $1',
      values: [adminId],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new NotFoundError('Admin tidak ditemukan');
    }

    return rows.result[0];
  }
}

module.exports = AdminsService;
