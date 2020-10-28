import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import "./Navbar.css";

import { FaBars, FaTimes } from "react-icons/fa";
import KButton, { ButtonStyle } from "./components/KButton";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const onClickHandle = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  return (
    <>
      <div className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__logo" onClick={closeMobileMenu}>
            <MdFingerprint className="navbar__icon" />
            K@ka
          </Link>

          <div className="navbar__menu-icon" onClick={onClickHandle}>
            {!click ? <FaBars /> : <FaTimes />}
          </div>

          <ul className={click ? "navbar__menu active" : "navbar__menu"}>
            <li className="navbar__item">
              <Link to="/" className="navbar__links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/services" className="navbar__links" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="/products" className="navbar__links" onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className="navbar__btn">
              {button ? (
                <Link to="/sign-up" className="navbar__btn-link" onClick={closeMobileMenu}>
                  <KButton 
                    buttonStyle={ButtonStyle.Outline}
                  > 
                    SIGN UP
                  </KButton>
                </Link>
              ) : (
                <Link to="/sign-up" className="navbar__btn-link" onClick={closeMobileMenu}>
                  <KButton
                    buttonStyle={ButtonStyle.Outline}
                    buttonSize="btn__mobile"
                  >
                    SIGN UP
                  </KButton>
                </Link>
              )}
            </li>
            <li className="navbar__btn">
              {button ? (
                <Link to="/sign-in" className="navbar__btn-link" onClick={closeMobileMenu}>
                  <KButton> 
                    SIGN IN
                  </KButton>
                </Link>
              ) : (
                <Link to="/sign-in" className="navbar__btn-link" onClick={closeMobileMenu}>
                  <KButton
                    
                    buttonSize="btn__mobile"
                  >
                    SIGN IN
                  </KButton>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
