import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Sidebar from "./components/Sidebar/Sidebar";
import ListBtn from "./components/ListBtn/Btn";

import "./App.css";
const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [count, setCount] = useState(1);
  const [addToCart, setAddToCart] = useState([]);
  const product = {
    price: 125,
    img: "./assets/images/image-product-1.jpg",
    name: "Fall Limited Edition Sneakers",
  };
  return (
    <>
      <Navbar
        addToCart={addToCart}
        count={count}
        setAddToCart={setAddToCart}
        listBtn={
          <ListBtn showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        }
      />
      <Products
        product={product}
        setAddToCart={setAddToCart}
        count={count}
        setCount={setCount}
      />
      <Sidebar showSidebar={showSidebar} />
    </>
  );
};

export default App;
