import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Ask in the Open",
    description: (
      <>
        Post your question once on the Harness Community forum and get help
        from fellow practitioners and Harness engineers &mdash; no more
        digging through private tickets or scattered chat threads.
      </>
    ),
  },
  {
    title: "Share What You Know",
    description: (
      <>
        Write up a solution, publish a how-to, or answer someone else&apos;s
        question. Every post helps the next person who runs into the same
        problem.
      </>
    ),
  },
  {
    title: "Stay in the Loop",
    description: (
      <>
        Follow release notes, upcoming events, and platform & architecture
        discussions so you always know what&apos;s changing and why.
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4", styles.featureCol)}>
      <div className={clsx("card", styles.featureCard)}>
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="text--center">Why Join the Harness Community</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className={clsx("text--center", styles.moreLink)}>
          <a href="https://community.harness.io">
            Join the conversation on community.harness.io →
          </a>
        </div>
      </div>
    </section>
  );
}
