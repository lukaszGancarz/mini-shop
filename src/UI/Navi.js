import React from "react";
import styles from "./Navi.module.css";
import { Link } from "react-router-dom";

import home from "../images/home.png";
import products from "../images/products.png";
import cart from "../images/cart.png";
import logout from "../images/logout.png";
import login from "../images/login.png";

const Navi = (props) => {

  return (
    <div className={styles.navi}>
      <div className={styles.buttons}>
        <Link to="/home">
          <img src={home} alt="Home" />
        </Link>
        <Link to="/products">
          <img src={products} alt="Products" />
        </Link>
      </div>
      <title className={styles.titles}>Mini Shop App</title>
      {props.loggedIn ? (
        <div className={styles.buttons}>
          <Link to="/cart">
            <img src={cart} alt="Cart" />
          </Link>
          <Link to="/loggedOut">
            <img
              src={logout}
              alt="Logout"
              onClick={() => {localStorage.removeItem("user"); props.isUser(false); props.setLoggedIn(false)}}
            />
          </Link>
        </div>
      ) : (
        <div className={styles.buttons}>
          <Link to="/login">
            <img src={login} alt="Login" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navi;
