import React from "react";
import { NavLink } from "react-router-dom";
const About = () => {
  return (
    <div>
      <div className="container py-1 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1>About Us</h1>
            <p className="lead">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptates dolorem eos, veniam maxime atque repudiandae ad eaque,
              pariatur nemo ipsa harum blanditiis odit enim! Dicta cumque
              laudantium alias, earum inventore voluptatem aliquam quia tenetur
              amet id eveniet impedit aspernatur totam natus asperiores dolorum
              quod sit vel. Quos ratione tempora modi sapiente ad beatae
              mollitia provident quaerat tempore explicabo suscipit rem officia,
              vel id illo, enim porro accusamus necessitatibus quis repellendus
              amet! Dolorem totam sit earum aut fuga, ullam nihil suscipit neque
              ratione, pariatur nesciunt molestiae, inventore libero velit vel
              soluta! Quibusdam explicabo enim soluta dolore non temporibus
              alias sapiente ullam iure quo consequatur sed quaerat nam eaque
              quas, earum deleniti.
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-5">
            <img src="/assets/img4.jpeg" alt="About us" height="500px" width="500px"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
