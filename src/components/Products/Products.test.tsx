import { renderPriceWithCurrency } from "./Products";
import { ProductType } from "../../redux/types";

describe('render price with currency', () => {
  const product = {
    id: 1,
    name: 'Bubble Tea',
    manufacturer: 'Holi',
    price: 6,
    currency: 'SGD',
    type: ProductType.UNIT,
  }
  
  it('can render simple price', () => {
    expect(renderPriceWithCurrency(product))
      .toEqual('SGD 6');
  });

  it('can render decimal price', () => {
    expect(renderPriceWithCurrency({ ...product, price: 4.49 }))
      .toEqual('SGD 4.49');
  });

  it('can render looooong currency', () => {
    expect(renderPriceWithCurrency({ ...product, currency: '$'.repeat(100) }))
      .toBe(expect.stringMatching(/\${100} 6/));
  });
});
