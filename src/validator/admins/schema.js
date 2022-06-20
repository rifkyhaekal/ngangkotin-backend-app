import Joi from 'joi';

const AdminPayloadSchema = Joi.object({
  fullname: Joi.string().required(),
  isVerified: Joi.boolean().required(),
  profileUrl: Joi.string().required(),
});

export { AdminPayloadSchema };
