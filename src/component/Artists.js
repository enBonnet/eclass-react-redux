import React, { Component } from "react";

import { searchArtists, getArtistAlbums } from "../services/spotifyApi";
/**
 * Artists component
 * @author [Ender Bonnet](https://github.com/enbonnet)
 */
class Artists extends Component {
  async componentDidUpdate(prevProps) {
    if (this.props.search !== prevProps.search) {
      const tracks = await searchArtists(this.props.search);
      this.props.setArtists(tracks);
    }
  }
  async getArtistsAlbums(id) {
    const albums = await getArtistAlbums(id);
    this.props.setAlbums(albums);
  }
  render() {
    const { artists } = this.props;
    return (
      <div>
        <h1 className="title">Artistas</h1>
        {artists
          ? artists.map(artist => (
              <p
                onClick={() => this.getArtistsAlbums(artist.id)}
                className="name"
                key={artist.id}
              >
                {artist.artistName}
              </p>
            ))
          : "No hay artistas que coincidan con tu busqueda"}
      </div>
    );
  }
}

export default Artists;
