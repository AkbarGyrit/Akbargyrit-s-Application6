import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">Signup</Link>
        </li>
        <li>
          <Link to="/webpage">Webpage</Link>
        </li>
        <li>
          <Link to="/signupwithgoogle">Signupwithgoogle</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
