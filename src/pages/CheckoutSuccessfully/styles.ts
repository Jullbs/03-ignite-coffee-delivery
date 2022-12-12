import styled from 'styled-components'

export const CheckoutSuccessfullyContainer = styled.main`
  display: flex;
  flex-direction: column;

  padding: 5rem 10rem;

  font-family: 'Roboto', sans-serif;

  > div:first-child {
    > h1 {
      font-family: 'Baloo 2', cursive;
      font-weight: 800;
      color: ${(props) => props.theme['yellow-500']};
    }

    > h2 {
      font-weight: 400;
      font-size: 1.25rem;
    }
  }

  > div:last-child {
    display: flex;
    align-items: center;
    padding-top: 1.75rem;
    gap: 6.375rem;
  }
`

export const OrderInfoTab = styled.div`
  height: 16.875rem;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme['yellow-300']},
    ${(props) => props.theme['purple-300']}
  );
  border-radius: 6px 36px;

  > span {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    height: 16.75rem;
    width: 32.75rem;

    padding: 2.5rem;
    margin: 1px;
    border-radius: 6px 35px;

    background-color: ${(props) => props.theme['gray-100']};

    > div {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      line-height: 130%;

      > svg {
        padding: 0.5rem;
        border-radius: 2rem;

        color: ${(props) => props.theme.white};
      }

      :nth-child(1) {
        svg {
          background-color: ${(props) => props.theme['purple-300']};
        }
      }

      :nth-child(2) {
        svg {
          background-color: ${(props) => props.theme['yellow-300']};
        }
      }

      :nth-child(3) {
        svg {
          background-color: ${(props) => props.theme['yellow-500']};
        }
      }
    }
  }
`
