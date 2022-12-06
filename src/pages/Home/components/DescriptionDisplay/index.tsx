// STYLE
import { DescriptionContainer, IntroContent } from './styles'

// ICONS, IMAGES
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import coffeePackage from '../../../../assets/image/coffee-delivery-package.png'

export function DescriptionDisplay() {
  return (
    <DescriptionContainer>
      <section>
        <IntroContent>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </IntroContent>

        <ul>
          <li>
            <ShoppingCart size="16" weight="fill" />
            Compra simples e segura
          </li>

          <li>
            <Package size="16" weight="fill" />
            Embalagem mantém o café intacto
          </li>

          <li>
            <Timer size="16" weight="fill" />
            Entrega rápida e rastreada
          </li>

          <li>
            <Coffee size="16" weight="fill" />O café chega fresquinho até você
          </li>
        </ul>
      </section>
      <img src={coffeePackage} alt="" />
    </DescriptionContainer>
  )
}
