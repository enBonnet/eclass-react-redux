export const setHash = hash => ({
  type: "SET_HASH",
  hash
});

export const setSearch = search => ({
  type: "SET_SEARCH",
  search
});

export const setPlaylist = playlists => ({
  type: "SET_PLAYLISTS",
  playlists
});

export const setTracks = tracks => ({
  type: "SET_TRACKS",
  tracks
});

export const setArtists = artists => ({
  type: "SET_ARTISTS",
  artists
});

export const setAlbums = albums => ({
  type: "SET_ALBUMS",
  albums
});

export const setUserInfo = userInfo => ({
  type: "SET_USERINFO",
  userInfo
});
