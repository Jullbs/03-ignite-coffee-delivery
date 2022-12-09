import { FormProvider, useForm } from 'react-hook-form'

import { Cart } from './components/Cart'
import { CheckoutForm } from './components/CheckoutForm'

import { CheckoutContainer } from './styles'

export function Checkout() {
  const newCheckoutForm = useForm()
  const { handleSubmit } = newCheckoutForm

  const onSubmit = (data) => console.log(data)

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div>
          <p>Complete seu pedido</p>
          <FormProvider {...newCheckoutForm}>
            <CheckoutForm />
          </FormProvider>
        </div>
        <div>
          <p>Cafés selecionados</p>
          <Cart />
        </div>
      </form>
    </CheckoutContainer>
  )
}
