import React, { Component } from "react";
import { storeProducts, detailProduct } from "./data";

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
  // this is initial state for context
  state = {
    products: [],
    cart: [],
    details: detailProduct,
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    let tempProducts = [];
    storeProducts.forEach(product => {
      const singleProduct = { ...product };
      tempProducts = [...tempProducts, singleProduct];
    });
    this.setState({ products: tempProducts });
  };

  handleDetails = id => {
    const item = this.getItem(id);
    this.setState({ details: item });
  };

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };

  addToCart = id => {
    let temp = [...this.state.products];
    const index = temp.indexOf(this.getItem(id));
    const product = temp[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState({ cart: [...this.state.cart, product] }, () =>
      this.addToTotal()
    );
  };

  openModal = id => {
    const product = this.getItem(id);
    this.setState({ modalProduct: product, modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  increment = id => {
    const tempCart = [...this.state.cart];
    const index = tempCart.indexOf(this.getItem(id));
    let selectedItem = tempCart[index];
    selectedItem.count = selectedItem.count + 1;
    selectedItem.total = selectedItem.count * selectedItem.price;
    this.setState({ cart: tempCart }, () => {
      this.addToTotal();
    });
  };

  decrement = id => {
    const tempCart = [...this.state.cart];
    const index = tempCart.indexOf(this.getItem(id));
    let selectedItem = tempCart[index];
    selectedItem.count = selectedItem.count - 1;
    if (selectedItem.count === 0) {
      this.removeItem(id);
    } else {
      selectedItem.total = selectedItem.count * selectedItem.price;
      this.setState({ cart: tempCart }, () => {
        this.addToTotal();
      });
    }
  };

  removeItem = id => {
    const tempProducts = this.state.products;
    const tempCart = this.state.cart;
    const newCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getItem(id));
    let removedItem = tempProducts[index];
    removedItem.inCart = false;
    removedItem.count = 0;
    removedItem.total = 0;
    this.setState({ cart: newCart, products: tempProducts }, () => {
      this.addToTotal();
    });
  };

  clearCart = () => {
    this.setState({ cart: [] }, () => {
      this.getProducts();
      this.addToTotal();
    });
  };

  addToTotal = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tax = Math.ceil(subTotal * 0.1);
    const total = subTotal + tax;
    this.setState({ cartSubTotal: subTotal, cartTax: tax, cartTotal: total });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
