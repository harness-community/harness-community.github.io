import React from "react";
import styles from "./styles.module.css";
import clsx from "clsx";

const NavCard = ({ prev, next }) => {
  return (
    <div className={styles.navLayout}>
      <div className={`${styles.cardBox} ${styles.flexCard} ${styles.prevCard}`}>
        <h4>{prev.title}</h4>
        <p>{prev.description}</p>
      </div>
      <div className={`${styles.cardBox} ${styles.flexCard} ${styles.nextCard}`}>
        <h4>{next.title}</h4>
        <p>{next.description}</p>
      </div>
    </div>
  );
};

export { NavCard };
