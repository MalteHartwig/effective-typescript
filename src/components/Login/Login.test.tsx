import { render, fireEvent } from "@testing-library/react";
import { UnconnectedLogin } from "./Login";
import React from "react";

describe('Login component', () => {
  const defaultProps = {
    user: undefined,
    onLogin: jest.fn(),
    onLogout: jest.fn(),
    environment: 'much obsolescence',
  }

  const renderWithProps = (props?: any) => 
    render(<UnconnectedLogin { ...defaultProps } { ...props } />)
  
  afterEach(() => jest.resetAllMocks());

  it('login button calls call back', async () => {
    const component = renderWithProps();
    const logoutButton = await component.findByLabelText('Login');
    fireEvent.click(logoutButton);
    expect(defaultProps.onLogout).toHaveBeenCalled();
  });

  it('logout button calls call back', async () => {
    const component = renderWithProps({
      name: 'MAWA Man',
      isSuperUser: 'yes',
    });
    const logoutButton = await component.findByLabelText('Logout');
    fireEvent.click(logoutButton);
    expect(defaultProps.onLogout).toHaveBeenCalled();
  });
});
