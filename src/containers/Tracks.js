import { connect } from "react-redux";
import Tracks from "../component/Tracks";

import { setTracks } from "../actions";

const mapStateToProps = state => ({
  search: state.spotify.search,
  tracks: state.spotify.tracks
});

const mapDispatchToProps = dispatch => ({
  setTracks: tracks => dispatch(setTracks(tracks))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tracks);
