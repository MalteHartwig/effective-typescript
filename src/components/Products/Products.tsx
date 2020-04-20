import React, { useEffect } from 'react';
import { BulkProduct, UnitProduct, Product, ProductType } from '../../redux/types';

export const UnconnectedProducts = (props: any) => {
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
        {props.products.map((product: any) => {
          let label;

          if (product.type === ProductType.BULK)
            label = renderBulk(product as BulkProduct)
          else if (product.type === ProductType.UNIT)
            label = renderUnit(product as UnitProduct)
          else 
            label = product.toString();
          
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

export const renderPriceWithCurrency = (product: Product) => `${product.currency} (${product.price})`;
