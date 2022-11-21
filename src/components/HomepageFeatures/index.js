import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '99.9% 的在線率 🚀',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    src: "https://cdn.iconscout.com/icon/free/png-256/server-uptime-2921895-2445594.png",
    description: (
      <>
        Backup Mode可以說是24/7都不掉線，除非更新或維護時會短暫下線無法使用!
      </>
    ),
  },
  {
    title: '簡單使用! 💻',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    src: "https://cdn.backupmode.xyz/feature-001.png",
    description: (
      <>
        全部都是斜線指令，且簡介一看就清楚!
      </>
    ),
  },
  {
    title: '全中文操作 🔓',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    src: "https://cdn.backupmode.xyz/feature-003.png",
    description: (
      <>
        超棒的全中文介面可以使用
      </>
    ),
  },
];

function Feature({Svg, title, description, src}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={src} />
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
