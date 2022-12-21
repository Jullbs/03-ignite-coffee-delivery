// LIBS, HOOKS, ETC
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'
import { api } from '../services/api'
import { toast } from 'react-toastify'

// COMPONENT
import { CartProduct, cartReducer } from '../reducers/cart/reducer'
import {
  addCartProductAction,
  removeCartProductAction,
  updateCartProductAmountAction,
  resetCartProductsAction,
} from '../reducers/cart/actions'

// MAIN CODE
export interface CheckoutDataType {
  cep: string
  city: string
  complement?: string
  district: string
  number: string
  payment: string
  state: string
  street: string
}

interface CartContextType {
  cart: CartProduct[]
  checkoutData: CheckoutDataType
  addProductToCart: (productId: number, amount: number) => void
  reduceCartProductAmount: (productId: number) => void
  removeProductFromCart: (id: number) => void
  updateCheckoutData: (data: CheckoutDataType) => void
  resetCartProducts: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
    },
    () => {
      const storedCartStateAsJSON = localStorage.getItem(
        '@ignite-coffee-delivery:cart-state',
      )

      if (storedCartStateAsJSON) {
        return JSON.parse(storedCartStateAsJSON)
      }

      return {
        cart: [],
      }
    },
  )
  const { cart } = cartState

  const [checkoutData, setCheckoutData] = useState<CheckoutDataType>({
    cep: '12345678',
    city: 'Porto Alegre',
    complement: '',
    district: 'Farrapos',
    number: '102',
    payment: 'Cartão de Crédito',
    state: 'RS',
    street: 'Rua João Daniel Martinelli',
  })

  const addProductToCart = async (productId: number, amount: number) => {
    try {
      const productStock = await api.get(`stock/${productId}`)
      const productAlreadyInCart = await cart.find(
        (product) => product.id === productId,
      )

      if (productAlreadyInCart) {
        if (productAlreadyInCart.amount + amount > productStock.data.amount) {
          toast.error('Quantidade solicitada fora de estoque')
          return
        } else {
          dispatch(
            updateCartProductAmountAction(
              productId,
              productAlreadyInCart.amount + amount,
            ),
          )
        }
      } else {
        if (amount > productStock.data.amount) {
          toast.error('Quantidade solicitada fora de estoque')
          return
        } else {
          dispatch(addCartProductAction({ id: productId, amount }))
        }
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

  const resetCartProducts = () => {
    dispatch(resetCartProductsAction())
  }

  useEffect(() => {
    const cartStateJSON = JSON.stringify(cartState)

    localStorage.setItem('@ignite-coffee-delivery:cart-state', cartStateJSON)
  }, [cartState])

  const updateCheckoutData = (data: CheckoutDataType) => {
    setCheckoutData(data)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        checkoutData,
        addProductToCart,
        reduceCartProductAmount,
        removeProductFromCart,
        updateCheckoutData,
        resetCartProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
