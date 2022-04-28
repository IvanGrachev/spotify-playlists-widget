import React from 'react'

export function SongsCount({totalTracks}: {totalTracks: number}) {
    return <div data-testid="songs-count" className="songs-count">
        {totalTracks > 999 ? '999+' : totalTracks}
    </div>
}

export default SongsCount
