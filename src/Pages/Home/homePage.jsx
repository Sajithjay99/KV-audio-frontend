import React from 'react'
import Header from '../../components/header'
import {Routes, Route} from "react-router-dom";
import Home from './Home'
import Contact from './Contact'
import Gallary from './Gallary'
import Items from './Items'
import Error from './Error'


function HomePage() {
  return (
    <>
        
       <Header/>

       <div className="h-[calc(100vh-100px)] w-full bg-yellow-200">

        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/gallary" element={<Gallary/>}/>
            <Route path="/items" element={<Items/>}/>
            <Route path="/*" element={<Error/>}/>

             
            
        </Routes>

        
       </div>


      
    </>
  )
}

export default HomePage
