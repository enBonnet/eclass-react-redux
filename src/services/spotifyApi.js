import Spotify from "spotify-web-api-js";

const spotifyApi = new Spotify();

export function setAccessToken(accessToken) {
  spotifyApi.setAccessToken(accessToken);
}

export async function getUserInfo() {
  const userInfoResponse = await spotifyApi.getMe();
  return userInfoResponse;
}

export async function getUserPlaylists() {
  try {
    const playlistsResponse = await spotifyApi.getUserPlaylists();
    const playlists = playlistsResponse.items.map(playlistObject => {
      const { id, name } = playlistObject;
      return { id: id, playlistName: name };
    });
    return playlists;
  } catch (error) {
    console.error(error.stack);
  }
}

export async function searchTracks(search) {
  try {
    const tracksResponse = await spotifyApi.searchTracks(search);
    const tracks = tracksResponse.tracks.items.map(trackObject => {
      const { id, name, preview_url } = trackObject;
      return { id: id, trackName: name, preview_url: preview_url };
    });
    return tracks;
  } catch (error) {
    console.error(error.stack);
  }
}

export async function searchArtists(search) {
  try {
    const artistsResponse = await spotifyApi.searchArtists(search);
    const artists = artistsResponse.artists.items.map(artistObject => {
      const { id, name } = artistObject;
      return { id: id, artistName: name };
    });
    return artists;
  } catch (error) {
    console.error(error.stack);
  }
}

export async function getArtistAlbums(id) {
  try {
    const artistsAlbums = await spotifyApi.getArtistAlbums(id);
    const albums = artistsAlbums.items.map(albumsObject => {
      const { id, name } = albumsObject;
      return { id: id, albumName: name };
    });
    return albums;
  } catch (error) {
    console.error(error.stack);
  }
}

export async function searchAlbums(search) {
  try {
    const albumsResponse = await spotifyApi.searchAlbums(search);
    const albums = albumsResponse.albums.items.map(albumObject => {
      const { id, name } = albumObject;
      return { id: id, albumName: name };
    });
    return albums;
  } catch (error) {
    console.error(error.stack);
  }
}

export async function getTracksByAlbum(id) {
  try {
    const tracksResponse = await spotifyApi.getAlbum(id);
    const tracks = tracksResponse.tracks.items.map(trackObject => {
      const { id, name, preview_url } = trackObject;
      return { id: id, trackName: name, preview_url: preview_url };
    });
    return tracks;
  } catch (error) {
    console.error(error.stack);
  }
}

export async function getTracksByPlaylist(id) {
  try {
    const playlistsResponse = await spotifyApi.getPlaylist(id);
    const tracks = playlistsResponse.tracks.items.map(trackObject => {
      const { id, name, preview_url } = trackObject.track;
      return { id: id, trackName: name, preview_url: preview_url };
    });
    return tracks;
  } catch (error) {
    console.error(error.stack);
  }
}
