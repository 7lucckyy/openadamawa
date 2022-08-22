import React from 'react'
import {Container, Col, Row, Form, Button} from 'react-bootstrap'

const FormContainer = () => {
  return (
    <>
    <Container>
      <Row>
        <Col className='border border-1'>
        <Form>
          <header className='mx-auto py-3 mt-3'>Find Projects</header>
      <Form.Group className="mb-3" controlId="formBasicMDA">
        <Form.Label>MDA</Form.Label>
        <Form.Control type="email" placeholder="Enter MDA" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicState">
        <Form.Label>LGA</Form.Label>
        <Form.Control type="email" placeholder="Enter State" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Contractor</Form.Label>
        <Form.Control type="email" placeholder="Enter Contractor" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Year</Form.Label>
        <Form.Control type="email" placeholder="Enter Year" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMonitored">
        <Form.Label>Is Monitored</Form.Label>
        <Form.Select>
          <option>Yes</option>
          <option>No</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="submit" className='mb-3 text-center'>
        Find
      </Button>
    </Form>
        </Col>
      </Row>
    </Container>
      
    </>
  )
}

export default FormContainer