import React, { Fragment } from "react";

import Login from "./Login";
import User from "../containers/User";
/**
 * Search component
 * @param {string} hash
 * @param {function} setSearch
 * @author [Ender Bonnet](https://github.com/enbonnet)
 */
const Search = ({ hash, setSearch }) => {
  return (
    <div>
      <h1 className="title">To Spotify</h1>
      <User />
      {hash ? (
        <Fragment>
          <p className="info">
            Puedes buscar aquí tu artista o canción favorita{" "}
            <span role="img" aria-label="emoji">
              😃
            </span>
          </p>
          <form
            onSubmit={e => {
              e.preventDefault();
              setSearch(document.getElementById("search").value);
            }}
          >
            <div className="field has-addons">
              <div className="control is-expanded">
                <input
                  className="input"
                  id="search"
                  name="search"
                  type="text"
                  placeholder="Daft Punk"
                />
              </div>
              <div className="control">
                <button type="submit" className="button is-success">
                  Buscar
                </button>
              </div>
            </div>
          </form>
        </Fragment>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Search;
