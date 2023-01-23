import { render, screen } from '@testing-library/react';
import Footer from './components/Footer';

test("render a link of twitter", () => {
  render(<Footer/>);
  const linkTwitter = screen.getByAltText("Twitter");
  expect(linkTwitter).toBeInTheDocument();
});
