import styled from 'styled-components'

export const DescriptionContainer = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  margin: 0 10rem;

  font-family: 'Roboto', sans-serif;

  section {
    display: flex;
    flex-direction: column;
    max-width: 40.25rem;

    gap: 4.125rem;
    margin-top: 5.875rem;
    margin-bottom: 6.75rem;
  }

  ul {
    list-style-type: none;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 2.3rem;
    row-gap: 1.25rem;

    margin-right: 4.8125rem;

    li {
      display: flex;
      gap: 0.75rem;

      align-items: center;
      color: ${(props) => props.theme['gray-900']};

      svg {
        height: 2rem;
        width: 2rem;
        padding: 0.5rem;
        border-radius: 1rem;

        color: white;
      }

      :nth-child(1) {
        svg {
          background-color: ${(props) => props.theme['yellow-500']};
        }
      }
      :nth-child(2) {
        svg {
          background-color: ${(props) => props.theme['gray-900']};
        }
      }
      :nth-child(3) {
        svg {
          background-color: ${(props) => props.theme['yellow-300']};
        }
      }
      :nth-child(4) {
        svg {
          background-color: ${(props) => props.theme['purple-300']};
        }
      }
    }
  }

  img {
    margin: 5.75rem 0;
    max-width: 100%;
    height: auto;
  }

  @media screen and (max-width: 50rem) {
    margin: auto;
  }
`

export const IntroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-right: 3.5rem;

  h1 {
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['gray-1100']};
    font-weight: 800;
    font-size: 3rem;
    line-height: 3.875rem;
  }

  p {
    font-size: 1.25rem;
    font-stretch: 100;
    line-height: 1.625rem;
    color: ${(props) => props.theme['gray-1000']};
  }
`
