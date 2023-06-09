/* eslint-disable camelcase */
/* eslint-disable linebreak-style */
const mapDBToModelSongsDetail = ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  albumId,
  inserted_at,
  updated_at,
}) => ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  albumId,
  insertedAt: inserted_at,
  updatedAt: updated_at,
});

const mapDBToModelSongs = ({
  id,
  title,
  performer,
}) => ({
  id,
  title,
  performer,
});

const mapDBToModelAlbums = ({
  id,
  name,
  year,
}) => ({
  id,
  name,
  year,
});

module.exports = { mapDBToModelSongsDetail, mapDBToModelAlbums, mapDBToModelSongs };
