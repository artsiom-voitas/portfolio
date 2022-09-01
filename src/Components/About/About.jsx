import React from 'react';
import avatar from '../../images/avatar.jpeg';
import './about.scss';

const About = React.memo(function About() {
  return (
    <div className="main container">
      <h2 className="main__title">About me</h2>
      <div className="main__content content">
        <div className="content__text">
          <p>
            Hi, I'm Artyom Voitas, and I graduated from the Belarus State Economic University in
            2015 with a degree in Economics. I've always been interested in IT and I started
            studying Front-end development at IT Shatle.
          </p>
          <p>
            Graduated from the courses with honors:{' '}
            <a
              href="https://drive.google.com/file/d/1--DSs7qX8PJDaS59aePLBn2oCxl_RkJ3/view?usp=sharing"
              className="link"
              target="_blank"
              rel="noreferrer">
              HTML/CSS
            </a>{' '}
            in May and{' '}
            <a
              href="https://drive.google.com/file/d/1-9mDbzkJwLTLJov2lpmbSPAPqMWS8xhE/view?usp=sharing"
              className="link"
              target="_blank"
              rel="noreferrer">
              JavaScript + React
            </a>
            {''} in August 2022.
          </p>
          <p>
            In May-July 2022, I did an internship (commercial development on HTML/CSS) at Lomray
            Software.
          </p>
        </div>
        <div className="content__img">
          <img src={avatar} alt="Artyom's avatar" />
        </div>
      </div>
    </div>
  );
});

export default About;
