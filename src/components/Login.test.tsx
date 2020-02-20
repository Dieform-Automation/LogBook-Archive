import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

test('renders login button', () => {
  const { getByText } = render(<Login />, { wrapper: MemoryRouter });
  const loginText = getByText('Login');
  expect(loginText).toBeInTheDocument();
});
