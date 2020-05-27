import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="jumbo-h1">Welcome to Fitness Freak</h1>
        <p className="jumbo-p">
          We take care of all your requirements ranging from personal gym
          training to diet recomendation and{" "}
          <span className="jumbo-span">
            {" "}
            <Link className="jumbo-link" to="/services">
              many more
            </Link>
          </span>
          .
        </p>
      </div>
      <div className="col-md-9 m-auto">
        <h3>Stay updated. Stay safe.</h3>
        <p>We provide the latest updates on the pandemic.</p>
        <div className="flex-box">
          <div className="left">
            <p className="text-center">Country</p>
            <p className="country">India</p>
            <p className="country">Pakisthan</p>
            <p className="country">Afghanstan</p>
            <p className="country">America</p>
            <p className="country">Austrelia</p>
            <p className="country">China</p>
          </div>
          <div className="right1">
            <p className="text-center">Active cases</p>
            <p className="country">145K</p>
            <p className="country">56K</p>
            <p className="country">Afghanstan</p>
            <p className="country">America</p>
            <p className="country">Austrelia</p>
            <p className="country">China</p>
          </div>
          <div className="right2">
            <p className="text-center">Recovered</p>
            <p className="country">60,491</p>
            <p className="country">17,482</p>
            <p className="country">Afghanstan</p>
            <p className="country">America</p>
            <p className="country">Austrelia</p>
            <p className="country">China</p>
          </div>
          <div className="right3">
            <p className="text-center">Death</p>
            <p className="country">4,167</p>
            <p className="country">1,167</p>
            <p className="country">Afghanstan</p>
            <p className="country">America</p>
            <p className="country">Austrelia</p>
            <p className="country">China</p>
          </div>
        </div>
      </div>
      <div className="comments text-center">
        <Link to="/services" className="btn btn-primary">
          Services
        </Link>
        <Link to="/comments" className="btn btn-danger">
          Comments
        </Link>
      </div>
    </div>
  );
};

export default Home;
