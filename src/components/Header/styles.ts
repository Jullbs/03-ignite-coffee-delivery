// STYLE
import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6.5rem;

  padding: 2rem 10rem;

  a {
    display: flex;
    align-items: center;
  }

  div {
    display: flex;
    height: 2.375rem;

    gap: 0.75rem;

    span {
      display: flex;
      align-items: center;

      gap: 0.25rem;
      padding: 0.5rem;
      border-radius: 0.375rem;

      font-family: 'Roboto', sans-serif;
      font-size: 0.875rem;

      color: ${(props) => props.theme['purple-300']};
      background: ${(props) => props.theme['purple-100']};
    }

    a {
      padding: 0.5rem;
      border-radius: 0.375rem;

      color: ${(props) => props.theme['yellow-500']};
      background: ${(props) => props.theme['yellow-100']};
    }
  }
`
