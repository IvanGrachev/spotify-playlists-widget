import React, {useContext, useState} from 'react';
import PlaylistComponent from './PlaylistComponent';
import PlaylistsContext from "../PlaylistsContext";
import Playlist from "./Playlist";
import ExpandedPlaylist from "./ExpandedPlaylist";

export function PlaylistsContainer(){
    const {playlists} = useContext(PlaylistsContext);
    const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(null);

    return (<div className="playlist-container">
        <h1>My Playlists</h1>
        <button className="toggle-theme-btn" onClick={() => {console.log('toggle theme')}}>ToggleTheme</button>
        <div>
            {selectedPlaylist? <ExpandedPlaylist selectedPlaylist={selectedPlaylist} goBack={() => {setSelectedPlaylist(null)}} /> :
                playlists.map((p: Playlist) => <PlaylistComponent key={p.id} playlist={p} selectPlaylist={setSelectedPlaylist} />)
            }
        </div>

    </div>)
}