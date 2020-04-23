import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MainState } from '../../redux/types';
import { loadProducts } from '../../redux/actions';
import { UnconnectedProducts, ProductsStateProps, ProductsDispatchProps } from './Products';

const mapStateToProps = (state: MainState): ProductsStateProps => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch: Dispatch): ProductsDispatchProps => ({
  loadProducts: () => dispatch(loadProducts()),
});

export const Products = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedProducts);