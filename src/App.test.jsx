import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

function renderApp() {
  return render(
    <HelmetProvider>
      <App />
    </HelmetProvider>
  );
}

test('renders the primary navigation links', () => {
  renderApp();
  expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
  expect(screen.getByText(/about me/i)).toBeInTheDocument();
});

// Guards against the react-bulma-components / React 19 regression where
// modifier classes (e.g. is-multiline) silently vanished, breaking the
// Bulma layout. See the "Replace react-bulma-components" commit.
test('portfolio card grids keep the is-multiline modifier so they wrap', () => {
  const { container } = renderApp();
  const columns = container.querySelectorAll('.columns');
  expect(columns.length).toBeGreaterThan(0);
  columns.forEach((col) => {
    expect(col).toHaveClass('is-multiline');
  });
});

test('portfolio tabs render as toggle tabs with an active item', () => {
  const { container } = renderApp();
  const tabs = container.querySelector('.tabs');
  expect(tabs).toHaveClass('is-toggle');
  // The active tab must be a clickable anchor, not an unstyled element.
  expect(container.querySelector('.tabs li.is-active a')).toBeInTheDocument();
});
