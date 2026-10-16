import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const ProjectList = [
  {
    title: "Harness Open Source",
    repo: "harness/harness",
    pageUrl: "https://github.com/harness/harness",
    license: "Apache-2.0",
    description: (
      <>
        An end-to-end developer platform with Source Control Management,
        CI/CD pipelines, hosted developer environments (Gitspaces), and
        artifact registries.
      </>
    ),
  },
  {
    title: "Harness CLI",
    repo: "harness/cli",
    pageUrl: "https://github.com/harness/cli",
    license: "Apache-2.0",
    description: (
      <>
        A unified, spec-driven CLI for the entire Harness platform. Manages
        pipelines, artifacts, code, GitOps, and platform resources with one
        consistent grammar.
      </>
    ),
  },
  {
    title: "Harness MCP Server",
    repo: "harness/mcp-server",
    pageUrl: "https://github.com/harness/mcp-server",
    license: "MIT",
    description: (
      <>
        Harness&apos; official Model Context Protocol (MCP) server, letting
        AI assistants and agents interact with pipelines, repos, and other
        Harness resources.
      </>
    ),
  },
  {
    title: "LitmusChaos",
    repo: "litmuschaos/litmus",
    pageUrl: "https://github.com/litmuschaos/litmus",
    license: "Apache-2.0",
    description: (
      <>
        A CNCF chaos engineering platform that helps SREs and developers
        identify weaknesses in cloud-native infrastructure.
      </>
    ),
  },
];

function ProjectCard({ title, repo, pageUrl, license, description }) {
  return (
    <div className={clsx("col col--6", styles.featureCol)}>
      <div className={clsx("card", styles.featureCard)}>
        <div className="card__header">
          <h3>{title}</h3>
          <p className={styles.repoMeta}>
            <code>{repo}</code> &middot; {license} License
          </p>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <a
            className="button button--primary button--outline button--block"
            href={pageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="text--center">Harness Open Source Projects</h2>
        <p className="text--center">
          A few of the open-source tools built by Harness and the community.
        </p>
        <div className="row">
          {ProjectList.map((props, idx) => (
            <ProjectCard key={idx} {...props} />
          ))}
        </div>
        <div className={clsx("text--center", styles.moreLink)}>
          <a href="https://github.com/harness" target="_blank" rel="noopener noreferrer">
            See all Harness repositories on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
