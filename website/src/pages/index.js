import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={clsx('container', styles.heroCard)}>
        <h1 className="hero__title">
          Welcome to the <span className={styles.heroTitleAccent}>Harness Community</span>
        </h1>
        <p className="hero__subtitle">Ask in the Open. Get Answers.</p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--lg', styles.joinButton)}
            href="https://community.harness.io">
            Join Now →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title={`Welcome to the Harness Community`}
      description="The Harness Community is where practitioners ask questions, share knowledge, and get answers from peers and Harness engineers. Join the conversation on community.harness.io.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
