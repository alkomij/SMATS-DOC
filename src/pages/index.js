import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import React from 'react';
import Translate from '@docusaurus/Translate';
import clsx from 'clsx';
import styles from './index.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate>
            Advanced Traffic Data Collection Technology
          </Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate>
            SMATS Documentation
          </Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/intro"
          >
            <Translate>Documentation Page</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <div className={clsx(styles.featureRow)}>
          <div className={clsx('col col--4', styles.feature)}>
            <div className="text--center">
              <img
                className={styles.featureImage}
                src={`${siteConfig.baseUrl}img/Pic5.jpg`}
                alt="Introduction"
              />
              <h3>
                <Translate description="Introduction">
                  Introduction
                </Translate>
              </h3>
              <p>
                <Translate>
                At SMATS, we are committed to revolutionizing traffic management through cutting-edge solutions that drive efficiency, safety, and sustainability. Our suite of innovative products is designed to address the most pressing challenges in the field of traffic management, ensuring a smarter and more accessible future for communities worldwide.
                </Translate>
              </p>
            </div>
          </div>
          <div className={clsx('col col--4', styles.feature)}>
            <div className="text--center">
              <img
                className={styles.featureImage}
                src={`${siteConfig.baseUrl}img/Pic4.jpg`}
                alt="Sustainability at Heart"
              />
              <h3>
                <Translate description="Sustainability at Heart">
                Sustainability at Heart
                </Translate>
              </h3>
              <p>
                <Translate>
                We are committed to sustainability. SMATS products help reduce emissions by optimizing traffic flow, reducing idle time, and promoting the use of alternative transportation methods. By making our cities greener and more environmentally friendly, we pave the way for a brighter future.
                </Translate>
              </p>
            </div>
          </div>
          <div className={clsx('col col--4', styles.feature)}>
            <div className="text--center">
              <img
                className={styles.featureImage}
                src={`${siteConfig.baseUrl}img/Pic6.jpg`}
                alt="Customized Solutions"
              />
              <h3>
                <Translate description="Customized Solutions">
                Customized Solutions
                </Translate>
              </h3>
              <p>
                <Translate>
                Every city is unique, and we understand that. That's why SMATS products are highly adaptable and customizable to suit the specific needs of your community. Whether you need a traffic management system for a bustling metropolis or a quiet suburban neighborhood, we've got you covered.
                </Translate>
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
