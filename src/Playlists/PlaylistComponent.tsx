import React, {useState} from 'react'

import Playlist from "../DTOs/Playlist";
import ExpandedPlaylist from "./ExpandedPlaylist";
import SongsCount from "./SongsCount";

interface Props  {
    playlist: Playlist
}

export function PlaylistComponent({playlist}: Props){
    const imageUrl = playlist.images && playlist.images[0].url

    const [expanded, setExpanded] = useState<boolean>(false)

    return (<div className="playlist">
        <div className="playlist-description" data-testid="playlist-description" onClick={() => {setExpanded(!expanded)}}>
            <div className="playlist-image">
                <img src={imageUrl}  alt="playlist image"/>
                <SongsCount totalTracks={playlist.tracks.total} />
            </div>
            <div className="playlist-info">
                <h2>{playlist.name}</h2>
                <h2>{playlist.description}</h2>
            </div>
        </div>
        {expanded && <div data-testid="expanded-playlist" className="expanded-container">
            <ExpandedPlaylist selectedPlaylist={playlist} />
        </div> }
    </div>)
}

export default PlaylistComponent
