import React, { useState, useEffect } from 'react';
import './product.css'
import { Link, NavLink } from 'react-router-dom'

function Products() {

  






  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  
  const closeModal = () => {
    setShowModal(false);
  };






  const [showDefault, setShowDefault] = useState(true);
  const [catshowDefault, catsetShowDefault] = useState(true);

  const amzaonDiv = () => {
    setShowDefault(!showDefault);
  };
         

  const categoridiv = () =>{
    catsetShowDefault(!catshowDefault);
  }





 
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
     <a className="fliterbutton" > <a    onClick={toggleModal}  className="modal-button fa fa-filter"> </a> </a>
  <input type='text' placeholder='Search ...' />
  <i class='fa fa-search'></i>
  </div>
     
      <div className='ada'>
<div className={`modal ${showModal ? 'show' : ''}`}>
<div className="productleft">
<div   className={`translatedDiv ${catshowDefault ? '' : 'slide-left'}`}  >
        {catshowDefault ? (
          <>
      <div  className={`translatedDiv ${showDefault ? '' : 'slide-left'}`} >
        {showDefault ? (
          <>
            <a className='closememu' ><a  onClick={closeModal} className="fa fa-times" ></a></a>

            <h1>product by Store</h1>
            <span className='adsline'><a></a> </span>
            <div className='productsocial'>
              <ul className='product-social-list'>
                <li className='product-social-item'>
                  <a className="amazon-trigger" onClick={amzaonDiv}>Amazon</a>
                </li>
                <li className='product-social-item'>
                  <a className="amazon-trigger" onClick={amzaonDiv}>ali Express</a>
                </li>

                <li>
               
                  <a className="amazon-trigger" onClick={amzaonDiv}>Daraz</a>
                
                </li>
              </ul>
            </div>
            <span className='flutline'><a></a> </span>
            <div className='fliter'>
              <div className='flittercat'>
                <h1>categories</h1>
                <div className='catsocial'>
             
                  <ul className='cat-social-list'>


                    
       <li><a className='checkname' onClick={categoridiv}> Shose</a></li>
    <li><a className='checkname'>Books</a></li>
    <li><a className='checkname'>Toys</a></li>
    <li><a className='checkname'>Electronics</a></li>
    <li><a className='checkname'>Clothing</a></li>
    <li><a className='checkname'>Home Decor</a></li>
    <li><a className='checkname'>Kitchenware</a></li>
    <li><a className='checkname'>Sports & Outdoors</a></li>
    <li><a className='checkname'>Beauty & Personal Care</a></li>
    <li><a className='checkname'>Health & Wellness</a></li>
    <li><a className='checkname'>Pet Supplies</a></li>
    <li><a className='checkname'>Stationery & Office Supplies</a></li>
    <li><a className='checkname'>Jewelry</a></li>
    <li><a className='checkname'>Gardening</a></li>
    <li><a className='checkname'>Automotive</a></li>
    <li><a className='checkname'>Baby & Toddler</a></li>
    <li><a className='checkname'>Crafts & Hobbies</a></li>
    <li><a className='checkname'>Electrical Appliances</a></li>
    <li><a className='checkname'>Furniture</a></li>
    <li><a className='checkname'>Movies & Music</a></li>
    <li><a className='checkname'>Video Games</a></li>
    <li><a className='checkname'>Art Supplies</a></li>
    <li><a className='checkname'>Fitness Equipment</a></li>
    <li><a className='checkname'>Party Supplies</a></li>
    <li><a className='checkname'>Travel Accessories</a></li>
    <li><a className='checkname'>Educational Toys</a></li>
    <li><a className='checkname'>Outdoor Furniture</a></li>
    <li><a className='checkname'>Musical Instruments</a></li>
    <li><a className='checkname'>Cookware</a></li>
    <li><a className='checkname'>Computer Accessories</a></li>
    <li><a className='checkname'>Board Games</a></li>
    <li><a className='checkname'>Camping Gear</a></li>
    <li><a className='checkname'>Party Decorations</a></li>
    <li><a className='checkname'>DIY Tools</a></li>
    <li><a className='checkname'>Puzzles</a></li>
    <li><a className='checkname'>Swimwear</a></li>
    <li><a className='checkname'>Cosmetics</a></li>
    <li><a className='checkname'>Watches</a></li>
        
                  </ul>
          
                
        
      </div>
              </div>
              
            </div>

          </>
        ) : null}
      </div>
      </>
        ) : null}
                </div>
      
      
      <div  className={`translatedDiv ${showDefault ?   'slide-left' : '' }`}>
        {!showDefault ? (
          <div  className='leftscoll'>
            <button  className="buttonofleftscolling" onClick={amzaonDiv}>
            Back to menu </button>      
<span className='flutlines'><a></a> </span>

<div style={{fontSize:'1rem'}}>

  <h1> Amazon</h1>
  
<h2 className='leftscolling'>electorics</h2>
        <h2  className='leftscolling'>clotgus</h2>
        <h2  className='leftscolling'>electorics</h2>
        <h2  className='leftscolling'>electorics</h2>
</div>
          </div>
        ) : null}



       
      </div>

        
 
      <div  className={`translatedDiv ${catshowDefault ?   'slide-left' : '' }`}>
        {!catshowDefault ? (
          <div className='leftscoll'>
            <button  className="buttonofleftscolling" onClick={categoridiv}>
            Back to menu </button>    
<span className='flutlines'><a></a> </span>

<div style={{fontSize:'1rem'}}>

   <h1> Clothes</h1>    
<h2  className='leftscolling'>Tanzeel clothes</h2>
<h2  className='leftscolling'>Tanzeel Khan clothes</h2>
<h2  className='leftscolling'>abbas clothes</h2>
<h2  className='leftscolling'>irtaza clothes</h2>
<h2  className='leftscolling'>syed clothes</h2>



</div>
          </div>
        ) : null}



       
      </div>


    </div>
    </div>
    

         
      
  
  
      
      <div className='proright'>
        
          
  
      <div className='prorightlinks'>
    <ul className='links-list'>
      
      <li><Link className='links'>Top Rate</Link></li>

      <li><Link className='links'>Price</Link></li>
      <li><Link className='links'>Recent Dropshipping</Link></li>
    </ul>
  </div>
  
  
  <span className='prorightline'><a></a> </span>
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
export default Products
