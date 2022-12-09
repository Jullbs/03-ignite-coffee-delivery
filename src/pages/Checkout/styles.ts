import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  > form {
    display: flex;
    padding: 2.3rem 10rem;
    gap: 2rem;

    > div {
      > p {
        margin-bottom: 0.9375rem;

        font-family: 'Baloo 2', cursive;
        color: ${(props) => props.theme['gray-1000']};
        font-size: 1.125rem;
      }
    }
  }
`
