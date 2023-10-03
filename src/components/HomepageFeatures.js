import React from 'react';
import Translate from '@docusaurus/Translate';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Introduction',
    imageUrl: require('../../static/img/Pic1.jpg').default,
    description: (
      <>
        At SMATS, we are committed to revolutionizing traffic management through cutting-edge solutions that drive efficiency, safety, and sustainability. Our suite of innovative products is designed to address the most pressing challenges in the field of traffic management, ensuring a smarter and more accessible future for communities worldwide.
      </>
    ),
  },
  {
    title: 'Enhanced Traffic Flow',
    imageUrl: require('../../static/img/Pic2.jpg').default,
    description: (
      <>
        One of the key advantages of SMATS products is their ability to optimize traffic flow. Through real-time data analysis and intelligent algorithms, our solutions adapt to changing traffic conditions, reducing congestion and improving the overall driving experience. Say goodbye to gridlock and hello to smoother, more efficient journeys.
      </>
    ),
  },
  {
    title: 'Improved Safety',
    imageUrl: require('../../static/img/Pic3.jpg').default,
    description: (
      <>
        Safety is paramount, and SMATS products prioritize it. Our advanced monitoring systems can detect potential hazards and alert authorities and drivers in real time. This proactive approach reduces accidents, making roads safer for everyone. We believe that every journey should end safely.
      </>
    ),
  },
  {
    title: 'Sustainability at Heart',
    imageUrl: require('../../static/img/Pic4.jpg').default,
    description: (
      <>
        We are committed to sustainability. SMATS products help reduce emissions by optimizing traffic flow, reducing idle time, and promoting the use of alternative transportation methods. By making our cities greener and more environmentally friendly, we pave the way for a brighter future.
      </>
    ),
  },
  {
    title: 'Data-Driven Insights',
    imageUrl: require('../../static/img/Pic5.jpg').default,
    description: (
      <>
        SMATS products are not just solutions; they are invaluable sources of data. With our systems in place, you gain access to comprehensive traffic analytics that can inform future infrastructure decisions, enhance city planning, and lead to even smarter solutions.
      </>
    ),
  },
  {
    title: 'Customized Solutions',
    imageUrl: require('../../static/img/Pic6.jpg').default,
    description: (
      <>
        Every city is unique, and we understand that. That's why SMATS products are highly adaptable and customizable to suit the specific needs of your community. Whether you need a traffic management system for a bustling metropolis or a quiet suburban neighborhood, we've got you covered.
      </>
    ),
  },
];

function Feature({ title, imageUrl, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={imageUrl} alt={title} className={styles.featureImage} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
