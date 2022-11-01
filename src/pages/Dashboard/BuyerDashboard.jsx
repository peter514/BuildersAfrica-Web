import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Logo from '../../assets/logob.png'
import avatar1 from '../../assets/avatar1.jpg'
import { FaBars } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'

import { MdClose } from 'react-icons/md'
import { useState } from 'react'

function BuyerDashboard() {
  const [professionalServices, setProfessionalServices] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)
  return (
    <div className=" h-[100vh] ">
      {/* Nav bar here */}
      <div className=" flex flex-row p-2 justify-between bg-white shadow-md fixed top-0 right-0 left-0 z-10   ">
        <div className="flex justify-center items-center">
          <div className="mx-3 md: ">
            <FaBars size={25} onClick={()=>{setMobileMenu(!mobileMenu)}} className="md:hidden" />
          </div>
          <img src={Logo} alt="logo" className="h-[80px] w-[120px]" />
        </div>
        <div className="flex justify-center items-center pr-8  gap-4">
          <h1>
            {' '}
            <img
              src={avatar1}
              alt="avatar"
              className=" h-[50px] w-[60px] "
            />{' '}
          </h1>
          <h1>
            <FiLogOut size={30} />
          </h1>
        </div>
      </div>
      {/*  navbar ends here */}
      {/* dashboard starts here */}
      <div className=" flex mt-[90px] ">

        {/* Side bar starts */}
        <div className= 'hidden md:flex flex-col gap-1 bg-primary text-white text-[20px]  h-[100vh] w-[350px] ' >
          <Link to="/dashboard/home" className="p-2 hover:bg-tertiary">
            Home
          </Link>

          <Link
            to="design-services"
            className="p-2 hover:bg-tertiary"
            onClick={() => {
              setProfessionalServices(!professionalServices)
            }}
          >
            Professional Service
          </Link>
          <ul
            className={
              professionalServices ? 'flex flex-col text-[25px]' : 'hidden'
            }
          >
            <li className="pl-7 hover:bg-tertiary">Project Managers</li>
            <li className="pl-7 hover:bg-tertiary">Engineering</li>
            <li className="pl-7 hover:bg-tertiary">Quantity Survayers</li>
            <li className="pl-7 hover:bg-tertiary">Building Contractors</li>
            <li className="pl-7 hover:bg-tertiary">SubContractors</li>
          </ul>
          <Link to="/dashboard/suppliers" className="p-2 hover:bg-tertiary">
            Supplier
          </Link>
          <Link to="post-job" className="p-2 hover:bg-tertiary">
            Post Job/ Requirement
          </Link>
          <Link to="hardware" className="p-2 hover:bg-tertiary">
            Hardware
          </Link>
        </div>
        {/* mobile menu  */}


              <div  className={`
        md:hidden bg-primary flex flex-col text-white font-bold pb-4 z-[999] fixed w-[60%] h-full  
        duration-500 ${mobileMenu ? "left-0" : "left-[-100%]"}
        `}>
          <Link to="/dashboard/home" className="p-2 hover:bg-tertiary" onClick={()=>{setMobileMenu(!mobileMenu)}}>
            Home
          </Link>

          <Link
            to="design-services"
            className="p-2 hover:bg-tertiary"
            onClick={()=>{setMobileMenu(!mobileMenu)}}
          >
            Professional Service
          </Link>
          <Link to="post-job" className="p-2 hover:bg-tertiary" onClick={()=>{setMobileMenu(!mobileMenu)}}>
            Post Job/ Requirement
          </Link>
          <Link to="hardware" className="p-2 hover:bg-tertiary" onClick={()=>{setMobileMenu(!mobileMenu)}}>
            Hardware
          </Link>
        </div>
        {/* main content area */}
        <div className='w-[95%] overflow-y-auto h-[100vh] '>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default BuyerDashboard
