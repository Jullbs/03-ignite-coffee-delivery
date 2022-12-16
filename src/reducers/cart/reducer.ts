// LIB, HOOKS, ETC
import { produce } from 'immer'

import { ActionTypes } from './actions'

export interface CartProduct {
  id: number
  name: string
  tags: string[]
  description: string
  price: number
  path: string
  amount: number
}

interface CartState {
  cart: CartProduct[]
}

export function cartReducer(state: CartState, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_CART_PRODUCT:
      return produce(state, (draft) => {
        draft.cart.push({ ...action.payload.product })
      })

    case ActionTypes.UPDATE_CART_PRODUCT_AMOUNT:
      return produce(state, (draft) => {
        draft.cart = draft.cart.map((product) => {
          if (product.id === action.payload.id) {
            return { ...product, amount: action.payload.amount }
          } else {
            return product
          }
        })
      })

    case ActionTypes.REMOVE_CART_PRODUCT:
      return produce(state, (draft) => {
        draft.cart = draft.cart.filter(
          (product) => product.id !== action.payload.id,
        )
      })

    case ActionTypes.RESET_CART_PRODUCTS:
      return produce(state, (draft) => {
        draft.cart = []
      })

    default:
      return state
  }
}
