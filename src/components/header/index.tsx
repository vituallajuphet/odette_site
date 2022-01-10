import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuShown, setMenuShown] = useState(false);

  const menuClickHandler = (e: any) => {
    e.preventDefault();
    setMenuShown(!isMenuShown);
  };

  useEffect(() => {
    const resizeHandler = () => {
      const winWidth = window.innerWidth;
      setIsMobile(winWidth <= 900);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <header>
      <div className='top_header'>Southern Leyte Needs Us!</div>
      <div className='header_cont'>
        <div className='container'>
          <div className='nav_cont'>
            <div className='logo'>
              <a href='#/'>
                <img src={logo} alt='logo' />
              </a>
            </div>

            {isMobile ? (
              <div className='mobileNav'>
                {!isMenuShown && (
                  <a className='menubars' onClick={menuClickHandler} href='#'>
                    <i className={`fa fa-bars`}></i>
                  </a>
                )}
                {isMenuShown && (
                  <div className='mobileTabCont'>
                    <a className='closeBar' onClick={menuClickHandler} href='#'>
                      <i className={`fa fa-times`}></i>
                    </a>
                    <ul>
                      <li>
                        <a href='#sec1'>Donate Now</a>
                      </li>
                      <li>
                        <Link to='/contributors'>Contributors</Link>
                      </li>
                      <li>
                        <Link to='/who-i-am'>Who Am I</Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className='nav'>
                <ul>
                  <li>
                    <a href='#sec1'>Donate Now</a>
                  </li>
                  <li>
                    <Link to='/contributors'>Contributors</Link>
                  </li>
                  <li>
                    <Link to='/who-i-am'>Who Am I</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
