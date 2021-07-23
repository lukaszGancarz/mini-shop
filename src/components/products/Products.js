import React from "react";
import styles from "./Products.module.css";
import Item from "./Item";

const Products = (props) => {
  return (
    <ul className={styles.list}>
      {props.items.map((item) => (
        <Item
          key={item.id}
          addToCart={props.addToCart}
          {...item}
        >
          {item.title} {item.price} {item.description}
        </Item>
      ))}
    </ul>
  );
};

export default Products;
