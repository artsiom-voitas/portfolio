import React from 'react';
import './about.scss';
import avatar from '../../images/avatar.jpeg';

const About = React.memo(function About() {
  return (
    <div className="main container">
      <h2 className="main__title">About me</h2>
      <div className="main__content content">
        <div className="content__text">
          <p>
            My name is Artsiom Voitas. I'm 21 years old and I live in Minsk, Belarus. I'm a graduate
            of the Belarus State Economic University (2022).
          </p>
          <p>
            I graduated with honors from the IT SHATLE courses:{' '}
            <a
              href="https://drive.google.com/file/d/1--DSs7qX8PJDaS59aePLBn2oCxl_RkJ3/view?usp=sharing"
              className="link"
              target="_blank"
              rel="noreferrer">
              HTML/CSS (May 2022)
            </a>{' '}
            and{' '}
            <a
              href="https://drive.google.com/file/d/1-9mDbzkJwLTLJov2lpmbSPAPqMWS8xhE/view?usp=sharing"
              className="link"
              target="_blank"
              rel="noreferrer">
              JavaScript + React (August 2022).
            </a>
          </p>
          <p>
            In May-July 2022, I did an internship (commercial development on HTML/CSS) at Lomray
            Software.
          </p>
        </div>
        <div className="content__imgs">
          <img src={avatar} alt="Artsiom's avatar" />
        </div>
      </div>
    </div>
  );
});

export default About;
