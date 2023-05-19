import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Cards from "../component/chars";
import CardFetch from "../component/CardFetch";

export const Home = () => (
  <>
  <div>
    <h2>Characters</h2>
  </div>
    <div className="chars">
      <Cards /> <Cards /> <Cards /> <Cards />
      <Cards />
    </div>
    <div>
    <h2>Planets</h2>
  </div>
    <div className="planets">
      <Cards /> <Cards /> <Cards /> <Cards />
      <Cards />
    </div>
    <div>
    <h2>Vehicles</h2>
  </div>
    <div className="vehicles">
      <Cards /> <Cards /> <Cards /> <Cards />
      <Cards />
    </div>
  </>
);
