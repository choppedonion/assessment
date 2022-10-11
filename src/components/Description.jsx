import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Header from "./Header";
import ProductCard from "./ProductCard";


function Description(props) {
    
    const location = useLocation();

    const post = location.state;

  return (
    <>
        <Header title = {post.author.name}/> 
        <Card style={{ width: '18rem' }}>
            <Card.Body>
            <ProductCard post = {post}/>
              <Card.Title>ID : {post.id}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item><h6>Title :</h6> {post.title}</ListGroup.Item>
              <ListGroup.Item><h6>Categories :</h6>
                    <ul>
                        {post.categories.map((e) => (
                        <li key={e.id}>{e.name}</li>
                        ))}
                    </ul> 
                </ListGroup.Item>
              <ListGroup.Item><h6>Summary :</h6> {post.summary}</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    </>  
  )
}

export default Description