import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe('Login component', () => {
  test('should render login component correctly', () => {
    render(<Login />);
    const element = screen.getByRole('heading');
    expect(element).toBeInTheDocument();
  });

});
