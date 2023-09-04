const Joi = require('joi');

const CollaborationPayloadSchema = Joi.object({
  playlists: Joi.string().required(),
  userid: Joi.string().required(),
});

module.exports = { CollaborationPayloadSchema };
