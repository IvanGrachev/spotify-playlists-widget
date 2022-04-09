import React, {useContext, useState} from 'react';
import PlaylistComponent from './PlaylistComponent';
import PlaylistsContext from "../PlaylistsContext";
import Playlist from "./Playlist";
import ExpandedPlaylistHeader from "../Tracks/TracksHeader";
import Track from "../Tracks/Track";

interface Props {
    selectedPlaylist: Playlist,
    goBack: () => void;
}

export function ExpandedPlaylist({selectedPlaylist, goBack}: Props){
    return (<div className="expanded-playlist" onClick={() => goBack()}>
        <ExpandedPlaylistHeader />
        {selectedPlaylist.tracks.items.map((item, index) => <Track index={index} track={item} />)}
    </div>)
}

export default ExpandedPlaylist
