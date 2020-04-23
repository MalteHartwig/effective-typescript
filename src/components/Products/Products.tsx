import React, { useEffect } from 'react';
import { BulkProduct, UnitProduct, Product, isBulk, isUnit } from '../../redux/types';

export type ProductsStateProps = {
  products: Product[];
};

export type ProductsDispatchProps = {
  loadProducts: () => any;
};

export type ProductsProps = 
  ProductsStateProps & ProductsDispatchProps & { title: string }

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

const renderBulk = (product: BulkProduct) => (
  `${product.name} has minimum size of ${product.minimum}`
);

const renderUnit = (product: UnitProduct) => (
  `${product.name} weighs ${product.weight}`
);

export const renderPriceWithCurrency = 
  (product: Pick<Product, 'price' | 'currency'>) => `${product.currency} (${product.price})`;
