import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MainState, User } from '../../redux/types';
import { login, logout } from '../../redux/actions';
import { UnconnectedLogin, LoginStateProps, LoginDispatchProps } from './Login';

const mapStateToProps = (state: MainState): LoginStateProps => ({
});

const mapDispatchToProps = (dispatch: Dispatch): LoginDispatchProps => ({
  onLogin: (user: User) => dispatch(login(user)),
  onLogout: () => dispatch(logout()),
});

export const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedLogin);