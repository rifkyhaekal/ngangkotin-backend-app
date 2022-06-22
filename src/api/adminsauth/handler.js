import autoBind from 'auto-bind';

class AdminsAuthHandler {
  constructor(
    authenticationsService,
    adminsService,
    tokenManager,
    authValidator,
    dataValidator
  ) {
    this._authenticationsService = authenticationsService;
    this._adminsService = adminsService;
    this._tokenManager = tokenManager;
    this._authValidator = authValidator;
    this._dataValidator = dataValidator;

    autoBind(this);
  }

  async postAdminAuthHandler({ payload }, h) {
    const { email } = payload;
    this._authValidator.validatePostAdminAuthPayload({ email });

    const { fullname, isVerified, gmailId, profileUrl } = payload;
    const adminData = { fullname, isVerified, gmailId, profileUrl };
    this._dataValidator.validateAdminPayload(adminData);

    const verifiedEmail = await this._adminsService.verifyAdminCredential(
      email
    );

    const { gmail_id: id, role_id: roleId } =
      await this._adminsService.editAdminByEmail(verifiedEmail, adminData);

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

export default AdminsAuthHandler;
