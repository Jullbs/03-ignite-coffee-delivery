import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  > form {
    display: flex;
    margin: 2.3rem 10rem;
    gap: 2rem;

    > div {
      > p {
        margin-bottom: 0.9375rem;

        font-family: 'Baloo 2', cursive;
        color: ${(props) => props.theme['gray-1000']};
        font-size: 1.125rem;
      }
    }

    @media screen and (max-width: 90rem) {
      flex-wrap: wrap;
    }

    @media screen and (max-width: 50rem) {
      margin: 2.3rem auto;
    }
  }
`
