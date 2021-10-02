import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import {saveShippingAddress} from '../actions/cartActions'

const ShippingScreen = ({history}) => {
  const cart = useSelector((state) => state.cart)
  const {shippingAddress} = cart

  const [address, setAddress] = useState(shippingAddress.address)
  const [city, setCity] = useState(shippingAddress.city)
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
  const [country, setCountry] = useState(shippingAddress.country)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({address, city, postalCode, country}))
    history.push('/payment')
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h2 className='mb-3'>Shipping</h2>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address' className='mb-3'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city' className='mb-3'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter City'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='country' className='mb-3'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Bangladesh'
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          continue{' '}
        </Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingScreen
