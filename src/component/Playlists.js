import React, { Component } from "react";

import { getUserPlaylists, getTracksByPlaylist } from "../services/spotifyApi";
/**
 * Playlist component
 * @param {string} hash
 * @author [Ender Bonnet](https://github.com/enbonnet)
 */
class Playlists extends Component {
  async componentDidUpdate(prevProps) {
    if (this.props.hash !== prevProps.hash) {
      const playlists = await getUserPlaylists();
      this.props.setPlaylist(playlists);
    }
  }

  async getTracksByPlaylist(id) {
    const tracks = await getTracksByPlaylist(id);
    this.props.setTracks(tracks);
  }

  render() {
    const { playlists } = this.props;
    return (
      <div>
        <h1 className="title">Mis listas</h1>
        {playlists
          ? playlists.map(playlist => (
              <p
                onClick={() => this.getTracksByPlaylist(playlist.id)}
                className="name"
                key={playlist.id}
              >
                {playlist.playlistName}
              </p>
            ))
          : "No tienes playlists"}
      </div>
    );
  }
}

export default Playlists;
