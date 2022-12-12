// LIBS, HOOKS, ETC
import { createContext, ReactNode, useReducer } from 'react'
import { api } from '../services/api'
import { toast } from 'react-toastify'

// COMPONENT
import { CartProduct, cartReducer } from '../reducers/cart/reducer'
import {
  addCartProductAction,
  removeCartProductAction,
  updateCartProductAmountAction,
} from '../reducers/cart/actions'

// MAIN CODE
interface CartContextType {
  cart: CartProduct[]
  addProductToCart: (productId: number) => void
  reduceCartProductAmount: (productId: number) => void
  removeProductFromCart: (id: number) => void
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

  console.log(cart)

  const addProductToCart = async (productId: number) => {
    try {
      const productStock = await api.get(`stock/${productId}`)
      const productAlreadyInCart = await cart.find(
        (product) => product.id === productId,
      )

      if (productAlreadyInCart) {
        if (productAlreadyInCart.amount + 1 > productStock.data.amount) {
          toast.error('Quantidade solicitada fora de estoque')
          return
        } else {
          dispatch(
            updateCartProductAmountAction(
              productId,
              productAlreadyInCart.amount + 1,
            ),
          )
        }
      } else {
        const product = await api.get(`products/${productId}`)
        dispatch(addCartProductAction(product.data))
      }
    } catch {
      toast.error('Erro na adição do produto')
    }
  }

  const reduceCartProductAmount = async (productId: number) => {
    try {
      const productAlreadyInCart = await cart.find(
        (product) => product.id === productId,
      )

      if (productAlreadyInCart) {
        if (productAlreadyInCart.amount - 1 <= 0) {
          dispatch(removeCartProductAction(productId))
        } else {
          dispatch(
            updateCartProductAmountAction(
              productId,
              productAlreadyInCart.amount - 1,
            ),
          )
        }
      }
    } catch {
      toast.error('Erro na remoção do produto')
    }
  }

  const removeProductFromCart = (id: number) => {
    dispatch(removeCartProductAction(id))
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductToCart,
        reduceCartProductAmount,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
