// LIBS, HOOKS, ETC
import { createContext, ReactNode, useReducer } from 'react'
import { api } from '../services/api'

// COMPONENT
import { CartProduct, cartReducer } from '../reducers/cart/reducer'
import { addCartProductAction } from '../reducers/cart/actions'

// MAIN CODE
interface CartContextType {
  cart: CartProduct[]
  addProductToCart: (id: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, {
    cart: [],
  })

  const { cart } = cartState

  const addProductToCart = async (id: number) => {
    const product = await api.get(`products/${id}`)
    dispatch(addCartProductAction(product.data))
  }

  console.log(cart)

  return (
    <CartContext.Provider value={{ cart, addProductToCart }}>
      {children}
    </CartContext.Provider>
  )
}
