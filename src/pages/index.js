import Layout from '@theme/Layout';
import React from 'react';
import Translate from '@docusaurus/Translate';
import clsx from 'clsx';
import styles from './index.module.css';

// Define an array of features with titles, descriptions, and image URLs
const features = [
  {
    title: 'Introduction',
    imageUrl: '/img/Pic1.jpg',
    description: (
      <Translate>
        At SMATS, we are committed to revolutionizing traffic management through cutting-edge solutions that drive efficiency, safety, and sustainability. Our suite of innovative products is designed to address the most pressing challenges in the field of traffic management, ensuring a smarter and more accessible future for communities worldwide.
      </Translate>
    ),
  },
  {
    title: 'Enhanced Traffic Flow',
    imageUrl: '/img/Pic2.jpg',
    description: (
      <Translate>
        One of the key advantages of SMATS products is their ability to optimize traffic flow. Through real-time data analysis and intelligent algorithms, our solutions adapt to changing traffic conditions, reducing congestion and improving the overall driving experience. Say goodbye to gridlock and hello to smoother, more efficient journeys.
      </Translate>
    ),
  },
  {
    title: 'Improved Safety',
    imageUrl: '/img/Pic3.jpg',
    description: (
      <Translate>
        Safety is paramount, and SMATS products prioritize it. Our advanced monitoring systems can detect potential hazards and alert authorities and drivers in real time. This proactive approach reduces accidents, making roads safer for everyone. We believe that every journey should end safely.
      </Translate>
    ),
  },
  {
    title: 'Sustainability at Heart',
    imageUrl: '/img/Pic4.jpg',
    description: (
      <Translate>
        We are committed to sustainability. SMATS products help reduce emissions by optimizing traffic flow, reducing idle time, and promoting the use of alternative transportation methods. By making our cities greener and more environmentally friendly, we pave the way for a brighter future.
      </Translate>
    ),
  },
  {
    title: 'Data-Driven Insights',
    imageUrl: '/img/Pic5.jpg',
    description: (
      <Translate>
        SMATS products are not just solutions; they are invaluable sources of data. With our systems in place, you gain access to comprehensive traffic analytics that can inform future infrastructure decisions, enhance city planning, and lead to even smarter solutions.
      </Translate>
    ),
  },
  {
    title: 'Customized Solutions',
    imageUrl: '/img/Pic6.jpg',
    description: (
      <Translate>
        Every city is unique, and we understand that. That's why SMATS products are highly adaptable and customizable to suit the specific needs of your community. Whether you need a traffic management system for a bustling metropolis or a quiet suburban neighborhood, we've got you covered.
      </Translate>
    ),
  },
];

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate id="homepage.title">
            Advanced Traffic Data Collection Technology
          </Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate id="homepage.subtitle">
            SMATS Documentation
          </Translate>
        </p>
        <div className={styles.buttons}>
          <a
            className="button button--secondary button--lg"
            href="/intro"
          >
            <Translate id="homepage.button">
              Documentation Page
            </Translate>
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="SMATS Documentation"
      description="Welcome to the official documentation for SMATS, where you can learn about our advanced traffic data collection technology."
    >
      <HomepageHeader />
      <main>
        <div className="container">
          <div className="row">
            {features.map((feature, index) => (
              <div
                key={index}
                className={clsx('col col--4', styles.feature)}
              >
                <div className="text--center">
                  <img
                    className={styles.featureImage}
                    src={feature.imageUrl}
                    alt={feature.title}
                  />
                  <h3>
                    <Translate>
                      {feature.title}
                    </Translate>
                  </h3>
                  <p>
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
    </Layout>
  );
}
