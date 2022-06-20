import InvariantError from '../../exceptions/InvariantError.js';
import { AdminPayloadSchema } from './schema.js';

const AdminValidator = {
  validateAdminPayload: (payload) => {
    const validationResult = AdminPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

export default AdminValidator;
