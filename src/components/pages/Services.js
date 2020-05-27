import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="container">
      <h1 className="srv-head">Services</h1>
      <div className="box">
        <div className="imgbox">
          <img src="home-banner.jpg" alt="" />
        </div>
        <div className="info-sec">
          <h3>Home workout assistance.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            numquam nisi corporis laboriosam animi vel natus, corrupti commodi,
            architecto facilis similique mollitia quod quibusdam maxime.
            Incidunt nemo voluptas harum voluptatum?
          </p>
          <Link to="#!" className="btn btn-info">
            Know More
          </Link>
        </div>
      </div>
      <div className="box">
        <div className="info-sec">
          <h3>Zumba exercises.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            numquam nisi corporis laboriosam animi vel natus, corrupti commodi,
            architecto facilis similique mollitia quod quibusdam maxime.
            Incidunt nemo voluptas harum voluptatum?
          </p>
          <Link to="#!" className="btn btn-info">
            Know More
          </Link>
        </div>
        <div className="imgbox">
          <img src="home-banner.jpg" alt="" />
        </div>
      </div>
      <div className="box">
        <div className="imgbox">
          <img src="gym.jpg" alt="" />
        </div>
        <div className="info-sec">
          <h3>Full body workout.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            numquam nisi corporis laboriosam animi vel natus, corrupti commodi,
            architecto facilis similique mollitia quod quibusdam maxime.
            Incidunt nemo voluptas harum voluptatum?
          </p>
          <Link to="#!" className="btn btn-info">
            Know More
          </Link>
        </div>
      </div>
      <div className="box">
        <div className="info-sec">
          <h3>Personalized diet plan.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            numquam nisi corporis laboriosam animi vel natus, corrupti commodi,
            architecto facilis similique mollitia quod quibusdam maxime.
            Incidunt nemo voluptas harum voluptatum?
          </p>
          <Link to="#!" className="btn btn-info">
            Know More
          </Link>
        </div>
        <div className="imgbox">
          <img src="meal.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Services;
