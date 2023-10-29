import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Trending = () => {
  const [products, getProducts] = useState([]);

  useEffect(() => {
    // Fetch data from an API
    fetch('https://fakestoreapi.com/products')
      .then((data) => data.json())
      .then((result) => getProducts(result));
  }, []);

  const cards = products.map((product) => (
    <div className="col-md-3">
      <Card style={{ width: '18rem' }}>
      <div className = "text-center">

        <Card.Img variant="top" style={{width: '100px', height: '130px'}} src={product.image} alt={product.title} />
        <Card.Body >
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Button variant="primary" className="custom-button">Add to Cart</Button>
        </Card.Body>
        </div>
      </Card>
      </div>
 
  ));

  return (
    <div>
      <h2>Hot Deals</h2>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Trending;
