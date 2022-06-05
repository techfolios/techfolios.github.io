import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Create modern, responsive technical portfolio sites fast!',
    png: 'img/landing/techfolio-molly-home-page.png',
    description: (
      <>
        If you have ever tried to build a technical portfolio site using a blogging platform such as WordPress, you know it takes time and the results are not always satisfactory. TechFolios provides a quick and easy way to build a high quality technical portfolio site, while still enabling custom layout if desired.
      </>
    ),
  },
  {
    title: 'Provide details using JSON Resume',
    png: 'img/landing/techfolio-site-resume-full.png',
    description: (
      <>
        You provide basic biographical information using <a href="https://jsonresume.org/">JSON Resume</a> format. JSON Resume is a developer-driven, open source initiative to provide a JSON-based standard for resumes.
      </>
    ),
  },
  {
    title: 'Content first, style later',
    png: 'img/landing/techfolio-site-projects.png',
    description: (
      <>
        With TechFolio, the prebuilt themes are purpose-built for technical portfolios. This means that you can focus solely on content when creating the initial release of your site. Later, as you get more comfortable, you can tailor the look-and-feel to more closely align with your personal style.
      </>
    ),
  },
];

function Feature({png, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img height="250px" src={png} />
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
