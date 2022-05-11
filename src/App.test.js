import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe("App component", () => {

  test('Renders App elements', () => {
    render(<App />);
    const title = screen.getByText(/hello world/i);
    const button = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/Enter your text/i)
    expect(title).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(title).toMatchSnapshot();
  });

  test("Check that the element doesn't appear", () => {
    render(<App />);
    const text = screen.queryByText(/hidden text/i);
    expect(text).toBeNull();
  })

  test("Renders data text", async () => {
    render(<App />);
    const dataText = await screen.findByText(/data/i);
    expect(dataText).toBeInTheDocument();
    expect(dataText).toHaveStyle({backgroundColor: "coral"});
  })


  // test('Toggling', () => {
  //   render(<App />);
  //   const toggleButton = screen.getByTestId('toggle-button');
  //   expect(toggleButton).toBeInTheDocument();
  //   expect(screen.queryByTestId('toggle-div')).toBeNull();
  //   fireEvent.click(toggleButton);
  //   expect(screen.getByTestId('toggle-div')).toBeInTheDocument();
  // });
})





