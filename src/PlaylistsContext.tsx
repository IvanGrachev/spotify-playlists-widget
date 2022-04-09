import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import Playlist from "./Playlists/Playlist";
import AuthContext from "./AuthContext";

export interface PlaylistsContextValue {
    playlists: Playlist[]
}

export const PlaylistsContext = createContext<PlaylistsContextValue>({playlists: []});


const PLAYLIST_IDS = [
    '37i9dQZF1DWXRqgorJj26U',
    '37i9dQZF1DWWGFQLoP9qlv',
    '37i9dQZEVXbKCF6dqVpDkS',
    '37i9dQZF1DZ06evO2x5mVQ',
    '3y4vRqCFIbOZP1QzZglKxZ',
    '37i9dQZF1E4tkRISu6oGrx',
    '55ow5lAVQjqFuLLKE9tw33',
]

async function getPlaylistById (id: string, authToken: string): Promise<Playlist | null> {
    try {
        const response = await fetch(`https://api.spotify.com/v1/playlists/${id}`, {
            method: "get",
            headers: {
                "Authorization": `Bearer ${authToken}`
            }
        })
        return await response.json()
    }
    catch (error){
        console.error("Error", error);
        return null
    }
}

async function getPlaylists(accessToken: string): Promise<Playlist[]> {
    try {
        const promiseArray = PLAYLIST_IDS.map(id => getPlaylistById(id, accessToken))
        // @ts-ignore
        return (await Promise.all(promiseArray)).filter(value => value !== null)
    } catch (error){
        console.error("Error", error);
        return []
    }
}

type Props = {
    children: ReactNode
}

export function PlaylistsContextProvider({children}: Props) {
    const {accessToken} = useContext(AuthContext)

    const [playlists, setPlaylists] = useState<Playlist[]>([])
    useEffect(() => {
        async function executeGetPlaylists (accessToken: string) {
            const playlists = await getPlaylists(accessToken)
            setPlaylists(playlists)
        }

        if(accessToken){
            executeGetPlaylists(accessToken)
        }
    }, [accessToken])
    return <PlaylistsContext.Provider value={{playlists}}>{children}</PlaylistsContext.Provider>
}


export default PlaylistsContext;
