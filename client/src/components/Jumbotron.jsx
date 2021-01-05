import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import '../CSS/Header.css';

const Jumb = () => {
    return (
        <Jumbotron className="text-center jumbotron">
            <h1>Google Books!</h1>
            <p>Find your favorite book.</p>
        </Jumbotron>        
    )
}

export default Jumb;