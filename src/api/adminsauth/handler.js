const autoBind = require('auto-bind');

class AdminsAuthHandler {
  constructor(authenticationsService, adminsService, tokenManager, validator) {
    this._authenticationsService = authenticationsService;
    this._adminsService = adminsService;
    this._tokenManager = tokenManager;
    this._validator = validator;

    autoBind(this);
  }

  async postAdminAuthHandler({ payload }, h) {
    this._validator.validatePostAdminAuthPayload(payload);

    const { email } = payload;
    const { id, roleId } = await this._adminsService.verifyAdminCredential(
      email
    );

    const accessToken = this._tokenManager.generateAccessToken({ id, roleId });
    const refreshToken = this._tokenManager.generateRefreshToken({
      id,
      roleId,
    });

    const response = h.response({
      status: 'success',
      data: {
        accessToken,
        refreshToken,
      },
    });

    response.code(201);
    return response;
  }

  async putAdminAuthHandler({ payload }) {
    this._validator.validatePutAdminAuthPayload(payload);

    const { refreshToken } = payload;
    await this._authenticationsService.verifyRefreshToken(refreshToken);
    const { id, roleId } = this._tokenManager.verifyRefreshToken(refreshToken);

    const accessToken = this._tokenManager.generateAccessToken({ id, roleId });

    return {
      status: 'success',
      data: {
        accessToken,
      },
    };
  }

  async deleteAdminAuthHandler({ payload }) {
    this._validator.validateDeleteAdminAuthPayload(payload);

    const { refreshToken } = payload;
    await this._authenticationsService.verifyRefreshToken(refreshToken);
    await this._authenticationsService.deleteRefreshToken(refreshToken);

    return {
      status: 'success',
      message: 'Refresh token berhasil dihapus',
    };
  }
}

module.exports = AdminsAuthHandler;
