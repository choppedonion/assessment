import React from 'react';
import '../styles/ProductCard.css';
import {Link} from "react-router-dom";
import { Card } from 'react-bootstrap';

function ProductCard({post, index}) {
  return (

    <Link to={"/description/" + post.id} state={post} key ={index} style={{textDecoration: 'none'}} className="Card" >
        <Card border="info" style={{ width: '18rem' }}>
            <Card.Header>
                <img src={post.author.avatar} className="img-fluid" alt={post.id} />
            </Card.Header>
            <Card.Body>
                <Card.Title style={{ color: 'black' }}>{post.author.name}</Card.Title>
                <Card.Text style={{ color: 'black' }}>
                    {post.title}
                </Card.Text>
            </Card.Body>
        </Card>
        <br />
    </Link>
    
 
  )
}

export default ProductCard