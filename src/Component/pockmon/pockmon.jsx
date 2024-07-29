import React from "react";
import "./pockmon.css";

function pockmon({ name, image }) {
  return (
    <div className="wrapper">
      <div>{name}</div>
      <div>
        <img className="pockmon-img" src={image} alt="" />
      </div>
    </div>
  );
}

export default pockmon;
