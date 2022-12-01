// LIBS, HOOKS, ETC
import { NavLink } from 'react-router-dom'

// STYLE
import { HeaderContainer } from './styles'

// ICONS
import logoCoffee from '../../assets/svg/logo-coffee-delivery.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Cart">
        <img src={logoCoffee} alt="" />
      </NavLink>

      <div>
        <span>
          <MapPin size={22} weight="fill" />
          <p>Porto Alegre, RS</p>
        </span>
        <NavLink to="/cart" title="Cart">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
