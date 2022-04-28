import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArtistsDetails from './ArtistsDetails';
import {testArtist} from "../mocks/artistMock";

it('should render ArtistsDetails', () => {
    const { getByTestId } = render(<ArtistsDetails artist={testArtist}  />);
    expect(getByTestId('artist-name')).toHaveTextContent('testArtist');
    expect(getByTestId('genres')).toHaveTextContent('test1, genre1, genre22');
    expect(getByTestId('followers')).toHaveTextContent('99999');
});