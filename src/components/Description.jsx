import React from 'react';
import '../styles/Description.css';

import { useLocation, useNavigate } from 'react-router-dom';
import {Card, Button, ListGroup} from 'react-bootstrap';

import Header from "./Header";
import ProductCard from "./ProductCard";

/**
 * The Description component return details of passing props data
 */


function Description(props) {
    
    const location = useLocation();
    
    const navigate = useNavigate();

    const post = location.state;

  return (
    <section className='Description_Body'>
        <Header title = {post.author.name}/> 
        <Card className='Details'>
            <Card.Body>
            <h6>Your choice :</h6>
            <ProductCard post = {post}/>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <Card.Header><h6>Title </h6></Card.Header>
              <ListGroup.Item>{post.title}</ListGroup.Item>
              <Card.Header><h6>ID </h6></Card.Header>
              <ListGroup.Item>{post.id}</ListGroup.Item>
              <Card.Header><h6>Categories</h6></Card.Header>
              <ListGroup.Item>
                    <ul>
                        {post.categories.map((e) => (
                        <li key={e.id}>{e.name}</li>
                        ))}
                    </ul> 
              </ListGroup.Item>
              <Card.Header><h6>Summary </h6></Card.Header>
              <ListGroup.Item>{post.summary}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
            <Button variant="outline-dark" onClick={() => navigate(-1)}>Previous Page</Button>
            </Card.Body>
        </Card>
    </section>  
  )
}

export default Description