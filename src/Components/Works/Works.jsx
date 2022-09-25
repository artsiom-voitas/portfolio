import React from 'react';
import avStore from '../../images/works/av-store.png';
import cvTemplate from '../../images/works/cv-template.png';
import githubDashboard from '../../images/works/github-dashboard.png';
import honeyStore from '../../images/works/honey-store.png';
import productPage from '../../images/works/product-page.png';
import rayalPark from '../../images/works/rayal-park.png';
import universalStore from '../../images/works/universal-store.png';
import webovio from '../../images/works/webovio.png';
import Work from './Work';
import './works.scss';

const Works = React.memo(function Works() {
  return (
    <section className="main container">
      <h2 className="main__title">Works</h2>
      <div className="works">
        <Work
          link="https://artsiom-voitas.github.io/github-dashboard/#/"
          img={githubDashboard}
          tech="React, Redux, JS, Bootstrap, SCSS"
          time="56 hours"
        />
        <Work
          link="https://artsiom-voitas.github.io/av-store/dist/index.html"
          img={avStore}
          tech="JS, Pug, SCSS, Webpack, Bootstrap"
          time="72 hours"
        />
        <Work
          link="https://artsiom-voitas.github.io/webovio/build/"
          img={webovio}
          tech="Pug, SCSS, JS"
          time="48 hours"
        />
        <Work
          link="https://artsiom-voitas.github.io/rayal-park/"
          img={rayalPark}
          tech="HTML, CSS"
          time="Time: 24 hours"
        />
        <Work
          link="https://artsiom-voitas.github.io/universal-store/build"
          img={universalStore}
          tech="Pug, SCSS, JS"
          time="8 hours"
        />
        <Work
          link="https://artsiom-voitas.github.io/honey-store/"
          img={honeyStore}
          tech="HTML, CSS"
          time="12 hours"
        />
        <Work
          link="https://artsiom-voitas.github.io/cv-template/"
          img={cvTemplate}
          tech="HTML, CSS"
          time="3 hours"
        />
        <Work
          link="https://artsiom-voitas.github.io/product-page/"
          img={productPage}
          tech="HTML, CSS"
          time="2 hours"
        />
      </div>
    </section>
  );
});

export default Works;
