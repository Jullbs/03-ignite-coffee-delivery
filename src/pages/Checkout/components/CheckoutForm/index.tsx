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
          <CepInput id="cep" placeholder="CEP" {...register('cep')} />
          <StreetInput id="street" placeholder="Rua" {...register('street')} />
          <div>
            <NumberInput
              id="number"
              placeholder="Número"
              {...register('number')}
            />
            <ComplementInput
              id="complement"
              placeholder="Complemento"
              {...register('complement')}
            />
          </div>
          <div>
            <DistrictInput
              id="district"
              placeholder="Bairro"
              {...register('district')}
            />
            <CityInput id="city" placeholder="Cidade" {...register('city')} />
            <StateInput id="state" placeholder="UF" {...register('state')} />
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
              value="CARTÃO DE CRÉDITO"
              {...register('payment-method')}
            />
            <label htmlFor="credit-card">
              <CreditCard size="16" /> CARTÃO DE CRÉDITO
            </label>
          </span>
          <span>
            <input
              type="radio"
              id="debit-card"
              value="CARTÃO DE DÉBITO"
              {...register('payment-method')}
            />
            <label htmlFor="debit-card">
              <Bank size="16" /> CARTÃO DE DÉBITO
            </label>
          </span>
          <span>
            <input
              type="radio"
              id="cash"
              value="DINHEIRO"
              {...register('payment-method')}
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
