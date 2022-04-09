import React from 'react';
import './App.sass';
import {AuthContextProvider} from "./AuthContext";
import {PlaylistsContextProvider} from "./PlaylistsContext";
import {PlaylistsContainer} from "./Playlists/PlaylistsContainer";

function App() {
  return (
      <AuthContextProvider >
          <PlaylistsContextProvider>
              <PlaylistsContainer />
          </PlaylistsContextProvider>
      </AuthContextProvider>

  );
}

export default App;
