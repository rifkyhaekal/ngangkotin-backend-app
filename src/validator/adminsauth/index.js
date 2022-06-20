const { PostAdminsAuthPayloadSchema } = require('./schema');
const InvariantError = require('../../exceptions/InvariantError');

const AdminsAuthValidator = {
  validatePostAdminAuthPayload: (payload) => {
    const validationResult = PostAdminsAuthPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validatePutAdminAuthPayload: (payload) => {
    const validationResult = PutAdminsAuthPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
  validateDeleteAdminAuthPayload: (payload) => {
    const validationResult = PutAdminsAuthPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = AdminsAuthValidator;
