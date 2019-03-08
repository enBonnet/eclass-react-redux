import { connect } from "react-redux";
import User from "../component/User";

import { setUserInfo } from "../actions";

const mapStateToProps = state => ({
  hash: state.spotify.hash,
  userInfo: state.spotify.userInfo
});

const mapDispatchToProps = dispatch => ({
  setUserInfo: userInfo => dispatch(setUserInfo(userInfo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
