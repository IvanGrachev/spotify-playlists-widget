import {Image} from "./Image";
import {Tracks} from "./Track";

export interface Playlist {
    name: string;
    images: Image[];
    followers: number;
    description: string;
    tracks: Tracks;
    id: string;
}

export default Playlist