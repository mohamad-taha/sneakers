import React from "react";
import Links from "./../Links/Links";
import "./Sidebar.css";

const Sidebar = ({ showSidebar }) => {
  return (
    <div
      className="sidebar"
      style={{
        transform: showSidebar ? "translate(0)" : "translate(-100%)",
      }}
    >
      <Links />
    </div>
  );
};

export default Sidebar;
