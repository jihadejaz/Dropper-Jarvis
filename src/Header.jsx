import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1150);
    };

    handleResize(); // Set initial state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const renderNavLinks = () => {
    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "nav__link";
    const buttonClassName = "nav__cta";

    return (
      <ul className={listClassName}>
        <li style={{ backgroundColor: "transparent" }}>
          <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
            Home
          </NavLink>
        </li>
        <li style={{ backgroundColor: "transparent" }}>
          <NavLink to="" className={linkClassName} onClick={closeMobileMenu}>
          Help Center
          </NavLink>
        </li>
        <li style={{ backgroundColor: "transparent", 
      
color: "rgb(47, 146, 138)", 
      
      }}>
  <NavLink to="" className={`${linkClassName} ${buttonClassName}`} onClick={closeMobileMenu}>
  <button style={{color: "rgb(47, 146, 138)",border: "1px solid rgb(46, 183, 236)", width:"110px" , height:"40px",  alignItems:"center",fontSize:"1em"  }}>Sign Up</button>
  </NavLink>
</li>  
      </ul>
    );
  };

  return (
    <>
      
      

      <header className="header2">
        
        <nav className="nav container">
         

          {isMobile && (
            <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
              <a  className="menu-icon">&#9776;</a> {/* Menu icon */}
            </div>
          )}
          

          {isMobile ? (
            <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`} id="nav-menu">
              {renderNavLinks()}
              <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                <a  className="close-icon">&times;</a> {/* Close icon */}
              </div>
            </div>
          ) : (
            renderNavLinks()
          )}
        </nav>
      </header>


      <header>
        <div className='header'>
          <div className='navheader'>
            <div className='navbar'>
              <img src="images/icon2.png" alt="Icon" />
              <ul className='navul'>
                <li><NavLink to="/" className='link'>Home</NavLink></li>
                <li><NavLink to="/help-center" className='link'>Help Center</NavLink></li>
              </ul>
            </div>
          </div>
          <div className='navbutton'>
            <button>Sign Up</button>
          </div>
        </div>
      </header>


      <div className='sideimage'>
      <div className='sidenav' >
<img src="images/icon2.png" alt="Icon" />
        </div>
      </div>








    </>
  );
}

export default Header;
