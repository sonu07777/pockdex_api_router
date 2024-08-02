import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./pockimondetails.css"

function pockimondetails() {
  const { id } = useParams(); // Correctly destructuring the 'id' from params
  const [data, setData] = useState({});
  // console.log(id);
  async function downloadPockimon() {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    console.log(response.data);
    const result = {
      name: response.data.name,
      height: response.data.height,
      image: response.data.sprites.other.dream_world.front_default,
      type:response.data.types.map((t)=>{return t.type.name})
    };
    setData(result);
    console.log(result);
  }
  useEffect(() => {
    downloadPockimon();
  }, []);
  return (
    <div className="wrapper-pocki-details">
      {/* <br /> */}
      {/* <hr /> */}
      <img src={data.image} alt="image is not loading due to your network" />
      <div className="name">{data.name}</div>
      <div className="Height"><span>Height:-</span>{data.height}</div>
      <div className="type">{data.type ? data.type.map((p)=><div>{p}</div>) :"no type is present"}</div>
    </div>
  );
}

export default pockimondetails;
