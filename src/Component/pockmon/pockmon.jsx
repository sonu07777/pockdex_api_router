import React from "react";
import "./pockmon.css";
import { Link } from "react-router-dom";

function pockmon({ name, image ,id}) {
  return (
    <div className="wrapper">
      <Link to={`/home/${id}`}>
      {/* <p>{id}</p> */}
      <div>{name}</div>
      </Link>
      <div>
        <img className="pockmon-img" src={image} alt="" />
      </div>
    </div>
  );
}

export default pockmon;
