import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/logob.png'

function LoginPage() {
  return (
    <div className='h-screen bg-gray-50'>
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

      {/* login form */}
       <div className={`flex flex-col justify-center items-center mt-[100px]`}>
          

          <form  className=' bg-slate-50 flex flex-col shadow-lg drop-shadow-lg m-2 pb-4 w-[90%] md:w-[60%] lg:w-[40%] ' >
             <p className='p-3 text-center text-[25px] font-bold text-xl text-primary'> Builders Africa </p>
              <p className='p-3 text-center text-lg font-semibold '>Login</p>


            <div className=' flex flex-col  justify-center items-center text-xl  p-3 w-full   md:w- gap-4'>
               
            
             <div className='flex flex-col gap-2 m-2 w-full'>
            <label> Email : </label>
            <input type="email" className='border p-2 ' placeholder='example@gmail.com' />

            </div>
             <div className='flex flex-col gap-2 m-2 w-full'>
            <label>Password :</label>
            <input type="password" className='border p-2 ' placeholder='please enter password' />

            </div>
            

            </div>
             {/* button div */}
            <div className= {`flex flex-col items-center` }>
              <button className='bg-primary p-3 text-white font-bold md:w-[200px]'> Login</button>

            </div>   
          
          </form>
          
       </div>
      {/* end login form */}
    </div>
  )
}

export default LoginPage