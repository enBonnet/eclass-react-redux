import { connect } from "react-redux";
import Artists from "../component/Artists";

import { setArtists, setAlbums } from "../actions";

const mapStateToProps = state => ({
  search: state.spotify.search,
  artists: state.spotify.artists
});

const mapDispatchToProps = dispatch => ({
  setArtists: artists => dispatch(setArtists(artists)),
  setAlbums: albums => dispatch(setAlbums(albums))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artists);
