import React from 'react'

export function SongsCount({totalTracks}: {totalTracks: number}) {
    return <div className="songs-count">
        {totalTracks > 999 ? '999+' : totalTracks}
    </div>
}

export default SongsCount
