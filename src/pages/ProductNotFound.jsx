import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/Card';

function ProductNotFound() {
  return (
    <>
        <Container>
            <Row className='m-3'>
            <Col md={6} style={{margin :'auto'}}>  
                <Card>
                    <Card.Img variant="top" src="https://media.istockphoto.com/id/1038232966/vector/upset-magnifying-glass-vector-illustration.jpg?s=612x612&w=0&k=20&c=cHpDD-xX8wlruAOi-RsTNpaZKtBYtAjP32GpoRGKEmM=" style={{height : '300px', objectFit:'contain'}} className='mt-2' />
                    <Card.Body>
                        <Card.Title>{"Result Not Found"}</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default ProductNotFound