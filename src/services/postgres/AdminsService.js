import pg from 'pg';
const { Pool } = pg;
import AuthenticationError from '../../exceptions/AuthenticationError.js';
import ClientError from '../../exceptions/ClientError.js';
import NotFoundError from '../../exceptions/NotFoundError.js';

class AdminsService {
  constructor() {
    this._pool = new Pool();
  }

  async editAdminByEmail(email, { fullname, isVerified, gmailId, profileUrl }) {
    const roleId = 1;

    if (!isVerified) {
      throw new ClientError('Email belum terverifikasi!');
    }

    const query = {
      text: 'UPDATE admins SET fullname = $1, is_verified = $2, gmail_id=$3, profile_url = $4, role_id = $5 WHERE email = $6 RETURNING gmail_id, role_id',
      values: [fullname, isVerified, gmailId, profileUrl, roleId, email],
    };

    const result = await this._pool.query(query);

    if (!result.rows[0]) {
      throw new NotFoundError(
        'Gagal memperbarui admin. Email tidak ditemukan!'
      );
    }

    return result.rows[0];
  }

  async verifyAdminCredential(emailChecked) {
    const query = {
      text: 'SELECT email FROM admins WHERE email = $1',
      values: [emailChecked],
    };

    const result = await this._pool.query(query);

    if (!result.rowCount) {
      throw new AuthenticationError('Kredensial yang diberikan salah!');
    }

    const { email } = result.rows[0];

    return email;
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

export default AdminsService;
