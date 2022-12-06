// LIBS, HOOKS, ETC
import { useEffect, useState } from 'react'
import { api } from '../../../../services/api'

import { formatPrice } from '../../../../util/format'

// STYLE
import {
  ItemContainer,
  ProductsShelfContainer,
  ShoppingButtons,
} from './styles'

// ICONS, IMAGES
import { ShoppingCart, Plus, Minus } from 'phosphor-react'

interface Product {
  id: number
  name: string
  tags: string[]
  description: string
  price: number
  path: string
}

export function ProductsShelf() {
  const [products, setProducts] = useState<Product[]>([])

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
                  <button>
                    <Minus size="14" weight="bold" />
                  </button>
                  <p>1</p>
                  <button>
                    <Plus size="14" weight="bold" />
                  </button>
                </div>
                <ShoppingCart size="38" weight="fill" />
              </ShoppingButtons>
            </li>
          )
        })}
      </ItemContainer>
    </ProductsShelfContainer>
  )
}
