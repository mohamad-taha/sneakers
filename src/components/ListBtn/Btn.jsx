import React from "react";
import './Btn.css'
const Btn = ({ showSidebar, setShowSidebar }) => {
  return (
    <button className="listBtn" onClick={() => setShowSidebar(!showSidebar)}>
      <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 12v3H0v-3h16Zm0-6v3H0V6h16Zm0-6v3H0V0h16Z"
          fill="black"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
};

export default Btn;
