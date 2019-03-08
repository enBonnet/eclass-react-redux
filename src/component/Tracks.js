import React, { Component } from "react";

import Player from "./Player";
import { searchTracks } from "../services/spotifyApi";
/**
 * Tracks component
 * @param {string} search
 * @author [Ender Bonnet](https://github.com/enbonnet)
 */
class Tracks extends Component {
  async componentDidUpdate(prevProps) {
    if (this.props.search !== prevProps.search) {
      const tracks = await searchTracks(this.props.search);
      this.props.setTracks(tracks);
    }
  }
  render() {
    const { tracks } = this.props;
    return (
      <div>
        <h1 className="title">Caciones</h1>
        {tracks
          ? tracks.map(track => (
              <div className="tracks name">
                <a
                  href={`${track.preview_url}`}
                  className="is-block"
                  key={track.id}
                >
                  {track.trackName}
                </a>
                {track.preview_url ? <Player url={track.preview_url} /> : ""}
              </div>
            ))
          : "No hay canciones que coincidan con tu busqueda"}
      </div>
    );
  }
}

export default Tracks;
