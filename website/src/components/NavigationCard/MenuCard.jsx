import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

const MenuCard = ({ data }) => {
  return (
    <div className={`${styles.cardBox} ${styles.flexCard} `}>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};

export { MenuCard };
