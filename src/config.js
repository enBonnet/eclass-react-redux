const defineUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return process.env.REACT_APP_SPOTIFY_PRODUCTION_REDIRECT_URI;
  }
  return process.env.REACT_APP_SPOTIFY_DEVELOPMENT_REDIRECT_URI;
};

export const config = {
  CLIENT_ID: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
  REDIRECT_URI: defineUrl()
};
