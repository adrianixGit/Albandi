import './Navbar.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
function Navbar({ setColorTemp, setOrientation, setColor, colorTemp, orientation, color }) {
  const [navbar, setNavbar] = useState(false);
  const [hamburger, setHamburger] = useState(false);

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
      <div className="navbar__logo">
        <img src="/img/logo/logo.png" />
      </div>
      <div className={hamburger ? 'navbar__tags active' : 'navbar__tags'}>
        <div className="navbar__all">
          <button className="navbar__button" onClick={handleClearFilters}>
            WSZYSTKIE
          </button>
        </div>
        <div className="navbar__lighting">
          <button
            className={colorTemp === 'cold_white' ? 'navbar__button active' : 'navbar__button'}
            onClick={() =>
              setColorTemp((prevState) => (prevState === 'cold_white' ? '' : 'cold_white'))
            }>
            ZIMNY
          </button>
          <button
            className={colorTemp === 'warm_white' ? 'navbar__button active' : 'navbar__button'}
            onClick={() =>
              setColorTemp((prevState) => (prevState === 'warm_white' ? '' : 'warm_white'))
            }>
            CIEPŁY
          </button>
        </div>
        <div className="navbar__orientation">
          <button
            className={orientation === 'vertical' ? 'navbar__button active' : 'navbar__button'}
            onClick={() =>
              setOrientation((prevState) => (prevState === 'vertical' ? '' : 'vertical'))
            }>
            PIONOWE
          </button>
          <button
            className={orientation === 'horizontal' ? 'navbar__button active' : 'navbar__button'}
            onClick={() =>
              setOrientation((prevState) => (prevState === 'horizontal' ? '' : 'horizontal'))
            }>
            POZIOME
          </button>
        </div>
        <div className="navbar__color">
          <button
            className={color === 'black' ? 'navbar__button active' : 'navbar__button'}
            onClick={() => setColor((prevState) => (prevState === 'black' ? '' : 'black'))}>
            CZARNE
          </button>
          <button
            className={color === 'gray' ? 'navbar__button active' : 'navbar__button'}
            onClick={() => setColor((prevState) => (prevState === 'gray' ? '' : 'gray'))}>
            SZARE
          </button>
          <button
            className={color === 'white' ? 'navbar__button active' : 'navbar__button'}
            onClick={() => setColor((prevState) => (prevState === 'white' ? '' : 'white'))}>
            BIAŁE
          </button>
          <button
            className={color === 'natural' ? 'navbar__button active' : 'navbar__button'}
            onClick={() => setColor((prevState) => (prevState === 'natural' ? '' : 'natural'))}>
            NATURALNE
          </button>
        </div>
      </div>
      <button
        className={hamburger ? 'navbar__hamburger active' : 'navbar__hamburger'}
        onClick={() => setHamburger((prevState) => (prevState === true ? false : true))}>
        <div className="navbar__line"></div>
        <div className="navbar__line"></div>
        <div className="navbar__line"></div>
      </button>
    </div>
  );
}

Navbar.propTypes = {
  setColorTemp: PropTypes.func,
  setOrientation: PropTypes.func,
  setColor: PropTypes.func,
  colorTemp: PropTypes.string,
  orientation: PropTypes.string,
  color: PropTypes.string
};

export default Navbar;
