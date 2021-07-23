import React from "react";
import styles from "./LoggedOut.module.css";

import bye from "./bye.gif";

const LoggedOut = (props) => {
  return (
    <div className={styles.loggedOut}>
        <img className={styles.gif} src={bye} alt="Bye"/>
    </div>
  );
};

export default LoggedOut;
