import React, {useContext, useState} from 'react';
import {Artist, WrappedTrack} from "../Playlists/Playlist";

interface Props {
    track: WrappedTrack,
    index: number,
}

export function getHumanizedDuration(duration: number){
    const totalSeconds = duration / 1000
    const minutes = Math.floor(totalSeconds / 60)
    const seconds = Math.round(totalSeconds % 60)
    return `${minutes}:${seconds < 10? '0': ''}${seconds}`
}

export function Track({track, index}: Props) {

    return (<div className="track flex" >
        <div className="number">{index}</div>
        <div className="title">{track.track.name}</div>
        <div className="album">{track.track.album.name}</div>
        <div className="artist">
            {track.track.artists.map((a: Artist) =>
                <React.Fragment key={a.id}>
                    <div>{a.name}</div><br/>
                </React.Fragment>
                )}
        </div>
        <div className="duration">{getHumanizedDuration(track.track.duration_ms)}</div>
    </div>)
}

export default Track
