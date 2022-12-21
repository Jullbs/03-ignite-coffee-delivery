// LIBS, HOOKS, ETC
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'

// COMPONENTS
import { CartContext } from '../../contexts/CartContext'

// STYLE
import { HeaderContainer } from './styles'

// ICONS, IMAGES
import logoCoffee from '../../assets/svg/logo-coffee-delivery.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {

  const { cart } = useContext(CartContext)

  const amountOfProductsInCart = cart.length

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffee} alt="" />
      </NavLink>

      <div>
        <span>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </span>
        <NavLink to="/checkout" title="Checkout">
          {amountOfProductsInCart !== 0 ? (
            <p>{amountOfProductsInCart}</p>
          ) : null}
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
