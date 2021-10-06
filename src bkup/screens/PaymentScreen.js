import React, {useState} from 'react'
import {Form, Button, Col, Container} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import {savePaymentMethod} from '../actions/cartActions'

const PaymentScreen = ({history}) => {
  const cart = useSelector((state) => state.cart)
  const {shippingAddress} = cart

  //   if shipping address is not provided, redirect to shipping address
  if (!shippingAddress) {
    history.push('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('Paypal')

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/placeorder')
  }

  return (
    <FormContainer>
      <Container fluid>
        <CheckoutSteps step1 step2 step3 />
      </Container>

      <h2 className='mb-3'>Payment Method</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend' className='mb-3'>
            Select Method
          </Form.Label>
        </Form.Group>

        <Col>
          <Form.Check
            inline
            type='radio'
            label='Paypal or Debit Card'
            id='Paypal'
            name='paymentMethod'
            value='Paypal'
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></Form.Check>

          {/* <Form.Check
            className='mb-3'
            type='radio'
            label='Cash on Delivery'
            id='CashOnDelivery'
            name='paymentMethod'
            value='cashOnDelivery'
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></Form.Check> */}
        </Col>

        <Button type='submit' variant='primary'>
          continue{' '}
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
