import React, { Component } from "react";
import { ProductContext } from "../../context";
import Title from "../Title";
import CartColumns from "./CartColumns";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import EmptyCart from "./EmptyCart";

export default class Cart extends Component {
  static contextType = ProductContext;

  render() {
    const { cart } = this.context;
    return (
      <section>
        {cart.length > 0 ? (
          <>
            <Title name="your" title="cart" />
            <CartColumns />
            <CartList value={this.context} />
            <CartTotal value={this.context} />
          </>
        ) : (
          <EmptyCart />
        )}
      </section>
    );
  }
}
