// LIBS, HOOKS, ETC
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import validator from 'validator'

// COMPONENTS
import { Cart } from './components/Cart'
import { CheckoutForm } from './components/CheckoutForm'
import { CartContext } from '../../contexts/CartContext'

// STYLE
import { CheckoutContainer } from './styles'

const paymentMethods = [
  'Cartão de Crédito',
  'Cartão de Débito',
  'Dinheiro',
] as const

const newCheckoutFormValidationSchema = zod.object({
  cep: zod.string().length(8),
  city: zod
    .string()
    .refine((value) => validator.isAlpha(value, 'pt-BR', { ignore: ' ' })),
  complement: zod
    .string()
    .refine((value) => validator.isAlpha(value, 'pt-BR', { ignore: ' ' }))
    .optional(),
  district: zod
    .string()
    .refine((value) => validator.isAlpha(value, 'pt-BR', { ignore: ' ' })),
  number: zod.string().min(1).max(3),
  payment: zod.enum(paymentMethods),
  state: zod
    .string()
    .length(2)
    .refine((value) => validator.isAlpha(value, 'pt-BR')),
  street: zod
    .string()
    .refine((value) => validator.isAlpha(value, 'pt-BR', { ignore: ' ' })),
})

export type NewCheckoutFormData = zod.infer<
  typeof newCheckoutFormValidationSchema
>

export function Checkout() {
  const newCheckoutForm = useForm<NewCheckoutFormData>({
    resolver: zodResolver(newCheckoutFormValidationSchema),
  })

  const { reset, handleSubmit, formState } = newCheckoutForm
  const { updateCheckoutData, resetCartProducts } = useContext(CartContext)

  const navigate = useNavigate()

  function handleCreateNewCheckoutForm(data: NewCheckoutFormData) {
    updateCheckoutData(data)
    resetCartProducts()

    reset()
    navigate('/checkoutsuccessfully')
  }
  console.log(formState.errors)
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
