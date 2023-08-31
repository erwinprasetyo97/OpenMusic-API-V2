/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  // membuat user baru
  pgm.sql("INSERT INTO users(id, username, password, fullname) VALUES ('old_playlists', 'old_playlists', 'old_playlists', 'old_playlists')");

  // mengubah nilai owner pada note yang owner-nya bernilai NULL
  pgm.sql("UPDATE playlists SET owner = 'old_playlists' WHERE owner = null ");

  // memberikan constraint foreign key pada owner terhadap kolom id dari table users
  pgm.addConstraint('playlists', 'fk_playlists.owner_users.id', 'FOREIGN KEY(owner) REFERENCES users(id) ON DELETE CASCADE');
};

exports.down = (pgm) => {
  // menghapus constraint fk_playlists.owner.users.id pada tabel playlists
  pgm.dropConstraint('playlists', 'fk_playlists.owner_users.id');

  // mengubah nilai owner old_playlists pada playlists menjadi NULL
  pgm.sql("UPDATE playlists SET owner = NULL WHERE owner = 'old_playlists'");

  // menghapus user baru
  pgm.sql("DELETE FROM users WHERE id = 'old_playlists'");
};
