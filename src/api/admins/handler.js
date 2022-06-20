const autoBind = require('auto-bind');

class AdminsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    autoBind(this);
  }

  async putAdminHandler({ payload }, h) {
    this._validator.validateAdminPayload(payload);
    const { email } = payload;
    await this._service.editAdminByEmail(email, payload);

    return {
      status: 'success',
      message: 'Admin berhasil diperbarui',
    };
  }
}
