import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const FormContainer = ({children}) => {
  return (
    <Container fluid>
      <Row className='justify-content-center'>
        <Col xs={10} md={6}>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default FormContainer
