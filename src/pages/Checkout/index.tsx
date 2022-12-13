// LIBS, HOOKS, ETC
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

// COMPONENTS
import { Cart } from './components/Cart'
import { CheckoutForm } from './components/CheckoutForm'

// STYLE
import { CheckoutContainer } from './styles'

const paymentMethods = [
  'CARTÃO DE CRÉDITO',
  'CARTÃO DE DÉBITO',
  'DINHEIRO',
] as const

const newCheckoutFormValidationSchema = zod.object({
  cep: zod.string().length(8),
  city: zod.string(),
  complement: zod.string(),
  district: zod.string(),
  number: zod.string().min(1).max(3),
  payment: zod.enum(paymentMethods),
  state: zod.string().length(2),
  street: zod.string(),
})

export type NewCheckoutFormData = zod.infer<
  typeof newCheckoutFormValidationSchema
>

export function Checkout() {
  const newCheckoutForm = useForm<NewCheckoutFormData>({
    resolver: zodResolver(newCheckoutFormValidationSchema),
  })

  const { reset, handleSubmit } = newCheckoutForm

  function handleCreateNewCheckoutForm(data: NewCheckoutFormData) {
    console.log(data)

    reset()
    window.location.replace('http://127.0.0.1:5173/checkoutsuccessfully')
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCreateNewCheckoutForm)} action="">
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
