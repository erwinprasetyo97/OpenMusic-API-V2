/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
const mapDBToModel = ({ 
    id,
    name,
    year,
    created_at,
    updated_at,
  }) => ({
    id,
    name,
    year,
    createdAt: created_at,
    updatedAt: updated_at,
  });

module.exports = { mapDBToModel };