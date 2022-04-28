import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SongsCount from './SongsCount';

it('should render SongsCount', () => {
    const { getByTestId } = render(<SongsCount totalTracks={99} />);
    expect(getByTestId('songs-count')).toHaveTextContent('99');
});

it('should show 999+ when totalTracks is greater than 999', () => {
    const { getByTestId } = render(<SongsCount totalTracks={1001010101} />);
    expect(getByTestId('songs-count')).toHaveTextContent('999+');
})