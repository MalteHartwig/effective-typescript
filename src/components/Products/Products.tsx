import React, { useEffect } from 'react';
import { BulkProduct, UnitProduct, Product, isBulk, isUnit } from '../../redux/types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { MainState } from '../../redux/types';
import { loadProducts } from '../../redux/actions';

const mapStateToProps = (state: MainState) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadProducts: () => dispatch(loadProducts()),
});

export type ProductsProps = 
  ReturnType<typeof mapStateToProps> & 
  ReturnType<typeof mapDispatchToProps> & 
  { title: string }

export const UnconnectedProducts = (props: ProductsProps) => {
  useEffect(
    () => {
      const refresh = setInterval(props.loadProducts, 60000);
      props.loadProducts(); // immediately load products
      return () => clearInterval(refresh); // stop refresh when unmounted
    },
    [] // execute this effect only once
  );

  return (
    <>
      {props.title || 'Product List'}
      <ul>
        {props.products.map((product: Product) => {
          let label;
          
          if (isBulk(product))
            label = renderBulk(product)
          else if (isUnit(product))
            label = renderUnit(product)
          
          return `${label} @ ${renderPriceWithCurrency(product)}`
        })}
      </ul>
    </>
  );
}

export const Products = connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedProducts);

const renderBulk = (product: BulkProduct) => (
  `${product.name} has minimum size of ${product.minimum}`
);

const renderUnit = (product: UnitProduct) => (
  `${product.name} weighs ${product.weight}`
);

export const renderPriceWithCurrency = 
  (product: Pick<Product, 'price' | 'currency'>) => `${product.currency} (${product.price})`;
