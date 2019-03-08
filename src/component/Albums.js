import React, { Component } from "react";

import { searchAlbums, getTracksByAlbum } from "../services/spotifyApi";

class Albums extends Component {
  async componentDidUpdate(prevProps) {
    if (this.props.search !== prevProps.search) {
      const albums = await searchAlbums(this.props.search);
      this.props.setAlbums(albums);
    }
  }
  async getTracksByAlbum(id) {
    const tracks = await getTracksByAlbum(id);
    this.props.setTracks(tracks);
  }
  render() {
    const { albums } = this.props;
    return (
      <div>
        <h1 className="title">Álbunes</h1>
        {albums
          ? albums.map(album => (
              <p
                onClick={() => this.getTracksByAlbum(album.id)}
                className="name"
                key={album.id}
              >
                {album.albumName}
              </p>
            ))
          : "No hay álbunes que coincidan con tu busqueda"}
      </div>
    );
  }
}

export default Albums;
