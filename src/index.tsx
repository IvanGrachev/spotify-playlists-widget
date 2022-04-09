import React from 'react';
import './index.sass';
import './Playlists/Playlist.sass';
import './Tracks/Track.sass';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from "react-dom/client";

const container = document.getElementById('root')
// @ts-ignore
const root = createRoot(container);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
