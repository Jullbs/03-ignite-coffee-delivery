import styled from 'styled-components'

export const ProductsShelfContainer = styled.div`
  padding: 0 10rem;

  h1 {
    padding-top: 2rem;

    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    color: ${(props) => props.theme['gray-1000']};
  }
`
