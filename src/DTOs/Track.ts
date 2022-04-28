import Artist from "./Artist";


export interface Track {
    artists: Artist[];
    album: {
        name: string,
    }
    name: string;
    id: string;
    track_number: number;
    duration_ms: number;
}

export interface WrappedTrack {
    track: Track
}


export interface Tracks {
    href: string;
    items: WrappedTrack[];
    next: string | null;
    previous: string | null;
    total: number;
}

export default Track
