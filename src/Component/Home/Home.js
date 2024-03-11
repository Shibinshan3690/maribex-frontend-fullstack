import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Suggestion from './Suggestion';
import Story from './Story';
import  "../Home/Home.css";
import Posted from "../Home/Posted"

// import Login from './Component/Login/Login'

const Home = () => {
  return (
    <div>
           <Sidebar/>
           <section className='main-container'>
           <div className='inner-container'>
           <div className='left-section'>
           <Story/>
       
         <Posted/>
         
           </div>
           <div className='right-section'>
           <Suggestion/>
           </div>
           </div>
           </section>
         
       
    </div>
  )
}

export default Home
