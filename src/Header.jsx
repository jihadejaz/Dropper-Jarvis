import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'


function Header() {
  return (
  
    <>
    
    <div className='sidenav'>
      
  <div className='sidenav-left'>
    <i className="fa fa-bars" aria-hidden="true"></i>
  </div>

  <div className='sidenav-center'>
    <img src="images/icon.jpg" alt="Icon" />
  </div>
</div>
    
    <header>
  <div className='header'>
  <div className='navheader'>
<div className='navbar'> 
 <img src="images/icon.jpg"/>
  <ul className='navul'>
      <li><Link className='link'> home</Link></li>
      <li><Link className='link'> help center</Link></li>
  </ul>
  </div>

  <div className='navbutton'>
<button>sign up</button>
</div>

</div>
  </div>


 
</header> </>
  )
}

export default Header