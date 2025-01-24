import { useEffect, useState } from "react";
import "./Products.css";

const Products = ({ product, setAddToCart, count, setCount }) => {
  const [img, setImg] = useState("");
  const [overlay, setOverlay] = useState(false);
  const [imgId, setImgId] = useState(0);

  const productGallery = [
    {
      id: 0,
      img: "./assets/images/image-product-1.jpg",
    },
    {
      id: 1,
      img: "./assets/images/image-product-2.jpg",
    },
    {
      id: 2,
      img: "./assets/images/image-product-3.jpg",
    },
    {
      id: 3,
      img: "./assets/images/image-product-4.jpg",
    },
  ];

  useEffect(() => {
    localStorage.setItem("imgId", imgId);
  }, [imgId]);

  const nextImg = () => {
    setImgId((prev) => (prev + 1) % productGallery.length);
    setImg(productGallery[(imgId + 1) % productGallery.length].img);
  };

  const prevImg = () => {
    setImgId(
      (prev) => (prev - 1 + productGallery.length) % productGallery.length
    );
    setImg(
      productGallery[
        (imgId - 1 + productGallery.length) % productGallery.length
      ].img
    );
  };

  const showImg = (id) => {
    setImgId(id);
    console.log(imgId);
    const img = productGallery.find((item) => item.id === id).img;
    setImg(img);
    setOverlay(true);
  };

  const handleCount = (add) => {
    add
      ? setCount((prevCount) => prevCount + 1)
      : setCount((prevCount) => prevCount - 1);

    if (count == 1 && add == false) {
      setCount(1);
    }
  };
  const addToCart = () => {
    setAddToCart(product);
  };

  return (
    <div className="productsContainer">
      <div className="productsImgs">
        <div className="productImg">
          <img src="./assets/images/image-product-1.jpg" alt="product image" />
        </div>
        <div className="productsGallery">
          {productGallery.map((file) => (
            <img
              onClick={() => showImg(file.id)}
              key={file.id}
              src={file.img}
              alt="product-img"
            />
          ))}
        </div>
      </div>
      <div className="productDetails">
        <small>sneaker company</small>
        <h1>{product.name}</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="price">
          $<span>{product.price.toFixed(2)}</span>
          <span>50%</span>
        </div>
        <del>$250.00</del>
        <div className="productActions">
          <div>
            <button onClick={() => handleCount(false)}>-</button>
            <span style={{ width: "20px", textAlign: "center" }}>{count}</span>
            <button onClick={() => handleCount(true)}>+</button>
          </div>
          <button onClick={addToCart}>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#000000"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>
      <div
        style={overlay ? { display: "flex" } : { display: "none" }}
        className="overlay"
      >
        <div>
          <button onClick={prevImg} aria-label="prev-img">
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <img onClick={() => setOverlay(false)} src={img} alt="product-img" />
          <button onClick={nextImg} aria-label="next-img">
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                strokeWidth="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
