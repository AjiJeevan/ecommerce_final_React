import React, { useEffect } from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';

function ProductDetails() {

    const api_url = "https://fakestoreapi.com/products/";
    const [product, setProduct] = useState([]);
    let { productId } = useParams();

    useEffect(() =>{
        axios.get(api_url+productId)
        .then(res =>{
            setProduct(res.data)
            console.log(res.data)
        })
        .catch(err =>{
            console.log(" Failed to connect API ")
        })
    },[])

  return (
    <>
    <Container>
      <Row className='m-3' style={{alignContent : 'center', alignItems : 'center'}}>
        <Col md={6} style={{margin :'auto'}}>
        <Card key={product.id}>
            <Card.Img variant="top" src={product.image} style={{height : '300px', objectFit:'contain'}} className='mt-2' />
            <Card.Body style={{justifyContent : 'center'}}>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary">BUY NOW</Button>
            </Card.Body>
        </Card>
        </Col> 
      </Row>
    </Container>
    </>
  )
}

export default ProductDetails