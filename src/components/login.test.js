import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe('Login component', () => {
  test('should render login component correctly', () => {
    render(<Login />);
    const element = screen.getByRole('heading', {name: 'Login'}); // if we have multiple header we can specify name
    expect(element).toBeInTheDocument();
  });
  test('length of header', () => {
    render(<Login />);
    const element = screen.getAllByRole('heading');  
    expect(element.length).toBe(1);
  });
  
  test('login button',()=>{
    render(<Login/>)
    const element = screen.getByTestId('btn')
    expect(element).toBeInTheDocument();
  })
     
  test('test',()=>{
   render(<Login/>)
  const handlechange= jest.fn()
  expect(handlechange).toBeTruthy()  

    
  })
  
});
