import './Navbar.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
function Navbar({ setColorTemp, setOrientation, setColor }) {
  const [navbar, setNavbar] = useState(false);

  const handleClearFilters = () => {
    setColorTemp('');
    setColor('');
    setOrientation('');
  };

  const changeBackground = () => {
    if (window.scrollY >= 12) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <div className={navbar ? 'navbar active' : 'navbar'}>
      <div className="navbar__navigation">
        <div className="navbar__logo">
          <img src="/img/logo/logo.png" />
        </div>
        <div className="navbar__all">
          <button className="navbar__button" onClick={handleClearFilters}>
            Wszystkie
          </button>
        </div>
        <div className="navbar__lighting">
          <button
            className="navbar__button"
            onClick={() =>
              setColorTemp((prevState) => (prevState === 'cold_white' ? '' : 'cold_white'))
            }>
            Zimny
          </button>
          <button
            className="navbar__button"
            onClick={() =>
              setColorTemp((prevState) => (prevState === 'warm_white' ? '' : 'warm_white'))
            }>
            Ciepły
          </button>
        </div>
        <div className="navbar__orientation">
          <button className="navbar__button" onClick={() => setOrientation('vertical')}>
            Pionowe
          </button>
          <button className="navbar__button" onClick={() => setOrientation('horizontal')}>
            Poziome
          </button>
        </div>
        <div className="navbar__color">
          <button className="navbar__button" onClick={() => setColor('black')}>
            Czarne
          </button>
          <button className="navbar__button" onClick={() => setColor('gray')}>
            Szare
          </button>
          <button className="navbar__button" onClick={() => setColor('white')}>
            Białe
          </button>
          <button className="navbar__button" onClick={() => setColor('natural')}>
            Naturalne
          </button>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  setColorTemp: PropTypes.func,
  setOrientation: PropTypes.func,
  setColor: PropTypes.func
};

export default Navbar;
