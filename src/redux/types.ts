export enum ProductType {
  BULK,
  UNIT,
}

export type Product = {
  id: number;
  name: string;
  manufacturer: string;
  price: number;
  currency: string;
  type: ProductType;
};

export type UnitProduct = Product & {
  type: ProductType.UNIT;
  weight: number;
}

export type BulkProduct = Product & {
  type: ProductType.BULK;
  minimum: number;
}

export const isBulk = (product: Product): product is BulkProduct =>
  product.type === ProductType.BULK;
export const isUnit = (product: Product): product is UnitProduct =>
  "weight" in product;

export type CartItem = {
  id: number;
  quantity: number;
};

export type User = {
  name: string;
  isSuperUser: boolean;
}

export type MainState = {
  user: undefined | User;
  cart: CartItem[];
  products: Product[];
}