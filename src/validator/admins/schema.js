import Joi from 'joi';

const AdminPayloadSchema = Joi.object({
  fullname: Joi.string().required(),
  isVerified: Joi.boolean().required(),
  gmailId: Joi.string().required(),
  profileUrl: Joi.string().required(),
});

export { AdminPayloadSchema };
