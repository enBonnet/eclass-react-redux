import { connect } from "react-redux";
import Artists from "../component/Artists";

import { setArtists, setAlbums, setSearch } from "../actions";

const mapStateToProps = state => ({
  search: state.spotify.search,
  artists: state.spotify.artists
});

const mapDispatchToProps = dispatch => ({
  setArtists: artists => dispatch(setArtists(artists)),
  setAlbums: albums => dispatch(setAlbums(albums)),
  setSearch: search => dispatch(setSearch(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Artists);
