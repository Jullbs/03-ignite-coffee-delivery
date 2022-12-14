// STYLE
import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 1000;

  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;

  padding: 2rem 10rem;

  background-color: ${(props) => props.theme['gray-150']};

  > a {
    display: flex;
    align-items: center;
  }

  > div {
    display: flex;
    height: 2.375rem;

    gap: 0.75rem;

    > span {
      display: flex;
      align-items: center;

      gap: 0.25rem;
      padding: 0.5rem;
      border-radius: 0.375rem;

      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;

      color: ${(props) => props.theme['purple-300']};
      background: ${(props) => props.theme['purple-100']};

      > p {
        color: ${(props) => props.theme['purple-500']};
      }
    }

    > a {
      padding: 0.5rem;
      border-radius: 0.375rem;

      color: ${(props) => props.theme['yellow-500']};
      background: ${(props) => props.theme['yellow-100']};

      > p {
        position: absolute;
        text-align: center;
        margin-left: 1.2rem;
        margin-top: -0.9rem;

        line-height: 1.25rem;
        width: 1.25rem;
        border-radius: 1rem;

        font-family: 'Roboto', sans-serif;
        font-size: 0.75rem;
        font-weight: 700;

        color: ${(props) => props.theme.white};
        background: ${(props) => props.theme['yellow-500']};
      }
    }
  }

  @media screen and (max-width: 50rem) {
    width: 100vw;
    flex-wrap: wrap;
    padding: 1rem;
  }
`
