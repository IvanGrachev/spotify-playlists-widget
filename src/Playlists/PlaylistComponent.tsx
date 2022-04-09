import React, {useState} from 'react'
import Playlist from "./Playlist";
import playlist from "./Playlist";
import ExpandedPlaylist from "./ExpandedPlaylist";

interface Props  {
    playlist: Playlist
    selectPlaylist: (playlist: Playlist) => void;
}

export function PlaylistComponent({playlist, selectPlaylist}: Props){
    const imageUrl = playlist.images && playlist.images[0].url

    const [expanded, setExpanded] = useState(false)

    return (<div className="playlist" onClick={() => {setExpanded(!expanded)}}>
        <div className="album-info">
            <img src={imageUrl}  alt="album image"/>
            <div className="playlist-info">
                <h2>{playlist.name}</h2>
                <h2>{playlist.description}</h2>
            </div>
        </div>
        {expanded && <ExpandedPlaylist selectedPlaylist={playlist} goBack={() => {setExpanded(false)}} />}
    </div>)
}

export default PlaylistComponent
