import React from 'react';
import { render } from "@testing-library/react";
import App from './App';
import Players from './components/Players';

test('renders without crashing', () => {
  render(<App />);
});

test('render button light/dark mode', () => {
  const { getByText } = render(<App />);
  const button = getByText(/dark mode/i);
})

test('render united states', (props) => {
  const { getByText } = render(<App {...props} />);
  expect(getByText('United States')).toBeInDocument();
})