import React from "react";

const CartItem = ({ item, value }) => {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-1 text-capitalize text-center">
      {/* product image */}
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>

      {/* Product Name */}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span> {title}
      </div>

      {/* Product Price */}
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">product : </span> ${price}
      </div>

      {/* Product Buttons */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
          </div>
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              {count}
            </span>
          </div>
          <div>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      {/* Remove Product */}

      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon">
          <i className="fas fa-trash" onClick={() => removeItem(id)}></i>
        </div>
      </div>

      {/* Product Price */}
      <div className="col-10 mx-auto col-lg-2">
        <strong>total price : $ {total}</strong>
      </div>
    </div>
  );
};

export default CartItem;
