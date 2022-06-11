const { Pool } = require('pg');

class AdminsService {
  constructor() {
    this._pool = new Pool();
  }

  async verifyAdminCredential({ email, password }) {
    const query = {
      text: 'SELECT id, password FROM users WHERE email = $1',
      values: [username],
    };

    const result = await this._pool.query(query);

    if(!result.rowCount) {
      throw new
    }
  }
}
