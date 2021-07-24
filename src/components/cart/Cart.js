import React from "react";
import styles from "./Cart.module.css";

const Cart = (props) => {
  return (
    <div className={styles.list}>
      <ul className={styles.ul}>
        {props.items.map((item) => ( 
          <li className={styles.li}>
            <div className={styles.photo}>{item.photo}</div>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.desription}>{item.description}</div>
            <div className={styles.count}>{item.count} x {item.price}</div>
            <div className={styles.total}>{(item.count * item.price).toFixed(2)}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
