import React, { useContext, useState, ChangeEvent } from 'react';
import { EnvironmentContext } from '../../context/environment';
import { User } from '../../redux/types';

export type LoginStateProps = {
  user?: User;
};

export type LoginDispatchProps = {
  onLogin: (user: User) => any;
  onLogout: () => any;
};

export type LoginProps = LoginStateProps & LoginDispatchProps;

export const UnconnectedLogin = (props: LoginProps) => {
  const environment = useContext(EnvironmentContext);

  const [username, setUsername] = useState('');

  return props.user
    ? (
      <>
        {`Welcome to ${environment}`}
        <button onClick={() => props.onLogout()}>Logout</button>
      </>
    )
    : (
      <>
        <textarea onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setUsername(event.target.value)} />
        <button onClick={() => props.onLogin(authenticateUser(username))}>Login</button>
      </>
    );
}

const authenticateUser = (username: string): User => {
  return {
    name: username,
    isSuperUser: true,
  }
};