import React from "react";
import styles from "./styles.module.css";
import { fetchedData } from "./demoData";
import { NavCard } from "./NavCard";
import {MenuCard} from "./MenuCard";

export default function NavigationCards() {
  const demoSides = [
    {
        title:"previous",
        description:"Configure Kubernetes Pipeline Metadata"
    },
    {
        title:"next",
        description:"Configure when pipeline execution are triggered"
    },
  ]

  return (
    <div>
      <h1>Menu Card Component</h1>
      {/* the below div is for demo by data*/}
      <div className={styles.cardsContainer}>
        {fetchedData.map((data) => (
          <MenuCard data={data} />
        ))}
      </div>
      <h1>Navigation Card Component</h1>
      {/* the below div is for navigation layout  */}
      <NavCard prev={demoSides[0]} next={demoSides[1]}/>

    </div>
  );
}
