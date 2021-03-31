import React from "react";
import styles from "../styling/products.css";

export class ProductComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="product-all">
        <div className="product-div">
          <img className="product-image" alt="Product 1" src="https://picsum.photos/400/300"></img>
          <div className="product-text">
            <h4 className="product-title">Product 1</h4>
            <p className="product-desc">BLABLABLA</p>
          </div>
        </div>
        <div className="product-div">
          <img className="product-image" alt="Product 2" src="https://picsum.photos/400/300"></img>
          <div className="product-text">
            <h4 className="product-title">Product 1</h4>
            <p className="product-desc">BLABLABLA</p>
          </div>
        </div>
      </div>
    );
  }
}