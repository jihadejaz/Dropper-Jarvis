import React from 'react'
import { Route,  Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Comingsoon from './Comingsoon'
import Adspage from './Adspage'


function App() {
  return (
   <>
  
   <Header/>
   <Routes>
    <Route  path="/" element={<Home/> }/>
    <Route  path="coming" element={<Comingsoon/> }/>
    <Route  path="ads" element={<Adspage/> }/>

   </Routes>
   
   
   </>
  )
}

export default App