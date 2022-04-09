import React, {useContext, useState} from 'react';
import PlaylistComponent from './PlaylistComponent';
import PlaylistsContext from "../PlaylistsContext";
import Playlist from "./Playlist";
import ExpandedPlaylist from "./ExpandedPlaylist";

export function PlaylistsContainer(){
    const {playlists} = useContext(PlaylistsContext);

    return (<div className="playlist-container">
        <h1>My Playlists</h1>
        <button className="toggle-theme-btn" onClick={() => {console.log('toggle theme')}}>ToggleTheme</button>
        <div>
            {playlists.map((p: Playlist) => <PlaylistComponent key={p.id} playlist={p}/>)}
        </div>

    </div>)
}