import React from 'react'
import './loginpage.css'

function Loginpage() {
  return (
    <>
    <section className='loginpage'>
        <div className='loginimg'>
          <div className='loginicon'>

    <img src="images/icon2.png" alt="" />
          </div>
          <div className='logintitle'>
          <h1>Sign in to Jarvis</h1>
          </div>

          <div className='logininput'>
            <div className='loginpass'>

            <div  className='emailpass'>
              <h2> username or email address </h2>
            <input type="text"  />
            </div>

          <div  className='loginpassword'>
            <div className='loginpasswordtitle'>
            <h2> password</h2>
              <h2> forget password?</h2>
            </div>
              

            <input type="text"  />
            </div>
          
            <div  className='buttonpass'>
            
             <button> sign up </button>
            </div>


            <div class='signupwithgoogle'>
    <button class='goolgebutton'>
        <i class="fa fa-google" aria-hidden="true"></i>
        <div class='googletitle'>Continue with Google</div>
    </button>
</div>
          </div>


              
            </div>
           
        </div>

    </section>
    
    </>
  )
}

export default Loginpage