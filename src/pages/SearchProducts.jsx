import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ProductNotFound from './ProductNotFound';
import Product from '../components/Product';
import { useNavigate } from 'react-router-dom';

function SearchProducts() {
    const api_url = "https://fakestoreapi.com/products";
    const [products, setProducts] = useState([]);
    const [isFound, setFound]  = useState(true)
    const navigate = useNavigate()

    let { searchName } = useParams();

    useEffect(() => {
        axios.get(api_url)
        .then(res =>{
        //   setProducts(res.data)
          console.log(searchName)
          setProducts([])
          let filteredProducts = res.data.filter((item) =>
            item.title.toLowerCase().includes(searchName.toLowerCase())
            );
            
            setProducts(filteredProducts);
            if(filteredProducts.length == 0 || searchName == ""){
                console.log("Array is Empty")
                setFound(false)
                navigate("./ProductNotFound")
            }
            else{
                console.log(filteredProducts)
                setFound(true)
            }
        })
        .catch(err =>{
          console.log(" Failed to connect API ")
          setFound(false)
        })
      }, [searchName]);

      if(isFound){
        return (
            <>
            <Container>
              <Row className='m-3' style={{alignContent : 'center', alignItems : 'center'}}>
                {products.map((eachProduct, index)=>{
                    return(
                        <Col key={eachProduct.id} xs={12} sm={12} md={6} lg={4} xl={3} xxl={3}>
                        <Product productInfo={eachProduct} />
                        </Col>
                    )})
                }
              </Row>
            </Container>
            </>
          )
      }
      else{
        return(
            <>
            <ProductNotFound />
            </>
        )
      }
}

export default SearchProducts