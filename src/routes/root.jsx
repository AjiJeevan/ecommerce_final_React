import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Link, Outlet } from 'react-router-dom';

function root() {

    const [searchProduct, setSearchProduct] = useState("")

    const handleChange = (event) => {
        setSearchProduct(event.target.value);
        // console.log(searchProduct)
      }

    const searchHandler = (event)=>{
        event.preventDefault();
    // handle search logic here
    console.log(`Searching ...`);
        setSearchProduct("")
    }

  return (
    <>
    <header>
        {/* Navbar */}
        <Container>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                <Navbar.Brand href="/">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwabkCdjHnCs93SpKzfMiLNvFsDM7yimJHTB7grFuIqm8V-gRnTknTeVV-HahQscPhL2A&usqp=CAU" style={{width : "100px", height:"50px", objectFit:"contain" }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                    <Form className="d-flex" onClick={searchHandler}>
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        value={searchProduct}
                        onChange={handleChange}
                    />
                    <Link to={`/productname/${searchProduct}`} >
                        <Button type='submit' variant="outline-success" >Search</Button>
                    </Link>
                    </Form>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>

        {/* Carousel */}
        <Container>
        <Carousel>
            <Carousel.Item>
            <div>
                <img src="https://img.freepik.com/free-vector/horizontal-banner-template-black-friday-sales_23-2150867247.jpg?t=st=1723466964~exp=1723470564~hmac=8d144a44471d4efd8b4badce95f1dfac3f51d7f1a25cb0ce90d555bca4557e5c&w=1380" style={{height : "500px", width : "100%"}}   alt="..." />
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div>
            <img src="https://img.freepik.com/free-vector/flat-horizontal-banner-template-black-friday-sale_23-2150852978.jpg?t=st=1723467125~exp=1723470725~hmac=c8b29c63629e190a2cb50ca5cec648f4875a4b58cf48aad8793ba038c8ead68d&w=1380" style={{height : "500px", width : "100%"}} alt="..." />
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div>
            <img src="https://imgs.search.brave.com/feMvdXTiaiY8iVcOQv144_O2_N05TqjNv5H4wnvF-Nk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFFN0tv/N3ZlcG8vMS8wLzE2/MDB3L2NhbnZhLXNo/b3AtbmV3LXByb2R1/Y3RzLXdlYnNpdGUt/YmFubmVyLWJyb3du/LC13aGl0ZSwtdGFu/LUxrWnNOQ1czWDF3/LmpwZw" style={{height : "500px", width : "100%"}}  alt="..." />
            </div>
            </Carousel.Item>
        </Carousel>
        </Container>
    </header>
    <Outlet />
    <footer></footer>
    </>
  )
}

export default root