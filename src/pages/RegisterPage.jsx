import React, { useState } from 'react'
import { Link  } from 'react-router-dom'
import {Link as LinkS } from 'react-scroll'
import Logo from '../assets/logob.png'
// icons imports 
import { GrCart } from 'react-icons/gr'
 import {MdOutlineDesignServices} from 'react-icons/md'



function RegisterPage() {
  const [clientForm, setClientform] =useState(false)
   const [professionalForm, setProfessionalform] =useState(false)

  return (
    <div className='h-screen bg-gray-50  '>
      {/* nav */}
      <div className='flex flex-row bg-white justify-between shadow-md px-8 sticky top-0 ' >
        <div>
          <img src={Logo} alt="logo" className="h-[80px] w-[120px]" />
        </div>
        <div className=" pt-4">
          <ul className="flex flex-row gap-4 pr-4">
            <li className="font-bold hover:underline  hover: ">
              <Link to="/login">LogIn</Link>
            </li>
            <li className="">
              <Link
                to="/register"
                className="rounded-md bg-green-700 px-4 py-1 text-white"
              >
                Sign Up
              </Link>
            </li>
            
          </ul>
        </div>


      </div>      
      {/* nav end */}

       {/*start of reg component  */}
       <div className='bg-white my-5 mx-[10px] p-4  md:mx-[100px] md:p-8 overflow-y-auto'>
        <h1 className='text-center font-bold text-xl'> Register/ Create Account </h1>
        
        <div>
          <div className='font-semibold'>
        <p >Please tell me what you need</p>
        <p>Welcome to Builders Africa, please choose the option that best suits your intentions</p>
          </div>
       
          {/* the select account type components */}
          <div className='flex  flex-col  mt-4 md:flex-row gap-3'>
            <LinkS to="Client"
            
                spy={true}
                smooth={true}
                offset={-80}
            >
            
            <div className='bg-gray-100 shadow-md p-4 flex flex-col justify-center items-center gap-2'
            onClick={(e)=>{ setClientform(!clientForm);
            setProfessionalform(false)
            }}
            >
              <span className='text-2xl p-4'><GrCart size={80} /></span>
              <button className='font-bold p-2 rounded-sm text-center bg-primary text-white '>FOR BUYER </button>
              <p>I have requirements for building & furnishing materials.</p>
              <p>I have requirements for interior design/ architectural design/ glass curtain walls / steel structure design services.</p>
              <p>I have a general building work looking for quality service providers</p>
               
            </div>
            </LinkS>
            <LinkS
            to="Professional"
            
                spy={true}
                smooth={true}
                offset={-80} 
            
            >
            <div  className='bg-gray-100 shadow-md p-4 flex flex-col justify-center items-center gap-2'
            onClick={(e)=>{setProfessionalform(!professionalForm);
            setClientform(false);
            }}
            >
              <span className='text-2xl p-4'><MdOutlineDesignServices size={80} /></span>
              <button className='font-bold p-2 rounded-sm text-center bg-primary text-white '>FOR SERVICE PROVIDER </button>
              <p>I want to find the latest desig cases</p>
              <p>I can provide interior design/ architectural design/ glass curtain walls / steel structure design services.</p>
              <p>I can supply building & furnishing materials</p>

            </div>
            </LinkS>
            
            

          </div>
          {/* end of select component */}
        </div>
        {/* start of reg forms  */}

        {/* buyer form start */}
        <div id='Client'>
            <div   className={clientForm? `flex flex-col justify-center items-center my-4  `: `hidden`}>
          

          <form   className=' bg-slate-50 flex flex-col m-2 pb-4 w-full md:w-[90%] lg:w-[80%] shadow-md drop-shadow-lg  ' >
             <p className='p-3 text-center text-lg font-bold text-primary'>Join Builders Africa Now</p>
              <p className='p-3 text-center'>Client Form</p>


            <div className=' flex flex-col  md:grid md:grid-cols-2 lg:grid lg:grid-cols-3  justify-center items-center text-xl  p-3 w-full   md:w- gap-2'>
               <div className='flex flex-col gap-2 m-2 w-full'>
            <label> Name:</label>
            <input type="text" className='border p-2' placeholder='Name.' />

            </div>
            <div className='flex flex-col gap-2 m-2 w-full'>
            <label> Mobile Number:</label>
            <input type="number" className='border p-2 ' placeholder='Mobile no.' />

            </div>
             <div className='flex flex-col gap-2 m-2 w-full'>
            <label> Email : </label>
            <input type="email" className='border p-2 ' placeholder='example@gmail.com' />

            </div>
             <div className='flex flex-col gap-2 m-2 w-full'>
            <label>Password :</label>
            <input type="password" className='border p-2 ' placeholder='please enter password' />

            </div>
            <div className='flex flex-col gap-2 m-2 w-full'>
            <label>Confirm Password :</label>
            <input type="password" className='border p-2 ' placeholder='please confirm password' />

            </div>

            </div>
             {/* button div */}
            <div className= {`flex flex-col items-center` }>
              <button className='bg-primary p-3 text-white font-bold md:w-[200px]'> Submit</button>

            </div>   
          
          </form>
          
       </div>
        </div>
        
       {/* buyer form end */}

       {/* seller form start */}
       <div id='Professional'>
        <div className={professionalForm ? `flex flex-col justify-center items-center my-4`: `hidden`}>
          

          <form  className=' bg-slate-50 flex flex-col m-2 pb-4 w-full md:w-[90%] lg:w-[80%] shadow-md drop-shadow-lg ' >
             <p className='p-3 text-center text-lg font-bold text-primary'>Join Builders Africa Now</p>
             <p className='p-3 text-center'>Service Provider</p>


            <div className=' flex flex-col  md:grid md:grid-cols-2 lg:grid lg:grid-cols-3  justify-center items-center text-xl  p-3 w-full   md:w- gap-2'>
               <div className='flex flex-col gap-2 m-2 w-full'>
            <label> Name:</label>
            <input type="text" className='border p-2' placeholder='Name.' />

            </div>
            <div className='flex flex-col gap-2 m-2 w-full'>
            <label> Mobile Number:</label>
            <input type="number" className='border p-2 ' placeholder='Mobile no.' />

            </div>
             <div className='flex flex-col gap-2 m-2 w-full'>
            <label> Email : </label>
            <input type="email" className='border p-2 ' placeholder='example@gmail.com' />

            </div>
            <div className='flex flex-col gap-2 m-2 w-full'>
            <label> Select multiple identities that match your business: </label>
              <select name="" id="" className='p-2 border'>
                <option value="">Select</option>
                <option value="">Architect / plan Design</option>
                <option value="">Engineering(civil, structural etc) </option>
                <option value="">Quantity Survay</option>
                <option value="">Building Contractor</option>
                <option value="">Subcontractor-plumber, electrician, interior Designer, Roofing specialist</option>
              </select>
            </div>
             <div className='flex flex-col gap-2 m-2 w-full'>
            <label>Password :</label>
            <input type="password" className='border p-2 ' placeholder='please enter password' />

            </div>
            <div className='flex flex-col gap-2 m-2 w-full'>
            <label>Confirm Password :</label>
            <input type="password" className='border p-2 ' placeholder='please confirm password' />

            </div>

            </div>
             {/* button div */}
            <div className='flex flex-col items-center'>
              <button className='bg-primary p-3 text-white font-bold md:w-[200px]'> Submit</button>

            </div>   
          
          </form>
          
       </div>
       </div>
       {/* seller form end */}

       </div>


    </div>
  )
}

export default RegisterPage