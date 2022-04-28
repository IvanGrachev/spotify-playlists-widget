import {Image} from "../DTOs/Image";
import React from "react";

export interface ArtistFull {
    name: string;
    id: string;
    images: Image[];
    genres: string[];
    followers: {
        href: string | null;
        total: number;
    }

}

interface Props {
    artist: ArtistFull
}

export function ArtistDetails({artist}: Props) {
    return <div className="artist-details flex">
        <div className="number"/>
        <div className="title"/>
        <div className="album"/>
        <div className="artist"> <h4>{!!artist.images.length && <img src={artist.images[0].url} height="60px" alt={`image of ${artist.name}`}/>} <span data-testid="artist-name">{artist.name}</span><br/></h4>
            <span>Genres: </span><span data-testid="genres" className="artist-details value">{artist.genres.join(', ')}</span><br/>
            <span>Followers: <span data-testid="followers" className="value">{artist.followers.total}</span></span><br/></div>
    <div className="duration" />


    </div>
}

export default ArtistDetails
