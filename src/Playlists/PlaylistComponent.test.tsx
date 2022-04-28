import React from 'react';
import { render, cleanup, fireEvent  } from '@testing-library/react';
import PlaylistComponent from './PlaylistComponent';
import mockPlaylist from "../mocks/playlistMock";


it('should render PlaylistComponent', () => {
    const { getByText } = render(
        <PlaylistComponent playlist={mockPlaylist} />
    );

    expect(getByText('Sample')).toBeInTheDocument()
    expect(getByText('SampleData')).toBeInTheDocument()

});


it('should expand playlist by tracks', () => {
    const { queryByTestId, getByTestId  } = render(
        <PlaylistComponent playlist={mockPlaylist} />
    );

    fireEvent.click(getByTestId('playlist-description'))
    expect(getByTestId('expanded-playlist')).toBeInTheDocument()


    fireEvent.click(getByTestId('playlist-description'))
    expect(queryByTestId('expanded-playlist')).not.toBeInTheDocument()

});
