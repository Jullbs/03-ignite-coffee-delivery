import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  height: calc(100vh);
  margin: 0 auto;

  background-color: ${(props) => props.theme['gray-500']};

  display: flex;
  flex-direction: column;
`
