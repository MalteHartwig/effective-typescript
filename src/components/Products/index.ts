import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MainState } from '../../redux/types';
import { loadProducts } from '../../redux/actions';
import { UnconnectedProducts } from './Products';

const mapStateToProps = (state: MainState) => ({
  cart: state.products,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadProducts: () => dispatch(loadProducts()),
});

export const Products = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedProducts);