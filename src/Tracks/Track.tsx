import React, {useContext, useState, MouseEvent} from 'react';

import Artist from "../DTOs/Artist";
import {WrappedTrack} from "../DTOs/Track";
import AuthContext from "../AuthContext";
import {ArtistDetails, ArtistFull} from "./ArtistsDetails";

const ARTIST_BASE_URL = 'https://api.spotify.com/v1/artists'

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
    const [selectedArtist, setSelectedArtist] = useState<ArtistFull | null>(null)
    const {accessToken} = useContext(AuthContext)

    async function loadArtistDetails(artist: Artist) {
        try {
            const response = await fetch(`${ARTIST_BASE_URL}/${artist.id}`, {
                method: "get",
                headers: {
                "Authorization": `Bearer ${accessToken}`
                }
            })
            const artistFull = await response.json()
            setSelectedArtist(artistFull)

        } catch (ex){
            console.log("An Error occured while loading artist's details")
            console.log(ex)
        }
    }


    function toggleArtistsDetails(event: MouseEvent<HTMLAnchorElement>, artist: Artist) {
        event.stopPropagation()
        if(selectedArtist !== null && selectedArtist.id === artist.id)
            setSelectedArtist(null)
        else loadArtistDetails(artist)
    }

    return (
        <div className="track">
            <div className="flex" >
                <div className="number">{index + 1}</div>
                <div className="title">{track.track.name}</div>
                <div className="album">{track.track.album.name}</div>
                <div className="artist">
                    {track.track.artists.map((a: Artist) =>
                        <React.Fragment key={a.id}>
                            <a href={void(0)}
                               className={`${a.id === (selectedArtist && selectedArtist.id)? 'expanded-artist' : ''}`}
                               onClick={(e) => {toggleArtistsDetails(e, a)}}>{a.name}</a><br/>
                        </React.Fragment>
                    )}
                </div>
                <div className="duration">{getHumanizedDuration(track.track.duration_ms)}</div>
            </div>
            {!!selectedArtist && <ArtistDetails artist={selectedArtist} /> }
        </div>)
}

export default Track
