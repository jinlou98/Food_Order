import React from "react";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from './HeaderCartButton';
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
      </header>
      <div>
        <img src={mealsImage} className={classes['main-image']}></img>
      </div>
    </React.Fragment>
  );
};

export default Header;
