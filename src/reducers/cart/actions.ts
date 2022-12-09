import { CartProduct } from './reducer'

export enum ActionTypes {
  // eslint-disable-next-line no-unused-vars
  ADD_CART_PRODUCT = 'ADD_CART_PRODUCT',
}

export function addCartProductAction(product: CartProduct) {
  return {
    type: ActionTypes.ADD_CART_PRODUCT,
    payload: {
      product,
    },
  }
}
