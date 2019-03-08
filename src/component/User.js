import React, { Component } from "react";

import { getUserInfo } from "../services/spotifyApi";

class User extends Component {
  async componentDidUpdate(prevProps) {
    if (this.props.hash !== prevProps.hash) {
      const { ...id } = await getUserInfo();
      this.props.setUserInfo(id);
    }
  }
  render() {
    return this.props.userInfo ? (
      <h1 className="info">Hola, {`${this.props.userInfo.id}`}</h1>
    ) : (
      <span />
    );
  }
}

export default User;
