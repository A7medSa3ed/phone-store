import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./StyledElements";
import { ProductConsumer } from "../context";
export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.details;
          return (
            <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* End title */}
              {/* Product img */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} alt="Product Pic" className="img-fluid" />
                </div>
                {/* End Product img */}
                {/* Product Info */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>moel: {title}</h2>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : {company}
                  </h4>
                  <h4 className="text-blue">
                    <strong style={{ fontSize: "30px" }}>
                      price : <span>$</span> {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3 mb-2">
                    <span style={{ fontSize: "25px" }}>product info :</span>
                  </p>
                  <p className="text-muted lead">{info}</p>
                  {/* Buttons */}
                  <div>
                    <Link to="/">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      disabled={inCart}
                      cartButton
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "In Cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                  {/* End Buttons */}
                </div>
                {/* End Product Info */}
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
