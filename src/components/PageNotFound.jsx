import React from 'react';
import '../styles/PageNotFound.css';
import {useNavigate} from 'react-router-dom';
import {Button, Alert} from 'react-bootstrap';
  
function PageNotFound(){

    const navigate = useNavigate();

    return(
        <div className='Error'>
            <Alert variant="danger" >
                <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                <p>
                    You Probably Typed a Wrong Url
                </p>
                <Button variant="danger" onClick={() => navigate("/")}>Home Page</Button>
            </Alert>
        </div>
    )
}
  
export default PageNotFound;