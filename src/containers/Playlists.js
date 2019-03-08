import { connect } from "react-redux";
import Playlists from "../component/Playlists";

import { setPlaylist, setTracks } from "../actions";

const mapStateToProps = state => ({
  playlists: state.spotify.playlists,
  hash: state.spotify.hash
});

const mapDispatchToProps = dispatch => ({
  setPlaylist: playlists => dispatch(setPlaylist(playlists)),
  setTracks: tracks => dispatch(setTracks(tracks))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playlists);
