import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginPage'
import HomeLayout from './Components/HomeLayout';
import HomePage from './Pages/HomePage';



const AppRoute = () => {  
  return (
      <Router>
          <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='home' element={<HomeLayout />}>
        <Route index element={<HomePage />}/>
      
      
      </Route>
          </Routes>
   </Router>
  )
}

export default AppRoute
