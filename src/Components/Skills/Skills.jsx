import React from 'react';
import bootstrap from '../../images/skills/bootstrap.svg';
import css3 from '../../images/skills/css3.svg';
import git from '../../images/skills/git.svg';
import gulp from '../../images/skills/gulp.svg';
import html5 from '../../images/skills/html5.svg';
import js from '../../images/skills/javascript.svg';
import pug from '../../images/skills/pug.svg';
import react from '../../images/skills/react.svg';
import redux from '../../images/skills/redux.svg';
import scss from '../../images/skills/sass.svg';
import webpack from '../../images/skills/webpack.svg';
import Skill from './Skill';
import './skills.scss';

const Skills = React.memo(function Skills() {
  return (
    <section className="main container">
      <h2 className="main__title">Skills</h2>
      <div className="skills">
        <Skill img={redux} title="Redux" />
        <Skill img={react} title="React" />
        <Skill img={webpack} title="Webpack" />
        <Skill img={js} title="JavaScript" />
        <Skill img={git} title="Git" />
        <Skill img={bootstrap} title="Bootstrap" />
        <Skill img={scss} title="SCSS" />
        <Skill img={pug} title="Pug" />
        <Skill img={gulp} title="Gulp" />
        <Skill img={css3} title="CSS3" />
        <Skill img={html5} title="HTML5" />
      </div>
    </section>
  );
});

export default Skills;
