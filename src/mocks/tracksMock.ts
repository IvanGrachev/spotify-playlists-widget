export const testTrack = {
    id: '001',
    track_number: 0,
    name: 'test1',
    duration_ms: 9999,
    album: {
        name: 'tess',
    },
    artists: [
        {
            id: 'id1',
            name: 'testArtist',
        }
    ]
}

export const testTrack2 =  {
    id: '002',
    track_number: 1,
    name: 'test2',
    duration_ms: 9999,
    album: {
        name: 'tess',
    },
    artists: [
        {
            id: 'id1',
            name: 'testArtist',
        }
    ]
}

export const testTrack3 = {
    id: '003',
    track_number: 2,
    name: 'test3',
    duration_ms: 9999,
    album: {
        name: 'tess',
    },
    artists: [
        {
            id: 'id1',
            name: 'testArtist',
        }
    ]
}

export const tracks = {
    href: 'sample_href',
    total: 9999,
    previous: null,
    next: null,
    items: [
        {
            track: testTrack
        },
        {
            track: testTrack2
        },
        {
            track: testTrack3
        }
    ]
}
