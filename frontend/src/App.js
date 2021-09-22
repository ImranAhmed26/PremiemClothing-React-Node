import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreens from './screens/HomeScreen'
import ProductScreens from './screens/ProductsScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomeScreens} exact />
          <Route path='/product/:id' component={ProductScreens} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
