import React from 'react';

import Playlist from "../TransferObjects";
import ExpandedPlaylistHeader from "../Tracks/TracksHeader";
import Track from "../Tracks/Track";

interface Props {
    selectedPlaylist: Playlist,
}

export function ExpandedPlaylist({selectedPlaylist}: Props){
    return (<div className="expanded-playlist">
        <ExpandedPlaylistHeader />
        {selectedPlaylist.tracks.items.map((item, index) => <Track index={index} key={item.track.id} track={item} />)}
    </div>)
}

export default ExpandedPlaylist
