import React from 'react';
import { render, cleanup, fireEvent  } from '@testing-library/react';
import PlaylistsContainer from './PlaylistsContainer';
import {PlaylistsContext} from "../PlaylistsContext";
import mockPlaylist from "../mocks/playlistMock";

const fakePlaylists = [
    mockPlaylist,
    {...mockPlaylist, name: 'Sample2', id: 'test2'}
]

it('renders PlaylistsContainer', () => {
    const { getByText } = render(
        <PlaylistsContext.Provider value={{playlists: fakePlaylists}}>
            <PlaylistsContainer/>
        </PlaylistsContext.Provider>
    );

    expect(getByText('Sample')).toBeInTheDocument()
    expect(getByText('Sample2')).toBeInTheDocument()
});


it('toggle theme', () => {
    const { getByTestId } = render(
        <PlaylistsContext.Provider value={{playlists: fakePlaylists}}>
            <PlaylistsContainer/>
        </PlaylistsContext.Provider>
    );

    fireEvent.click(getByTestId('toggle-theme-btn'))
    expect(getByTestId('playlist-container')).toHaveClass('dark-theme')


    fireEvent.click(getByTestId('toggle-theme-btn'))
    expect(getByTestId('playlist-container')).not.toHaveClass('dark-theme')

});
