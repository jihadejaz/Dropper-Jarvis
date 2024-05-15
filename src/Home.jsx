import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'

import './home.css'

function Home() {

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
          <Link to="../products" className={linkClassName} onClick={closeMobileMenu}>
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
                <li><Link to="../products" className='link'>product</Link></li>
                <li><Link to="../coming" className='link'>  Help Center    </Link></li>
              </ul>
            </div>
          </div>
          <div className='navbutton'>
            
            <Link to="../login">
      
            <li><Link to="../login" className='link'> <a className='linkss'><i className="fa fa-user-circle"></i></a> </Link></li>
            </Link>

            
          </div>
        </div>
      </header>
      

     

     


      <div className='sideimage'>
      <div className='sidenav' >
<img src="images/icon2.png" alt="Icon" />
        </div>
      </div>








 <section className='homebanner'>
  
<div className='container'>


<div className='homeleft'>
    <h2 className="animate-text">i'm dropper Jarvis</h2>



    </div>




  
  <div className='homeright'>
<div className='homerighth1'>
<h2>unleashing your  dropshipping store with Jarvis</h2>

</div>


<div className='hrightbutoom'>
  <button>take a tour </button>
</div>

</div>
























</div>




 
   
 </section>














 </>
  )
}

export default Home