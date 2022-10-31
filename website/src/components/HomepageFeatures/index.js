import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Community Edition",
    Svg: require("@site/static/img/cd_community_edition.svg").default,
    pageUrl: "https://github.com/harness/harness-cd-community",
    description: (
      <>
        The Harness CD Community Edition is provided under a source-available
        license called the
        <a href="https://polyformproject.org/licenses/shield/1.0.0/">
          Polyform Shield License
        </a>
        , which is available for use free of charge for most users.
      </>
    ),
  },
  {
    title: "Community Edition",
    Svg: require("@site/static/img/ci_community_edition.svg").default,
    pageUrl: "https://github.com/harness/drone/",
    description: (
      <>
        The Harness CI Community Edition (aka Drone), is free and open-source
        software (FOSS) licensed under the Apache 2.0 license.
      </>
    ),
  },
  {
    title: "Team Edition",
    Svg: require("@site/static/img/ci_team_edition.svg").default,
    pageUrl: "https://www.drone.io/enterprise/opensource/#features",
    description: (
      <>
        The Harness CI Team Edition (powered by Drone) is made available under a
        source-available license called the&nbsp;
        <a
          href="https://polyformproject.org/licenses/noncommercial/1.0.0/"
          target="_blank"
        >
          Polyform Small Business License
        </a>
        , which makes it free of charge for most users.
      </>
    ),
  },
];

function Feature({ Svg, title, pageUrl, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="learn-more">
          <a href={pageUrl}>Learn more →</a>
        </p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
