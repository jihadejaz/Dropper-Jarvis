import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Comingsoon from './Comingsoon'
import Adspage from './Adspage'
import Loginpage from './Loginpage'
import Topselling from './Topselling'
import Products from './Products'


function App() {
  return (
   <>
  



  
   <Routes>
    <Route  path="/" element={<Home/> }/>
    <Route  path="/products" element={<Products/> }/>
    <Route  path="ads/" element={<Adspage/> }/>
    <Route path='/login' element={<Loginpage/>}/>
  <Route path='/topselling' element={<Topselling/>}/>
   </Routes>
   
   
   </>
  )
}

export default App