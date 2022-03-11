import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/bg2.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Welcome to Food's Kitchen</h1>
        <Link to="/menu">
          <br />
          <button>GO TO MENU</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;