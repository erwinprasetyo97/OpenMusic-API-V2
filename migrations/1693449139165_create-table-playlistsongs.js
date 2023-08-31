/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  // membuat tabel playlistsongs
  pgm.createTable('playlistsongs', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    playlist_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
    song_id: {
      type: 'VARCHAR(50)',
      notNull: true,
    },
  });

  /*
    Menambahkan contraint unique, kombinasi dari kolom playlist_id dan song_id.
    guna menghindari duplikasi data antara nilai keduanya
    */
  pgm.addConstraint('playlistsongs', 'unique_playlist_id_and_song_id', 'UNIQUE(playlist_id, song_id)');

  // memberikan constrain foreign key pada kolom playlist_id
  // dan song_id terhadap playlists.id dan songs.id
  pgm.addConstraint('playlistsongs', 'fk_playlistsongs.playlist_id_playlists.id', 'FOREIGN KEY(playlist_id) REFERENCES playlists(id) ON DELETE CASCADE');
  pgm.addConstraint('playlistsongs', 'fk_playlistsongs.song_id_songs_id', 'FOREIGN KEY(song_id) REFERENCES songs(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  pgm.dropTable('playlistsongs');
};
