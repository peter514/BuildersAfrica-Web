import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import BuyerDashboard from './pages/Dashboard/BuyerDashboard'
import DesignServices from './pages/Dashboard/DesignServices'
import Hardware from './pages/Dashboard/Hardware'
import Home from './pages/Dashboard/Home'
import PostJob from './pages/Dashboard/PostJob'
import Supplier from './pages/Dashboard/Supplier'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'



function App() {
  

  return (
    // routes 
    <div >
      <Router>
      <Routes>
        <Route  
        path="/"
        element={<LandingPage/>}
        />
        <Route  
        path="login"
        element={<LoginPage/>}
        />
        <Route  
        path="register"
        element={<RegisterPage/>}
        />
        

        {/* dashboard Routes */}
        <Route path="dashboard" element={<BuyerDashboard/>} >
          <Route index element= {<Home/>} />
          <Route
            path='home'
            index element ={<Home/>}
          />
           <Route  
        path="suppliers"
        element={<Supplier/>}
        />
        <Route  
        path="design-services"
        element={<DesignServices/>}
        />
        <Route  
        path="post-job"
        element={<PostJob/>}
        />
        <Route  
        path="hardware"
        element={<Hardware/>}
        />

        </Route>



      </Routes>


      </Router>

      
    </div>
  )
}

export default App
