import React, { useEffect } from "react";
import Products from "./Products";
const Home = () => {
  
  return (
    <div className="hero">
      <div
        className="card bg-dark text-black border-0 my-0 py-0 "
        style={{ "pointer-events": "none" }}
      >
        <img
          src="assets/m11.jpg"
          className="card-img"
          alt="Background-Image"
          height="700vh"
        />
        <div className="card-img-overlay d-flex justify-content-center">
          <div className="container ">
            <h5 className="card-title display-3 fw-4 mb-2">
              A one stop shop for all your fashion and lifestyle needs.
            </h5>
            {/* <p class="card-text lead fs-2"> */}
            {/* The year-long celebration began with the launch of a new brand campaign, highlighting the range of ethnic and festive wear with electronic gadgets and lot more with the convenience of shopping on Myntra            </p> */}
          </div>
        </div>
      </div>
      <Products></Products>
    </div>
  );
};

export default Home;
