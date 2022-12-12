import { FormProvider, useForm } from 'react-hook-form'

import { Cart } from './components/Cart'
import { CheckoutForm } from './components/CheckoutForm'

import { CheckoutContainer } from './styles'

export function Checkout() {
  const newCheckoutForm = useForm()

  return (
    <CheckoutContainer>
      <form action="">
        <FormProvider {...newCheckoutForm}>
          <div>
            <p>Complete seu pedido</p>
            <CheckoutForm />
          </div>
          <div>
            <p>Cafés selecionados</p>
            <Cart />
          </div>
        </FormProvider>
      </form>
    </CheckoutContainer>
  )
}
