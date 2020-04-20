import { MainState, User, ProductType } from "./types";
import { Action } from "./actions";

const handleLogin = (state: MainState, action: Action<User>) => {
  return {
    ...state,
    user: action.payload,
  };
}

const handleLogout = (state: MainState) => {
  return {
    ...state,
    user: undefined,
  };
}

const handleLoadProducts = (state: MainState) => {
  return {
    ...state,
    products: [{
      id: 1,
      name: 'Toilet Paper',
      manufacturer: 'Bulletproof',
      price: 12.99,
      currency: 'USD',
      type: ProductType.BULK,
      minimum: 6,
    }],
  };
}

export function mainReducer(
  state: MainState = {
    environment: 'DEV',
    user: undefined,
    cart: [],
    products: [],
  },
  action: Action<any>
): MainState {
  switch (action.type) {
    case 'LOGIN':
      return handleLogin(state, action);
    case 'LOGOUT':
      return handleLogout(state);
    case 'LOAD_PRODUCTS':
      return handleLoadProducts(state);
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
      }
    default:
      return state;
  }
}