/* eslint-disable no-unused-vars */
import { CartProduct } from './reducer'

export enum ActionTypes {
  ADD_CART_PRODUCT = 'ADD_CART_PRODUCT',
  UPDATE_CART_PRODUCT_AMOUNT = 'UPDATE_CART_PRODUCT_AMOUNT',
  REMOVE_CART_PRODUCT = 'REMOVE_CART_PRODUCT',
  RESET_CART_PRODUCTS = 'RESET_CART_PRODUCTS',
}

export function addCartProductAction(product: CartProduct) {
  return {
    type: ActionTypes.ADD_CART_PRODUCT,
    payload: {
      product,
    },
  }
}

export function updateCartProductAmountAction(id: number, amount: number) {
  return {
    type: ActionTypes.UPDATE_CART_PRODUCT_AMOUNT,
    payload: {
      id,
      amount,
    },
  }
}

export function removeCartProductAction(id: number) {
  return {
    type: ActionTypes.REMOVE_CART_PRODUCT,
    payload: {
      id,
    },
  }
}

export function resetCartProductsAction() {
  return {
    type: ActionTypes.RESET_CART_PRODUCTS,
  }
}
