import './skill.scss';

import PropTypes from 'prop-types';
import React from 'react';

const Skill = React.memo(function Skill(props) {
  const { title, img } = props;
  return (
    <div className="skill">
      <div className="skill__img">
        <img src={img} alt={title} />
      </div>
      <div className="skill__title">{title}</div>
    </div>
  );
});

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default Skill;
