import React, { useState } from "react";
import "./Navbar.css";
import Links from "../Links/Links";

const Navbar = ({ addToCart, count, setAddToCart, listBtn }) => {
  const [showCart, setShowCart] = useState(false);
  const total = addToCart.price * count;
  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <nav>
      <div>
        <span>sneakers</span>
        <Links />
      </div>
      <div>
        <button onClick={handleShowCart}>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#000000"
            />
          </svg>
        </button>
        <img src="./assets/images/image-avatar.png" alt="avatar" />
        {listBtn}
      </div>
      <div
        className="cart"
        style={
          showCart
            ? { transform: "scale(1)" }
            : { transform: "scale(0)", pointerEvents: "none" }
        }
      >
        <p>Cart</p>
        {addToCart.length != 0 ? (
          <div>
            <img src={addToCart.img} alt="product-img" />
            <div>
              <p>{addToCart.name}</p>
              <p>
                {addToCart.price.toFixed(2)} x {count}={total.toFixed(2)}
              </p>
            </div>
            <button onClick={() => setAddToCart([])}>
              <img src="/assets/images/icon-delete.svg" alt="delete icon" />
            </button>
          </div>
        ) : (
          ""
        )}

        <button
          style={
            addToCart.length != 0 ? { display: "block" } : { display: "none" }
          }
        >
          Checkout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
