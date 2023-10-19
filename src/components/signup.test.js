import { render, screen } from "@testing-library/react";
import Signup from "./Signup";

describe('Login component', () => {
    test('should render Signup component correctly', () => {
      render(<Signup/>);
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
})