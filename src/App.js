
// import {BrowserRouter, Route, Routes}  from"react-router-dom"
// import Login from './Component/Login'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Component/Login/Login'
import Registration from './Component/Registration/Registration'
import Home from './Component/Home/Home'
import { Createpost } from './Component/CreatePost/Createpost'
import Profail from './Component/profail/Profail.js'



const App = () => {
  return (
    <div> 
        
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
          <Route path="/createPost" element={<Createpost/>}></Route>
          <Route path='/profail'  element={<Profail/>}></Route>
          
        </Routes>
        </BrowserRouter>
        
    </div>
  )
}

export default App
