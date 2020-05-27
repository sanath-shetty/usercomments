import React from "react";

const About = () => {
  return (
    <div className="container-md-8 m-auto">
      <h2 className="about-head">About us.</h2>
      <p className="about-p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        quisquam aliquam recusandae est dicta, cupiditate placeat a voluptatum
        molestias officia nesciunt et labore quasi non mollitia saepe eveniet
        maiores similique. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Perferendis neque amet dolor suscipit praesentium reprehenderit
        blanditiis nulla. Magni nobis laboriosam iste corporis nulla pariatur
        nisi dolorum id in debitis sapiente sunt ipsum provident explicabo nam
        cum rem, deserunt molestiae quis, esse incidunt aspernatur maiores illum
        vel? Nostrum quae facilis omnis.
      </p>

      <p className="gallery-head">Gallery</p>
      <div className="gallery-sec">
        <img src="home-banner.jpg" className="img_prop" alt="" />
        <img src="home-banner.jpg" className="img_prop" alt="" />
        <img src="home-banner.jpg" className="img_prop" alt="" />
        <img src="home-banner.jpg" className="img_prop" alt="" />
        <img src="home-banner.jpg" className="img_prop" alt="" />
        <img src="home-banner.jpg" className="img_prop" alt="" />
        <img src="home-banner.jpg" className="img_prop" alt="" />
      </div>
    </div>
  );
};

export default About;
