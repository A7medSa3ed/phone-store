import React, { Component } from "react";
import Title from "./Title";
import Product from "./Product";
import { ProductContext } from "../context";
export default class ProductList extends Component {
  static contextType = ProductContext;

  render() {
    let { products, handleDetails, addToCart, openModal } = this.context;

    const product = products.map(product => (
      <Product
        key={product.id}
        product={product}
        handleDetails={handleDetails}
        addToCart={addToCart}
        openModal={openModal}
      />
    ));

    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">{product}</div>
          </div>
        </div>
      </>
    );
  }
}
