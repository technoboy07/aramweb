import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/MapSection', () => () => (
  <section id="map" data-testid="map-section">
    Our Reach
  </section>
));

beforeAll(() => {
  class MockIntersectionObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    configurable: true,
    value: MockIntersectionObserver,
  });
  window.scrollTo = jest.fn();
});

test('renders ASFT brand in the hero', () => {
  render(<App />);
  expect(screen.getAllByText(/Aram Saeivom Family Trust/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/Empowering youth to/i)).toBeInTheDocument();
});
