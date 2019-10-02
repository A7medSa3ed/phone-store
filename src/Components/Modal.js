import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { ButtonContainer, ModalContainer } from "../Components/StyledElements";
import { Link } from "react-router-dom";
export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { title, img, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="col-8 mx-auto p-5 col-md-6 col-lg-4 text-center text-capitalize"
                    >
                      <h5>item added to cart</h5>
                      <img src={img} className="img-fluid" alt="product" />
                      <h5>{title}</h5>
                      <h5 className="text-muted">price : $ {price}</h5>
                      <Link to="/">
                        <ButtonContainer onClick={() => closeModal()}>
                          go to store
                        </ButtonContainer>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer
                          cartButton
                          onClick={() => closeModal()}
                        >
                          go to cart
                        </ButtonContainer>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
