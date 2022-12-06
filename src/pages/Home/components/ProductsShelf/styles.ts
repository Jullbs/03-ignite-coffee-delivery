import styled from 'styled-components'

export const ProductsShelfContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;
  padding: 0 10rem;

  h1 {
    padding-top: 1.75rem;

    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    color: ${(props) => props.theme['gray-1000']};
  }
`

export const ItemContainer = styled.ul`
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 2rem;
  row-gap: 2.5rem;
  gap: 2rem;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    border-radius: 6px 36px;
    background: ${(props) => props.theme['gray-200']};

    > img {
      height: 7.5rem;

      padding: 0 4.25rem 0.75rem 4.25rem;
      margin-top: -1.25rem;
    }

    > span {
      display: flex;
      gap: 0.25rem;

      p {
        padding: 0.25rem 0.5rem;
        border-radius: 2rem;

        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 0.625rem;

        color: ${(props) => props.theme['yellow-500']};
        background: ${(props) => props.theme['yellow-100']};
      }
    }

    > h2 {
      padding-top: 1.125rem;
      padding-bottom: 0.5rem;

      font-family: 'Baloo 2', cursive;
      font-size: 1.25rem;
      color: ${(props) => props.theme['gray-1000']};
    }

    > p {
      padding: 0 1.25rem;

      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;

      color: ${(props) => props.theme['gray-800']};
    }
  }
`
export const ShoppingButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2.0625rem 1.5rem 1.25rem 1.5rem;

  > p {
    margin-right: 1.4375rem;

    color: ${(props) => props.theme['gray-900']};
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
  }

  > div {
    display: flex;
    align-items: center;

    padding: 0.75rem;
    margin-right: 0.5rem;
    border-radius: 0.5rem;

    background: ${(props) => props.theme['gray-400']};

    > p {
      padding: 0 0.5rem;

      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
    }

    button {
      all: unset;
      display: flex;
      justify-content: center;

      font-family: 'Roboto', sans-serif;
      color: ${(props) => props.theme['purple-300']};
    }
  }

  > svg {
    padding: 0.5rem;
    border-radius: 0.5rem;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['purple-500']};
  }
`
