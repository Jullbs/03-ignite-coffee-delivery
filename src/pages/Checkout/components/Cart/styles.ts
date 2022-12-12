import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px 44px;

  font-family: 'Roboto', sans-serif;
  color: ${(props) => props.theme['gray-1000']};
  background: ${(props) => props.theme['gray-200']};
`

export const ProductCard = styled.div`
  display: flex;
  padding: 0.5rem 0.25rem 2rem 0.25rem;
  margin-bottom: 1.5rem;

  border-bottom: 1px solid #e6e5e5;

  > img {
    max-height: 4rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-left: 1.25rem;
    margin-right: 3.125rem;
    gap: 0.5rem;

    h2 {
      font-size: 1rem;
      font-weight: 400;
    }
  }

  > p {
    font-weight: 700;
  }
`

export const ShoppingButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    border-radius: 6px;

    background: ${(props) => props.theme['gray-400']};

    > p {
      font-size: 1rem;

      text-align: center;
    }

    > button {
      all: unset;

      display: flex;
      justify-content: center;

      svg {
        color: ${(props) => props.theme['purple-300']};
      }
    }
  }

  > div:first-child {
    padding: 0.34375rem 0.5rem;

    p {
      color: ${(props) => props.theme['gray-1100']};
      padding: 0.0625rem 0.3125rem;
    }

    svg:hover {
      cursor: pointer;
      color: ${(props) => props.theme['purple-500']};
    }
  }

  > div:last-child {
    padding: 0.5625rem 0.5rem;

    transition: background-color 0.5s;

    :hover {
      cursor: pointer;
      background: ${(props) => props.theme['gray-500']};
    }

    > button {
      display: flex;
      gap: 0.25rem;

      > label {
        font-size: 0.75rem;
        color: ${(props) => props.theme['gray-900']};
        cursor: pointer;
      }
    }
  }
`

export const OrderConfirmationTab = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    > span {
      display: flex;
      justify-content: space-between;

      > p:first-child {
        font-size: 0.875rem;
      }
    }

    > span:last-child {
      font-weight: 700;
      font-size: 1.25rem;

      > p {
        font-size: 1.25rem;
      }
    }
  }

  > input {
    padding: 0.75rem 7.34375rem;

    border: none;
    border-radius: 6px;

    line-height: 160%;
    font-weight: 700;

    background: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme.white};

    transition: background-color 0.5s;

    :hover {
      cursor: pointer;
      background: ${(props) => props.theme['yellow-500']};
    }
  }
`
