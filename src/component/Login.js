import React from "react";
import { connect } from "react-redux";
/**
 * Login component
 * Connected with Redux, get login info from Sporify
 * @param {object} dispatch
 * @author [Ender Bonnet](https://github.com/enbonnet)
 */
import {
  checkUrlForSpotifyAccessToken,
  getUrlToSpotifyForLogin
} from "../services/spotifyFunction";
import { setAccessToken } from "../services/spotifyApi";
import { setHash } from "../actions";

const Login = ({ dispatch }) => {
  const spotifyUrl = getUrlToSpotifyForLogin();
  const token = checkUrlForSpotifyAccessToken();
  //TODO add userinfo
  if (token) {
    //TODO do it better
    setAccessToken(token);
    dispatch(setHash(token));
    return <h1> </h1>;
  } else {
    return (
      <div className="has-text-centered">
        <p className="info">Para comenzar debes iniciar sesión en Spotify</p>
        <a className="button is-success" href={spotifyUrl}>
          Iniciar Sesión
        </a>
      </div>
    );
  }
};

export default connect()(Login);
