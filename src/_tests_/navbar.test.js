import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Components/Navbar';

test('renders the back button when the location is not root', () => {
  const { getByTestId } = render(
    <MemoryRouter initialEntries={['/sample']}>
      <Navbar />
    </MemoryRouter>,
  );

  const backButton = getByTestId('back-button');

  expect(backButton).toBeTruthy(); // Check if backButton exists
});
