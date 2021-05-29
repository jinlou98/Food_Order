import React from "react";
import mealsImage from "../../assets/meals.jpg";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div>
        <img src={mealsImage}></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
