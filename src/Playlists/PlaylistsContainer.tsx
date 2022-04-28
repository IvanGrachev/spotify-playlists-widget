import React, {useContext, useState} from 'react';

import PlaylistComponent from './PlaylistComponent';
import PlaylistsContext, {PlaylistsContextValue} from "../PlaylistsContext";
import Playlist from "../DTOs/Playlist";

const LIGHT_THEME = 'light-theme'
const DARK_THEME = 'dark-theme'

export function PlaylistsContainer() {
    const {playlists} = useContext<PlaylistsContextValue>(PlaylistsContext);
    const [theme, setTheme] = useState<string>(LIGHT_THEME)

    function toggleTheme(){
        if(theme === LIGHT_THEME){
            setTheme(DARK_THEME)
        } else setTheme(LIGHT_THEME)
    }

    return (<div className={`playlist-container ${theme}`}>
        <h1>My Playlists</h1>
        <button className="toggle-theme-btn" onClick={toggleTheme}>ToggleTheme</button>
        <div>
            {playlists.map((p: Playlist) => <PlaylistComponent key={p.id} playlist={p}/>)}
        </div>

    </div>)
}
