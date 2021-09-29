import React from "react";
import "./Home.css";

import Favorites from "./Favorites/Favorites";
import SearchBar from "./SearchBar/SearchBar";
import Navbar from "../Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <SearchBar />
      <Favorites />
    </div>
  );
};

export default Home;
