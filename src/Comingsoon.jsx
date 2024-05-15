import React, { useState, useEffect } from 'react';

import "./comingsoon.css"
import { Link, NavLink } from 'react-router-dom'

function Comingsoon() {


  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 699);
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
      <ul className={listClassName} style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between", 
        textTransform: "capitalize" 
      }}>
        <li style={{ backgroundColor: "transparent" }}>
          <Link to="/" className={linkClassName} onClick={closeMobileMenu}>
            home
          </Link>
        </li>
        <li style={{ backgroundColor: "transparent" }}>
          <Link to="../ads" className={linkClassName} onClick={closeMobileMenu}>
          ads
          </Link>
        </li>
        <li style={{ backgroundColor: "transparent" }}>
          <Link to="../coming" className={linkClassName} onClick={closeMobileMenu}>
          product
          </Link>
        </li>
      
        <li style={{ backgroundColor: "transparent" }}>
          <Link to="../coming" className={linkClassName} onClick={closeMobileMenu}>
          help Center
          </Link>
        </li>
        <li style={{ backgroundColor: "transparent", 
      
color: "rgb(47, 146, 138)", 
      
      }}>
  <NavLink to="../login" className={`${linkClassName} ${buttonClassName}`} onClick={closeMobileMenu}>
  <button style={{color: "rgb(47, 146, 138)",border: "1px solid rgb(46, 183, 236)", width:"110px" , height:"40px",  alignItems:"center",fontSize:"1em",  background:"transparent"}}>Sign Up</button>
  </NavLink>
</li>  
      </ul>
    );
  };

  
 
 
 
 


  return (
  <>

<header  className={`header2 ${isMobile ? '' : 'hidden'}`}>
      <nav className={`nav container ${isMobile ? 'nav-mobile' : 'nav-desktop'}`}>
        {isMobile && (
          <div className="nav__toggle" onClick={toggleMenu}>
            <a className="menu-icon">&#9776;</a>
          </div>
        )}
        {isMobile ? (
          <div className={`nav__menu ${isMenuOpen ? "show-menu" : ""}`}>
            {renderNavLinks()}
            <div className="nav__close" onClick={toggleMenu}>
              <a className="close-icon">&times;</a>
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
                <li><Link to="/" className='link'>Home</Link></li>
                <li><Link to="../ads" className='link'>ads</Link></li>
                <li><Link to="../coming" className='link'>product</Link></li>
               
              </ul>
            </div>
          </div>
          <div className='navbutton'>
            
            <Link to="../login">
      
            <li><Link to="../login" className='link'> <a className='linkss'> Sign Up     </a> </Link></li>
            </Link>

            
          </div>
        </div>
      </header>
      

     

     


      <div className='sideimage'>
      <div className='sidenav' >
<img src="images/icon2.png" alt="Icon" />
        </div>
      </div>






  <section className='coming'>
 <div className='comingsoon'>
<h1>  Coming soon</h1>
 </div>
    
  </section>
  </>
  )
}

export default Comingsoon