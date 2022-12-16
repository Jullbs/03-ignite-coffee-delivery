// LIBS, HOOKS, ETC
import { useFormContext } from 'react-hook-form'

// STYLES
import {
  CheckoutFormContainer,
  PaymentDiv,
  AdressDiv,
  CepInput,
  StreetInput,
  NumberInput,
  ComplementInput,
  DistrictInput,
  CityInput,
  StateInput,
} from './styles'

// ICONS, IMAGES
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
} from 'phosphor-react'

// MAIN CODE
export function CheckoutForm() {
  const { register } = useFormContext()

  return (
    <CheckoutFormContainer>
      <AdressDiv>
        <span>
          <MapPinLine size="22" />
          <h1>Endereço de Entrega</h1>
          <p>Informe o endereço onde deseja receber seu pedido.</p>
        </span>
        <div>
          <CepInput
            id="cep"
            type="number"
            placeholder="CEP"
            {...register('cep', { required: true })}
          />
          <StreetInput
            id="street"
            type="string"
            placeholder="Rua"
            {...register('street', { required: true })}
          />
          <div>
            <NumberInput
              id="number"
              type="number"
              placeholder="Número"
              {...register('number', { required: true })}
            />
            <ComplementInput
              id="complement"
              type="string"
              placeholder="Complemento"
              {...register('complement')}
            />
          </div>
          <div>
            <DistrictInput
              id="district"
              type="string"
              placeholder="Bairro"
              {...register('district', { required: true })}
            />
            <CityInput
              id="city"
              type="string"
              placeholder="Cidade"
              {...register('city', { required: true })}
            />
            <StateInput
              id="state"
              type="string"
              placeholder="UF"
              {...register('state', { required: true })}
            />
          </div>
        </div>
      </AdressDiv>

      <PaymentDiv>
        <span>
          <CurrencyDollar size="22" />
          <h1>Pagamento</h1>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar.
          </p>
        </span>
        <div>
          <span>
            <input
              type="radio"
              id="credit-card"
              value="Cartão de Crédito"
              {...register('payment', { required: true })}
            />
            <label htmlFor="credit-card">
              <CreditCard size="16" /> CARTÃO DE CRÉDITO
            </label>
          </span>
          <span>
            <input
              type="radio"
              id="debit-card"
              value="Cartão de Débito"
              {...register('payment', { required: true })}
            />
            <label htmlFor="debit-card">
              <Bank size="16" /> CARTÃO DE DÉBITO
            </label>
          </span>
          <span>
            <input
              type="radio"
              id="cash"
              value="Dinheiro"
              {...register('payment', { required: true })}
            />
            <label htmlFor="cash">
              <Money size="16" /> DINHEIRO
            </label>
          </span>
        </div>
      </PaymentDiv>
    </CheckoutFormContainer>
  )
}
