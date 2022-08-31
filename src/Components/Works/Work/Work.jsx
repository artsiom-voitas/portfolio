import PropTypes from 'prop-types';
import React from 'react';
import './work.scss';

const Work = React.memo(function Work(props) {
  const { link, img, tech, time } = props;
  return (
    <div className="work">
      <a href={link} target="_blank" rel="noopener noreferrer" className="work__link">
        <div className="figure work__img">
          <img src={img} alt={tech} />
        </div>
        <span className="work__content">
          <span className="work__tech">Techs: {tech}</span>
          <span className="work__time">Time: {time}</span>
        </span>
      </a>
    </div>
  );
});

Work.propTypes = {
  link: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default Work;
