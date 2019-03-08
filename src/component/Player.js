import React, { Component, Fragment } from "react";
/**
 * Player component
 * Player for preview url song
 * @param {string} url
 * @author [Ender Bonnet](https://github.com/enbonnet)
 */
class Player extends Component {
  state = {
    play: false,
    url: this.props.url
  };
  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.audio.play() : this.audio.pause();
    });
  };
  async componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      this.setState({ url: this.props.url });
    }
  }
  audio = new Audio(this.state.url);
  render() {
    return (
      <Fragment>
        <p
          className="player inline-block"
          onMouseEnter={this.togglePlay}
          onMouseLeave={this.togglePlay}
        >
          {this.state.play ? (
            <span role="img" aria-label="sonando">
              🎶
            </span>
          ) : (
            <span role="img" aria-label="sonar">
              🔈
            </span>
          )}
        </p>
      </Fragment>
    );
  }
}

export default Player;
