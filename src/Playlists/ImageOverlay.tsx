import React from 'react'

export function ImageOverlay({totalTracks}: {totalTracks: number}) {
    return <div className="image-overlay">
        {totalTracks > 999 ? '999+' : totalTracks}
    </div>
}

export default ImageOverlay
