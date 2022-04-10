import React, {useState} from 'react'

import Playlist from "../TransferObjects";
import ExpandedPlaylist from "./ExpandedPlaylist";
import ImageOverlay from "./ImageOverlay";

interface Props  {
    playlist: Playlist
}

export function PlaylistComponent({playlist}: Props){
    const imageUrl = playlist.images && playlist.images[0].url

    const [expanded, setExpanded] = useState(false)

    return (<div className="playlist">
        <div className="album-info"  onClick={() => {setExpanded(!expanded)}}>
            <div className="playlist-image">
                <img src={imageUrl}  alt="playlist image"/>
                <ImageOverlay totalTracks={playlist.tracks.total} />
            </div>
            <div className="playlist-info">
                <h2>{playlist.name}</h2>
                <h2>{playlist.description}</h2>
            </div>
        </div>
        <div className="expanded-container">
            {expanded && <ExpandedPlaylist selectedPlaylist={playlist} />}
        </div>
    </div>)
}

export default PlaylistComponent
