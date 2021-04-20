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
          <img className="product-image" alt="Skateboard met RPM meter" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.insportline.cz%2Fp61312%2FLongboard-Street-Surfing-Freeride-Dragon-39.jpg&f=1&nofb=1"></img>
          <div className="product-text">
            <h4 className="product-title">Skateboard + RPM meter</h4>
            <p className="product-desc">80 euro</p>
          </div>
        </div>
      </div>
    );
  }
}