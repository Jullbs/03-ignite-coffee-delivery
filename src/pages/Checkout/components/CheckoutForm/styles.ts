import styled from 'styled-components'

export const CheckoutFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 40rem;

  > form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`
const BaseDiv = styled.div`
  background: ${(props) => props.theme['gray-200']};
  padding: 2.5rem;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  > span {
    display: flex;
    flex-direction: column;

    gap: 0.3rem;
  }

  h1 {
    margin-left: 1.875rem;

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;

    color: ${(props) => props.theme['gray-1000']};
  }
  p {
    margin-left: 1.875rem;

    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;

    color: ${(props) => props.theme['gray-900']};
  }
`

export const AdressDiv = styled(BaseDiv)`
  > span {
    > svg {
      position: absolute;
      margin-top: -2px;
      color: ${(props) => props.theme['yellow-500']};
    }
  }

  > div {
    display: flex;
    flex-direction: column;

    gap: 1rem;

    > div {
      display: flex;
      gap: 0.75rem;
    }
  }
`

const BaseInput = styled.input`
  padding: 0.75rem;
  border-radius: 4px;

  background-color: ${(props) => props.theme['gray-300']};
  border: 1px solid ${(props) => props.theme['gray-400']};

  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;

  :focus {
    outline: 1px solid ${(props) => props.theme['yellow-500']};
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
`

export const CepInput = styled(BaseInput)`
  width: 12.5rem;
`

export const StreetInput = styled(BaseInput)`
  width: 35rem;
`

export const NumberInput = styled(BaseInput)`
  width: 12.5rem;
`

export const ComplementInput = styled(BaseInput)`
  width: 21.75rem;
`

export const DistrictInput = styled(BaseInput)`
  width: 12.5rem;
`

export const CityInput = styled(BaseInput)`
  width: 17.25rem;
`

export const StateInput = styled(BaseInput)`
  width: 3.75rem;
`

export const PaymentDiv = styled(BaseDiv)`
  > span {
    > svg {
      position: absolute;
      color: ${(props) => props.theme['purple-300']};
    }
  }

  > div {
    display: flex;
    gap: 0.75rem;

    > span {
      > input {
        opacity: 0;
        position: fixed;
        width: 0;

        :checked + label {
          background-color: ${(props) => props.theme['purple-100']};
          border: 1px solid ${(props) => props.theme['purple-300']};
        }
      }

      > label {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 11.166875rem;
        padding: 1rem;
        border-radius: 6px;

        background-color: ${(props) => props.theme['gray-400']};
        border: 1px solid ${(props) => props.theme['gray-400']};
        transition: background-color 0.5s;

        font-family: 'Roboto', sans-serif;
        font-size: 0.75rem;
        color: ${(props) => props.theme['gray-900']};

        :hover {
          cursor: pointer;
          background-color: ${(props) => props.theme['gray-500']};
        }

        > svg {
          color: ${(props) => props.theme['purple-300']};

          margin-right: 0.75rem;
        }

        :hover {
          cursor: pointer;
        }
      }
    }
  }
`
