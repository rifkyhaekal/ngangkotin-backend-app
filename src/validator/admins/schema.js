const Joi = require('joi');

const AdminPayloadSchema = Joi.object({
  id: Joi.string().required(),
  fullname: Joi.string().required(),
  isVerified: Joi.boolean().required(),
  profileUrl: Joi.string().required(),
  roleId: Joi.number().integer().required(),
});

module.exports = { AdminPayloadSchema };
