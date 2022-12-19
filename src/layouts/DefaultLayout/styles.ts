import styled from 'styled-components'

export const LayoutContainer = styled.div`
  min-height: 100vh;
  max-width: 90rem;
  margin: 0 auto;

  background-color: ${(props) => props.theme['gray-150']};

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 90rem) {
    margin: 0;
    width: 100vw;
  }
`
