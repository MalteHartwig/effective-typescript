import { renderPriceWithCurrency } from "./Products";

describe('render price with currency', () => {
  it('can render simple price', () => {
    expect(renderPriceWithCurrency({ price: 6, currency: 'SGD' }))
      .toEqual('SGD 6');
  });

  it('can render decimal price', () => {
    expect(renderPriceWithCurrency({ price: 4.49, currency: 'SGD' }))
      .toEqual('SGD 4.49');
  });

  it('can render looooong currency', () => {
    expect(renderPriceWithCurrency({ price: 6, currency: '$'.repeat(100) }))
      .toBe(expect.stringMatching(/\${100} 6/));
  });
});
