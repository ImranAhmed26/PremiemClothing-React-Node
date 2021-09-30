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

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' component={loginScreen} exact />
          <Route path='/register' component={RegisterScreen} exact />
          <Route path='/product/:id' component={ProductScreens} exact />
          <Route path='/cart/:id?' component={CartScreen} exact />
          <Route path='/' component={HomeScreens} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
