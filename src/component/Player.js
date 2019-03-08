import React, { Component, Fragment } from "react";

class Player extends Component {
  state = {
    play: false
  };
  audio = new Audio(this.props.url);
  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  };
  render() {
    return (
      <Fragment>
        <p
          className="player inline-block"
          onMouseEnter={this.togglePlay}
          onMouseLeave={this.togglePlay}
        >
          {this.state.play ? (
            <span role="img" aria-label="emoji">
              🎶
            </span>
          ) : (
            <span role="img" aria-label="emoji">
              🔈
            </span>
          )}
        </p>
      </Fragment>
    );
  }
}

export default Player;

// https://p.scdn.co/mp3-preview/92d40a2ae211cceb264e9ee1e67fe05f4d788200?cid=98319c258f6f4b738a62d1893145a565
