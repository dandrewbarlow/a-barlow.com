import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

test('renders the primary navigation links', () => {
  render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
  expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
  expect(screen.getByText(/about me/i)).toBeInTheDocument();
});
