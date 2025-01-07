import { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Product from '../components/product';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect } from "react";
import axios from 'axios'

function ProductsListing() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(api_url)
    .then(res =>{
      setProducts(res.data)
    })
    .catch(err =>{
      console.log(" Failed to connect API ")
    })
  }, []);


  return (
    <>
    <Container>
      <Row className='m-3'>
        {products.map((eachProduct, index)=>{
          return(
            <Col key={eachProduct.id} xs={12} sm={12} md={6} lg={4} xl={3} xxl={3}>
              <Product productInfo={eachProduct} />
            </Col>
          )
        })}
      </Row>
    </Container>
    </>
  )
}

export default ProductsListing
