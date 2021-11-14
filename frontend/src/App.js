import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreens from './screens/HomeScreen'
import ProductScreens from './screens/ProductsScreen'
import CartScreen from './screens/CartScreen'
import loginScreen from './screens/loginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/profileScreen'
import ShippingScreen from './screens/ShippingScreen'
// import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={OrderScreen} exact />
          <Route path='/shipping' component={ShippingScreen} exact />
          {/* <Route path='/payment' component={PaymentScreen} exact /> */}
          <Route path='/placeOrder' component={PlaceOrderScreen} exact />
          <Route path='/login' component={loginScreen} exact />
          <Route path='/register' component={RegisterScreen} exact />
          <Route path='/profile' component={ProfileScreen} exact />
          <Route path='/product/:id' component={ProductScreens} exact />
          <Route path='/cart/:id?' component={CartScreen} exact />
          <Route path='/admin/userList' component={UserListScreen} />
          <Route path='/admin/productList' component={ProductListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/' component={HomeScreens} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
