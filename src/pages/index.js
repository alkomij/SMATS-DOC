import Translate, {translate} from '@docusaurus/Translate';

import HomepageFeatures from '../components/HomepageFeatures';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import React from 'react';
import clsx from 'clsx';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"><translate>
        Advanced Traffic Data Collection Technology
          </translate></h1>
        <p className="hero__subtitle"><translate>
        SMATS Documentation
        </translate></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
      <div className={clsx('col col--4', styles.feature)}>
    <div className="text--center">
      <img className={styles.featureImage} src='img/undraw_docusaurus_mountain.svg' alt="Easy to Use"/>
      <h3><Translate description="The homepage message to ask the user to visit my blog">Easy to Use</Translate>
      </h3>
      <p>
        <Translate>
          Docusaurus was designed from the ground up to be easily installed and
          used to get your website up and running quickly.
        </Translate>
      </p>
    </div>
  </div>      </main>
    </Layout>
  );
}
