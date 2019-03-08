export const spotify = (state = [], action) => {
  switch (action.type) {
    case "SET_HASH":
      return {
        ...state,
        hash: action.hash
      };
    case "SET_SEARCH":
      return {
        ...state,
        search: action.search
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists
      };
    case "SET_TRACKS":
      return {
        ...state,
        tracks: action.tracks
      };
    case "SET_ARTISTS":
      return {
        ...state,
        artists: action.artists
      };
    case "SET_ALBUMS":
      return {
        ...state,
        albums: action.albums
      };
    case "SET_USERINFO":
      return {
        ...state,
        userInfo: action.userInfo
      };
    default:
      return state;
  }
};
