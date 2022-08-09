 import { render, screen } from '@testing-library/react';
import App from './App';
import {Videogames} from './components/Videogames/Videogames'

test('renders sth', () => {
  render(<App />);
  screen.debug()
  const div = screen.getByRole('div')
  //const linkElement = screen.getByText(/God of War/i);
  expect(div).toBeInTheDocument();
}); 
 
