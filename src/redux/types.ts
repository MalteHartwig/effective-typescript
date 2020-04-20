import { Environment } from "../context/environment";

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

export type CartItem = {
  id: number;
  quantity: number;
};

export type User = {
  name: string;
  isSuperUser: boolean;
}

export type MainState = {
  environment: Environment;
  user: undefined | User;
  cart: CartItem[];
  products: Product[];
}