import React from 'react'
import {Link} from "react-router-dom";

function ProductCard({post, index}) {
  return (
        <div key ={index} className="card text-white bg-info mb-3" 
            style={{
                margin: '5px',
                padding: '5%'
            }}
        >
            <div className="card-header">
                <img src={post.author.avatar} className="img-fluid" alt={post.title} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{post.author.name}</h5>
                <p className="card-text">
                    {post.publishDate}
                </p>
                <Link to={"/description/" + post.id} className="btn btn-primary" state={post} >Details</Link>
            </div>
        </div>
        
  )
}

export default ProductCard