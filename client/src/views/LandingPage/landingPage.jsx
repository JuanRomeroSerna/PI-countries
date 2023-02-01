import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div>
      <h1>Pi Countries Juan Pablo Romero</h1>
      <Link to="/countries">
        <button>Ingresar</button>
      </Link>
    </div>
  );
};

export default LandingPage;
