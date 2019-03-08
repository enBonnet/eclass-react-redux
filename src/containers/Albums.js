import { connect } from "react-redux";
import Albums from "../component/Albums";

import { setAlbums, setTracks } from "../actions";

const mapStateToProps = state => ({
  search: state.spotify.search,
  albums: state.spotify.albums
});

const mapDispatchToProps = dispatch => ({
  setAlbums: albums => dispatch(setAlbums(albums)),
  setTracks: tracks => dispatch(setTracks(tracks))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Albums);
