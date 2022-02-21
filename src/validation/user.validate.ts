import Joi from 'joi';

export const validateUser = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().required(),
  password: Joi.string().min(5).required(),
});
