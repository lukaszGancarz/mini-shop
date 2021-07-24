import React, { useState } from "react";
import styles from "./Item.module.css";

const Item = (props) => {
  const [count, setCount] = useState(1);

  const onCountHandler = (event) => {
    event.target.value >= 0 && setCount(event.target.value);
  };

  return (
    <li className={styles.box}>
      <div className={styles.photo}>
        <img className={styles.img} src={props.photo} alt={"zdjęcie"}></img>
      </div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.description}>{props.description}</div>
      <div className={styles.price}>{props.price.toFixed(2)} zł.</div>
      <div className={styles.details}>
        <input
          className={styles.input}
          type="number"
          value={count}
          onChange={onCountHandler}
        ></input>
        <button
          className={styles.button}
          onClick={() =>
            props.addToCart(
              {
                id: props.id,
                title: props.title,
                price: props.price,
                description: props.description,
                photo: props.photo,
              },
              Number(count),
              setCount,
            )
          }
        >
          Add to cart
        </button>
      </div>
    </li>
  );
};

export default Item;
