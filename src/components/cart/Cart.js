import React from "react";
import styles from "./Cart.module.css";

const Cart = (props) => {
  return (
    <div className={styles.list}>
      <ul className={styles.ul}>
        {props.items.map((item) => (
          <li className={styles.li}>
            <div className={styles.photoDiv}>
              <img
                className={styles.photo}
                src={item.photo}
                alt={"zdjęcie"}
              ></img>
            </div>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.description}>{item.description}</div>
            <div className={styles.price}>
              {item.count} szt. x <br />
              {item.price.toFixed(2)} zł.
            </div>
            <div className={styles.equal}>=</div>
            <div className={styles.total}>
              {(item.count * item.price).toFixed(2)} zł
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
