import React from "react";
import './style/Home.css'

import Favorites from "./Favorites/Favorites";
import SearchBar from "./SearchBar/SearchBar";
import Navbar from "../Navbar";

const Home = (props) => {
  return (
    <div className="home">
      <Navbar />
       <SearchBar  /> 
      <Favorites />
    </div>
  );
};

export default Home;
