import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Korzystanie z serwisu oznacza akceptację</p> <a>regulaminu.</a>
      <p>Wszelkie prawa zastrzeżone!</p>
    </div>
  );
};

export default Footer;
