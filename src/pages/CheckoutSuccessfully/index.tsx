// LIBS, HOOKS, ETC
import { useContext } from 'react'

// COMPONENTS
import { CartContext } from '../../contexts/CartContext'

// STYLE
import { CheckoutSuccessfullyContainer, OrderInfoTab } from './styles'

// ICONS, IMAGES
import deliveryIllustration from '../../assets/image/delivery-illustration.png'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

export function CheckoutSuccessfully() {
  const { checkoutData } = useContext(CartContext)

  return (
    <CheckoutSuccessfullyContainer>
      <div>
        <h1>Uhu! Pedido confirmado.</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
      </div>
      <div>
        <OrderInfoTab>
          <span>
            <div>
              <MapPin size="32" weight="fill" />
              <span>
                <div>
                  <p>Entrega em </p>
                  <p className="bold">
                    &nbsp; {checkoutData.street}, {checkoutData.number}
                  </p>
                </div>

                <p>
                  {checkoutData.district} - {checkoutData.city},{' '}
                  {checkoutData.state}
                </p>
              </span>
            </div>
            <div>
              <Timer size="32" weight="fill" />
              <span>
                <p>Previsão de entrega</p>
                <p className="bold">20 min - 30 min</p>
              </span>
            </div>
            <div>
              <CurrencyDollar size="32" />
              <span>
                <p>Pagamento na entrega</p>
                <p className="bold">{checkoutData.payment}</p>
              </span>
            </div>
          </span>
        </OrderInfoTab>
        <img src={deliveryIllustration} alt="" />
      </div>
    </CheckoutSuccessfullyContainer>
  )
}
