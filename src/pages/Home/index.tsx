// COMPONENTS
import { DescriptionDisplay } from './components/DescriptionDisplay'
import { ProductsShelf } from './components/ProductsShelf'

// STYLE
import { HomeContainer } from './styles'

// ICONS, IMAGES
import backgroundVector from '../../assets/svg/background-vectors.svg'

export function Home() {
  return (
    <HomeContainer>
      <img src={backgroundVector} alt="" />

      <DescriptionDisplay />

      <ProductsShelf />
    </HomeContainer>
  )
}
