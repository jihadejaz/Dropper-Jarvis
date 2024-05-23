import React, { useState, useEffect } from 'react';
import './adspage.css'
import { Link, NavLink } from 'react-router-dom'

function Adspage() {


  
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 699);
    };

    handleResize(); 

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
              </ul>
            </div>
          </div>
          <Link to="../login">
      
      <li><Link to="../login" className='link'> <a className='linkss'><i className="fa fa-user-circle"></i></a> </Link></li>
      </Link>
        </div>
      </header>
      

     

     


      <div className='sideimage'>
      <div className='sidenav' >
<img src="images/icon2.png" alt="Icon" />
        </div>
      </div>








<section className='adspages'>
   
    <div className='adssreach'>
<input type='text' placeholder='Search ...' />
<i class='fa fa-search'></i>
</div>
   
    <div className='ada'>

<div className='adsleft'>
       
    <h1>product by ads</h1>
    <span className='adslines'><a></a> </span>
    
    <div className='adssocial'>
  <ul className='social-list'>
    <li><i className="fa fa-facebook" aria-hidden="true"></i><span>Facebook</span></li>
    <li><i className="fa fa-instagram" aria-hidden="true"></i><span>Instagram</span></li>
    <li><i className="fa fa-snapchat-ghost" aria-hidden="true"></i><span>Snapchat</span></li>
    <li><i className="fa fa-twitter" aria-hidden="true"></i><span>Twitter</span></li>
  </ul>
</div>
<div>
    
</div>


    </div>
    <div className='adsright'>
      
        

    <div className='adsrightlinks'>
  <ul className='links-list'>
    <li><Link className='links' to='../topselling'>Top Selling</Link></li>
    <li><Link className='links'>Winner Products</Link></li>
    <li><Link className='links'>Recent Dropshipping</Link></li>
  </ul>
</div>

<span className='adsrightline'><a></a> </span>
<div className='rightscrolling'>

<section className='call'>

<div className='adsimgcard'>
      <img src="images/23.jpg" alt="" />
      <div className='addetails'>
      <div className='adsinfo'>
        <h1>Project1 Name</h1>
        <a>Upload: 27/3/2024</a>
      </div>
      <div className='adsinfoinocs'>
  
      
        <Link className='adsicons'>
        
      <a> <i className="fa fa-comment" aria-hidden="true"> </i>999 </a>
          
       
         </Link> 
         <Link className='adsicons'>
  
     <a>
        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
        999
     </a>    
         </Link>
         <Link className='adsicons'>
      <a>
      
        <i className="fa fa-share-alt" aria-hidden="true"></i>
        500
      </a>   
         </Link>
         
      </div>
    </div>
      </div>
      
   
      <div className='adsimgcard'>
      <img src="images/22.jpg" alt="" />
      <div className='addetails'>
      <div className='adsinfo'>
        <h1>Project1 Name</h1>
        <a>Upload: 27/3/2024</a>
      </div>
      <div className='adsinfoinocs'>
  
      
        <Link className='adsicons'>
        
      <a> <i className="fa fa-comment" aria-hidden="true"> </i>9000 </a>
          
       
         </Link> 
         <Link className='adsicons'>
  
     <a>
        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
        2000
     </a>    
         </Link>
         <Link className='adsicons'>
      <a>
      
        <i className="fa fa-share-alt" aria-hidden="true"></i>
        500
      </a>   
         </Link>
         
      </div>
    </div>
      </div>
      
      <div className='adsimgcard'>
      <img src="images/10.jpg" alt="" />
      <div className='addetails'>
      <div className='adsinfo'>
        <h1>Project1 Name</h1>
        <a>Upload: 27/3/2024</a>
      </div>
      <div className='adsinfoinocs'>
  
      
        <Link className='adsicons'>
        
      <a> <i className="fa fa-comment" aria-hidden="true"> </i>9000 </a>
          
       
         </Link> 
         <Link className='adsicons'>
  
     <a>
        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
        2000
     </a>    
         </Link>
         <Link className='adsicons'>
      <a>
      
        <i className="fa fa-share-alt" aria-hidden="true"></i>
        500
      </a>   
         </Link>
         
      </div>
    </div>
      </div>
      
      <div className='adsimgcard'>
      <img src="images/11.jpg" alt="" />
      <div className='addetails'>
      <div className='adsinfo'>
        <h1>Project1 Name</h1>
        <a>Upload: 27/3/2024</a>
      </div>
      <div className='adsinfoinocs'>
  
      
        <Link className='adsicons'>
        
      <a> <i className="fa fa-comment" aria-hidden="true"> </i>9000 </a>
          
       
         </Link> 
         <Link className='adsicons'>
  
     <a>
        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
        2000
     </a>    
         </Link>
         <Link className='adsicons'>
      <a>
      
        <i className="fa fa-share-alt" aria-hidden="true"></i>
        500
      </a>   
         </Link>
         
      </div>
    </div>
      </div>
      
      <div className='adsimgcard'>
      <img src="images/12.jpg" alt="" />
      <div className='addetails'>
      <div className='adsinfo'>
        <h1>Project1 Name</h1>
        <a>Upload: 27/3/2024</a>
      </div>
      <div className='adsinfoinocs'>
  
      
        <Link className='adsicons'>
        
      <a> <i className="fa fa-comment" aria-hidden="true"> </i>9000 </a>
          
       
         </Link> 
         <Link className='adsicons'>
  
     <a>
        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
        2000
     </a>    
         </Link>
         <Link className='adsicons'>
      <a>
      
        <i className="fa fa-share-alt" aria-hidden="true"></i>
        500
      </a>   
         </Link>
         
      </div>
    </div>
      </div>
      <div className='adsimgcard'>
      <img src="images/13.jpg" alt="" />
      <div className='addetails'>
      <div className='adsinfo'>
        <h1>Project1 Name</h1>
        <a>Upload: 27/3/2024</a>
      </div>
      <div className='adsinfoinocs'>
  
      
        <Link className='adsicons'>
        
      <a> <i className="fa fa-comment" aria-hidden="true"> </i>9000 </a>
          
       
         </Link> 
         <Link className='adsicons'>
  
     <a>
        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
        2000
     </a>    
         </Link>
         <Link className='adsicons'>
      <a>
      
        <i className="fa fa-share-alt" aria-hidden="true"></i>
        500
      </a>   
         </Link>
         
      </div>
    </div>
      </div>
      <div className='adsimgcard'>
      <img src="images/14.jpg" alt="" />
      <div className='addetails'>
      <div className='adsinfo'>
        <h1>Project1 Name</h1>
        <a>Upload: 27/3/2024</a>
      </div>
      <div className='adsinfoinocs'>
  
      
        <Link className='adsicons'>
        
      <a> <i className="fa fa-comment" aria-hidden="true"> </i>9000 </a>
          
       
         </Link> 
         <Link className='adsicons'>
  
     <a>
        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
        2000
     </a>    
         </Link>
         <Link className='adsicons'>
      <a>
      
        <i className="fa fa-share-alt" aria-hidden="true"></i>
        500
      </a>   
         </Link>
         
      </div>
    </div>
      </div>
    
  
      <div className='adsimgcard'>
      <img src="images/21.jpg" alt="" />
      <div className='addetails'>
      <div className='adsinfo'>
        <h1>Project1 Name</h1>
        <a>Upload: 27/3/2024</a>
      </div>
      <div className='adsinfoinocs'>
  
      
        <Link className='adsicons'>
        
      <a> <i className="fa fa-comment" aria-hidden="true"> </i>9000 </a>
          
       
         </Link> 
         <Link className='adsicons'>
  
     <a>
        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
        2000
     </a>    
         </Link>
         <Link className='adsicons'>
      <a>
      
        <i className="fa fa-share-alt" aria-hidden="true"></i>
        500
      </a>   
         </Link>
         
      </div>
    </div>
      </div>
    
  
      <div className='adsimgcard'>
      <img src="images/16.jpg" alt="" />
      <div className='addetails'>
      <div className='adsinfo'>
        <h1>Project1 Name</h1>
        <a>Upload: 27/3/2024</a>
      </div>
      <div className='adsinfoinocs'>
  
      
        <Link className='adsicons'>
        
      <a> <i className="fa fa-comment" aria-hidden="true"> </i>9000 </a>
          
       
         </Link> 
         <Link className='adsicons'>
  
     <a>
        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
        2000
     </a>    
         </Link>
         <Link className='adsicons'>
      <a>
      
        <i className="fa fa-share-alt" aria-hidden="true"></i>
        500
      </a>   
         </Link>
         
      </div>
    </div>
      </div>
    
  
      <div className='adsimgcard'>
      <img src="images/17.jpg" alt="" />
      <div className='addetails'>
      <div className='adsinfo'>
        <h1>Project1 Name</h1>
        <a>Upload: 27/3/2024</a>
      </div>
      <div className='adsinfoinocs'>
  
      
        <Link className='adsicons'>
        
      <a> <i className="fa fa-comment" aria-hidden="true"> </i>9000 </a>
          
       
         </Link> 
         <Link className='adsicons'>
  
     <a>
        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
        2000
     </a>    
         </Link>
         <Link className='adsicons'>
      <a>
      
        <i className="fa fa-share-alt" aria-hidden="true"></i>
        500
      </a>   
         </Link>
         
      </div>
    </div>
      </div>
    
  
      <div className='adsimgcard'>
      <img src="images/18.jpg" alt="" />
      <div className='addetails'>
      <div className='adsinfo'>
        <h1>Project1 Name</h1>
        <a>Upload: 27/3/2024</a>
      </div>
      <div className='adsinfoinocs'>
  
      
        <Link className='adsicons'>
        
      <a> <i className="fa fa-comment" aria-hidden="true"> </i>9000 </a>
          
       
         </Link> 
         <Link className='adsicons'>
  
     <a>
        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
        2000
     </a>    
         </Link>
         <Link className='adsicons'>
      <a>
      
        <i className="fa fa-share-alt" aria-hidden="true"></i>
        500
      </a>   
         </Link>
         
      </div>
    </div>
      </div>
    
  
      <div className='adsimgcard'>
      <img src="images/19.jpg" alt="" />
      <div className='addetails'>
      <div className='adsinfo'>
        <h1>Project1 Name</h1>
        <a>Upload: 27/3/2024</a>
      </div>
      <div className='adsinfoinocs'>
  
      
        <Link className='adsicons'>
        
      <a> <i className="fa fa-comment" aria-hidden="true"> </i>9000 </a>
          
       
         </Link> 
         <Link className='adsicons'>
  
     <a>
        <i className="fa fa-thumbs-up" aria-hidden="true"></i>
        2000
     </a>    
         </Link>
         <Link className='adsicons'>
      <a>
      
        <i className="fa fa-share-alt" aria-hidden="true"></i>
        500
      </a>   
         </Link>
         
      </div>
    </div>
      </div>
</section>
</div>


</div>



 





        

    </div>


</section>



   </>
  )
}

export default Adspage