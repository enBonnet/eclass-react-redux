import React from "react";

import Container from "./Container";
import Footer from "./Footer";
import Search from "../containers/Search";
import Tracks from "../containers/Tracks";
import Playlists from "../containers/Playlists";
import Artists from "../containers/Artists";
import Albums from "../containers/Albums";

const App = () => {
  return (
    <Container>
      <Search />
      <Tracks />
      <Albums />
      <Artists />
      <Playlists />
      <Footer />
    </Container>
  );
};

export default App;
