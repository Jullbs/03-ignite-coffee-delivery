import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  margin: 0 auto;

  background-color: ${(props) => props.theme['gray-150']};

  display: flex;
  flex-direction: column;
`
