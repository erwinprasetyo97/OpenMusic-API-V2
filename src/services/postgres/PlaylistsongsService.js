const { nanoid } = require('nanoid');
const { Pool } = require('pg');
const InvariantError = require('../../exceptions/InvariantError');
const { mapDBToModel } = require('../../utils');
const NotFoundError = require('../../exceptions/NotFoundError');

class PlaylistsongsService {
  constructor() {
    this._pool = new Pool();
  }

  async addPlaylistsong(songId, playlistId) {
    const id = `playlist-${nanoid(16)}`;

    const query = {
      text: 'INSERT INTO playlistsongs VALUES($1, $2, $3) RETURNING id',
      values: [id, playlistId, songId],
    };

    const result = await this._pool(query);

    if (!result.rows.length) {
      throw new InvariantError('Lagu gagal ditambahkan');
    }

    return result.rows[0].id;
  }

  async getPlaylistsong(id) {
    const query = {
      text: 'SELECT playlistsongs.*, song.title, song.performer FROM playlistsongs LEFT JOIN songs ON songs.id = playlistsongs.song.id WHERE playlistsongs.playlist_id = $1',
      values: [id],
    };
    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Playlist tidak ditemukan');
    }

    return result.rows.map(mapDBToModel);
  }
}

module.exports = PlaylistsongsService;
