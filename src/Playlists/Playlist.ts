export interface Image {
    height: number | null;
    width: number | null;
    url: string;
}

export interface Artist {
    name: string;
    id: string;
}

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
}

export interface Playlist {
    name: string;
    images: Image[];
    followers: number;
    description: string;
    tracks: Tracks;
    id: string;
}

export default Playlist
