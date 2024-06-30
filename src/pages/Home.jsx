import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import banner_image from "../images/banner_2.jpg";
import "../styles/HomeStyle.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${banner_image})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In Our Website</p>
          <Link to="/Manu">
            <button> Order Now </button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
