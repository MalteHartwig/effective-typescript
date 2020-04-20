import { User } from "./types";

export type Action<T> = {
  type: string;
  payload?: T;
}

export const login = (user: User) => ({
  type: 'LOGIN',
  payload: { user },
});

export const logout = () => ({
  type: 'LOGOUT',
});

export const loadProducts = () => ({
  type: 'LOAD_PRODUCTS',
});