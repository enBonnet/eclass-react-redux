import { connect } from "react-redux";
import Search from "../component/Search";

import { setSearch } from "../actions";

const mapStateToProps = state => ({
  hash: state.spotify.hash
});

const mapDispatchToProps = dispatch => ({
  setSearch: search => dispatch(setSearch(search))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
