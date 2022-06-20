import { PostAdminsAuthPayloadSchema } from './schema.js';
import InvariantError from '../../exceptions/InvariantError.js';

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

export default AdminsAuthValidator;
