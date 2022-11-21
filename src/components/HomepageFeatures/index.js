import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '便於使用',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus 從頭開始設計，易於安裝和
        用於讓您的網站快速啟動和運行。
      </>
    ),
  },
  {
    title: '專注於重要的事情',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus 讓您專注於您的文檔，而我們會做這些家務。去
        將您的文檔移動到 <code>docs</code> 目錄中。
      </>
    ),
  },
  {
    title: '由 React 提供支持',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        通過重用 React 擴展或自定義您的網站佈局。 Docusaurus 可以
        在重用相同的頁眉和頁腳時進行擴展。
      </>
    ),
  },
	@@ -39,7 +37,7 @@ function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
