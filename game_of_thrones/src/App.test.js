import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { handlers } from './mocks/handlers';
import App from './App';

const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterAll(() => server.close());


test('renders header and footer', () => {
  render(<App />);
  const headerElement = screen.getByText(/Game of Thrones/i);
  console.log('THE linkElement:  ', headerElement)
  expect(headerElement).toBeInTheDocument();
  expect(headerElement.tagName).toBe('H1');
  const moreButton = screen.getByText('More');
  expect(moreButton).toBeInTheDocument();
  // simulate onClick
});
test('load more click', async () => {
  const { container }  = render(<App />);
  await waitFor(() => {
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.getElementsByClassName('got-card').length).toBe(4);
  }, {timeout: 3000});
  const moreButton = screen.getByText('More');
  fireEvent.click(moreButton);
  await waitFor(() => {
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    expect(container.getElementsByClassName('got-card').length).toBe(8);
  }, {timeout: 1000});
  expect(moreButton).toBeDisabled();
})
