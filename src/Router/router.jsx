import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Pockedex from "../Component/Pockedex/Pockdex.jsx";
import Pockimondetails from "../Component/pockimondetails/pockimondetails.jsx";

function router() {
  const [test, setTest] = useState(true);
  return (
    <Routes>
      <Route path="/" element={<Pockedex/>} />
      <Route path="/home/:id" element={<Pockimondetails/>} />
    </Routes>
  );
}

export default router;
