import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ProductWrapper } from "./StyledElements";
export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 col-md-6 col-lg-3 mx-auto my-3">
        <div className="card">
          <div
            className="img-container p-5"
            onClick={() => {
              this.props.handleDetails(id);
            }}
          >
            <Link to="/details">
              <img src={img} alt="product pic" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart}
              onClick={() => {
                this.props.addToCart(id);
                this.props.openModal(id);
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  in cart
                </p>
              ) : (
                <i className="fas fa-cart-plus" />
              )}
            </button>
          </div>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    incart: PropTypes.bool
  }).isRequired
};
