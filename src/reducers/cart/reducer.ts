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
        draft.cart.push(action.payload.product)
      })
    default:
      return state
  }
}
