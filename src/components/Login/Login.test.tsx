import { render, fireEvent } from "@testing-library/react";
import { UnconnectedLogin, LoginProps } from "./Login";
import React from "react";

describe('Login component', () => {
  const defaultProps: LoginProps = {
    user: undefined,
    onLogin: jest.fn(),
    onLogout: jest.fn(),
  }

  const renderWithProps = (props?: Partial<LoginProps>) => 
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
      user: {
        name: 'MAWA Man',
        isSuperUser: true,
      }
    });
    const logoutButton = await component.findByLabelText('Logout');
    fireEvent.click(logoutButton);
    expect(defaultProps.onLogout).toHaveBeenCalled();
  });
});
