// LIBS, HOOKS, ETC
import { useContext, useEffect, useState } from 'react'
import { api } from '../../../../services/api'

import { formatPrice } from '../../../../util/format'

// COMPONENT
import { CartContext } from '../../../../contexts/CartContext'

// STYLE
import {
  ItemContainer,
  ProductsShelfContainer,
  ShoppingButtons,
} from './styles'

// ICONS, IMAGES
import { ShoppingCart, Plus, Minus } from 'phosphor-react'

export interface Product {
  id: number
  name: string
  tags: string[]
  description: string
  price: number
  path: string
}

export function ProductsShelf() {
  const [products, setProducts] = useState<Product[]>([])

  const { addProductToCart } = useContext(CartContext)

  async function handleAddProductToCart(productId: number) {
    addProductToCart(productId)
  }

  useEffect(() => {
    async function loadProducts() {
      api.get('products').then((response) => setProducts(response.data))
    }

    loadProducts()
  }, [])

  return (
    <ProductsShelfContainer>
      <h1>Nossos cafés</h1>
      <ItemContainer>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <img src={product.path} alt="" />
              <span>
                {product.tags.map((tag) => {
                  return <p key={tag}>{tag}</p>
                })}
              </span>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <ShoppingButtons>
                <p>{formatPrice(product.price)}</p>
                <div>
                  <button type="button">
                    <Minus size="14" weight="bold" />
                  </button>
                  <p>1</p>
                  <button type="button">
                    <Plus size="14" weight="bold" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => handleAddProductToCart(product.id)}
                >
                  <ShoppingCart size="38" weight="fill" />
                </button>
              </ShoppingButtons>
            </li>
          )
        })}
      </ItemContainer>
    </ProductsShelfContainer>
  )
}
