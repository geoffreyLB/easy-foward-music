import React, { useState, useEffect } from 'react';

const Playlist = ({ location }) => {
  const [playlistId, setPlaylistId] = useState('');

  useEffect(() => {
    setPlaylistId(location.pathname.replace('/spotifyPlaylist/', ''));
  }, []);

  // GET https://api.spotify.com/v1/playlists/{playlist_id} pour avoir les tracks
  // GET https://api.spotify.com/v1/tracks/{track_id} pour selectionner un track => lancer un lecteur

  return <div>Playlist {playlistId}</div>;
};

export default Playlist;
