import React from 'react';
import './header.scss';
import gitLogo from '../../images/github-logo.png';

const Header = React.memo(function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <h1 className="header__title">Frontend developer portfolio</h1>
          <a
            href="https://github.com/artyom-voitas?tab=repositories"
            target="_blank"
            rel="noreferrer">
            <img className="header__logo" src={gitLogo} alt="GitHub's logo" />
          </a>
        </div>
      </div>
    </header>
  );
});

export default Header;
