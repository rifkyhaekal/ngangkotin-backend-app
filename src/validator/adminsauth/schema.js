import Joi from 'Joi';

const PostAdminsAuthPayloadSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: ['com'] } })
    .required(),
});

const PutAdminsAuthPayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

const DeleteAdminsAuthPayloadSchema = Joi.object({
  refreshToken: Joi.string().required(),
});

export {
  PostAdminsAuthPayloadSchema,
  PutAdminsAuthPayloadSchema,
  DeleteAdminsAuthPayloadSchema,
};
