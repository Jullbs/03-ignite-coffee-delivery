// STYLE
import { CheckoutSuccessfullyContainer, OrderInfoTab } from './styles'

// ICONS, IMAGES
import deliveryIllustration from '../../assets/image/delivery-illustration.png'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

export function CheckoutSuccessfully() {
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
                <p>Entrega em Rua João Daniel Martinelli , 102</p>
                <p>Farrapos - Porto Alegre, RS</p>
              </span>
            </div>
            <div>
              <Timer size="32" weight="fill" />
              <span>
                <p>Previsão de entrega</p>
                <p>20 min - 30 min</p>
              </span>
            </div>
            <div>
              <CurrencyDollar size="32" />
              <span>
                <p>Pagamento na entrega</p>
                <p>Cartão de Crédito</p>
              </span>
            </div>
          </span>
        </OrderInfoTab>
        <img src={deliveryIllustration} alt="" />
      </div>
    </CheckoutSuccessfullyContainer>
  )
}
