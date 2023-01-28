import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Live Event Design, Install and Operation">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container ">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main className='padding-vert--md'>
        {/* Features */}
        <section className={styles.features}>
          <div className="container text--center">
            <div className="row padding-vert--md">
              <div className={clsx('col col--6')}>
                <h3>Getting Involved</h3>
                <p>Have you ever wondered what goes on behind the scenes for theatre and live events? Do you want to be a part of some of the biggest events on campus? If so then come and join us!</p>
                <p>We'll support you at all stages of a project, whether you've been working in the industry for years or wanting to try something new. </p>
                <div className={styles.buttons}>
                  <Link
                    className="button button--secondary button--lg"
                    to="/get-involved">
                    Get Involved
                  </Link>
                </div>
              </div>
              <div className={clsx('col col--6')}>
                <h3>Our Services</h3>
                <p>We run the technical side of events by YUSU Society and Colleges with anything from theatre and presentations to dance and live music.</p>
                <p>We are equally comfortable working in venues small and large, and dedicated theatre spaces with their own equipment, or in temporary spaces with our portable lighting and sound.</p>
                <div className={styles.buttons}>
                  <Link
                    className="button button--secondary button--lg"
                    to="/hire">
                    Work with Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About */}
        <section className={styles.features}>
          <div className="container text--center">
            <h2 className='padding-horiz--md'>About the Society</h2>
            <p>Founded in 2017, Technical Theatre Society was started with the aim of providing better collaboration between societies at York, to be a gateway for students who want to get involved in running shows, and a resource for other societies to easily find technicians and hire equipment.</p>
            <p>We also give the societies the flexibility to perform in venues that aren't fitted out with permanent lighting and sound equipment, using our stock of portable equipment. </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
