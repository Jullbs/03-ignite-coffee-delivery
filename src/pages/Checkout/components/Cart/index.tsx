// STYLE
import {
  CartContainer,
  OrderConfirmationTab,
  ProductCard,
  ShoppingButtons,
} from './styles'

// ICONS, IMAGES
import { Minus, Plus, Trash } from 'phosphor-react'

export function Cart() {
  return (
    <CartContainer>
      <ProductCard>
        <img src="/images/expresso-tradicional.png" alt="" />
        <div>
          <h2>Expresso Tradicional</h2>
          <ShoppingButtons>
            <div>
              <button>
                <Minus size="14" weight="bold" />
              </button>
              <p>1</p>
              <button>
                <Plus size="14" weight="bold" />
              </button>
            </div>
            <div>
              <button>
                <Trash size="14" />
              </button>
              <p>REMOVER</p>
            </div>
          </ShoppingButtons>
        </div>
        <p>R$ 6,66</p>
      </ProductCard>
      <OrderConfirmationTab>
        <div>
          <span>
            <p>Total de itens</p>
            <p>R$ 6,66</p>
          </span>
          <span>
            <p>Entrega</p>
            <p>R$ 3,33</p>
          </span>
          <span>
            <p>Total</p>
            <p>R$ 9,99</p>
          </span>
        </div>

        <input type="submit" value="CONFIRMAR PEDIDO" />
      </OrderConfirmationTab>
    </CartContainer>
  )
}
