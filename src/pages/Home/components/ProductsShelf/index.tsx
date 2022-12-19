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

interface ProductAmount {
  id: number
  amount: number
}

export function ProductsShelf() {
  const [products, setProducts] = useState<Product[]>([])
  const [productsAmountToAdd, setProductsAmountToAdd] = useState<
    ProductAmount[]
  >([
    {
      id: 1,
      amount: 1,
    },
    {
      id: 2,
      amount: 1,
    },
    {
      id: 3,
      amount: 1,
    },
    {
      id: 4,
      amount: 1,
    },
    {
      id: 5,
      amount: 1,
    },
    {
      id: 6,
      amount: 1,
    },
    {
      id: 7,
      amount: 1,
    },
    {
      id: 8,
      amount: 1,
    },
    {
      id: 9,
      amount: 1,
    },
    {
      id: 10,
      amount: 1,
    },
    {
      id: 11,
      amount: 1,
    },
    {
      id: 12,
      amount: 1,
    },
    {
      id: 13,
      amount: 1,
    },
    {
      id: 14,
      amount: 1,
    },
  ])

  const { addProductToCart } = useContext(CartContext)

  function handleProductAmountChanges(
    id: number,
    action: 'decrement' | 'increment',
  ) {
    setProductsAmountToAdd(
      productsAmountToAdd.map((product) => {
        if (product.id === id) {
          switch (action) {
            case 'increment':
              return { ...product, amount: (product.amount += 1) }
            case 'decrement':
              if (product.amount === 0) {
                break
              } else {
                return { ...product, amount: (product.amount -= 1) }
              }
          }
        }
        return { ...product }
      }),
    )
  }

  function handleAddProductToCart(productId: number) {
    const productsToAdd = productsAmountToAdd.find(
      (product) => product.id === productId,
    )

    if (productsToAdd) {
      const { id, amount } = productsToAdd
      addProductToCart(id, amount)
    }
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
                  <button
                    type="button"
                    onClick={() =>
                      handleProductAmountChanges(product.id, 'decrement')
                    }
                  >
                    <Minus size="14" weight="bold" />
                  </button>
                  <p>{productsAmountToAdd[product.id - 1].amount}</p>
                  <button
                    type="button"
                    onClick={() =>
                      handleProductAmountChanges(product.id, 'increment')
                    }
                  >
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
