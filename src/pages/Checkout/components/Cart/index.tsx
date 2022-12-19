// LIBS, HOOKS, ETC
import { useContext, useEffect, useState } from 'react'
import { api } from '../../../../services/api'

// COMPONENT
import { CartContext } from '../../../../contexts/CartContext'
import { formatPrice } from '../../../../util/format'

// STYLE
import {
  CartContainer,
  OrderConfirmationTab,
  ProductCard,
  ShoppingButtons,
} from './styles'

// ICONS, IMAGES
import { Minus, Plus, Trash } from 'phosphor-react'

interface ProductsData {
  id: number
  name: string
  tag: string[]
  description: string
  price: number
  path: string
  amount: number
}

export function Cart() {
  const {
    cart,
    addProductToCart,
    reduceCartProductAmount,
    removeProductFromCart,
  } = useContext(CartContext)
  const [cartProductsData, setCartProductsData] = useState<ProductsData[]>([])

  async function handleAddProductToCart(productId: number, amount: number) {
    addProductToCart(productId, amount)
  }

  function handleRemoveProductFromCart(productId: number) {
    removeProductFromCart(productId)
  }

  useEffect(() => {
    async function getCartProductsData() {
      const cartData = await Promise.all(
        cart.map(async (product) => {
          const productData = await api.get(`products/${product.id}`)
          return { ...productData.data, amount: product.amount }
        }),
      )

      setCartProductsData(cartData)
    }

    getCartProductsData()
  }, [cart])

  const deliveryPrice = 3.5
  const cartTotalPrice = cartProductsData.reduce((totalPrice, product) => {
    totalPrice += product.price * product.amount
    return totalPrice
  }, 0)

  const isSubmitDisabled = cart.length <= 0

  return (
    <CartContainer>
      {cartProductsData.map((product) => {
        return (
          <ProductCard key={product.id}>
            <img src={product.path} alt="" />
            <div>
              <h2>{product.name}</h2>
              <ShoppingButtons>
                <div>
                  <button
                    type="button"
                    onClick={() => reduceCartProductAmount(product.id)}
                  >
                    <Minus size="14" weight="bold" />
                  </button>
                  <p>{product.amount}</p>
                  <button
                    type="button"
                    onClick={() => {
                      handleAddProductToCart(product.id, 1)
                    }}
                  >
                    <Plus size="14" weight="bold" />
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={() => {
                      handleRemoveProductFromCart(product.id)
                    }}
                  >
                    <Trash size="14" />
                    <label>REMOVER</label>
                  </button>
                </div>
              </ShoppingButtons>
            </div>
            <p>{formatPrice(product.price * product.amount)}</p>
          </ProductCard>
        )
      })}

      <OrderConfirmationTab>
        <div>
          <span>
            <p>Total de itens</p>
            <p>{formatPrice(cartTotalPrice)}</p>
          </span>
          <span>
            <p>Entrega</p>
            <p>{formatPrice(deliveryPrice)}</p>
          </span>
          <span>
            <p>Total</p>
            <p>{formatPrice(cartTotalPrice + deliveryPrice)}</p>
          </span>
        </div>

        <input
          type="submit"
          value="CONFIRMAR PEDIDO"
          disabled={isSubmitDisabled}
        />
      </OrderConfirmationTab>
    </CartContainer>
  )
}
