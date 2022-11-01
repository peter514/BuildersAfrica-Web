import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import pro1 from '../../assets/pro1.png'
import pro2 from '../../assets/pro2.jpg'
import pro3 from '../../assets/pro3.jpg'
import pro4 from '../../assets/pro4.jpg'
import pro5 from '../../assets/pro5.jpg'
import pro6 from '../../assets/pro6.jpg'
import pro7 from '../../assets/pro7.jpeg'
import pro8 from '../../assets/pro8.jpeg'
import pro9 from '../../assets/pro9.jpeg'
import pro10 from '../../assets/pro10.jpeg'
import { GrCart } from 'react-icons/gr'
import {GoLocation} from 'react-icons/go'
import {TbMessageCircle} from 'react-icons/tb'

function Products() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 3, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  }
  return (
    <div className="" id='products'>
      <div>
        <h1 className="font-bold text-2xl text-center mt-2">Products</h1>

      </div>
      <div className='font-bold uppercase ml-4  '>
        Hardware / suppliers
      </div>
      <Carousel autoPlay autoPlaySpeed={5000} infinite   responsive={responsive} className=" m-2 bg-white mb-10 ">
        <div className="bg-white shadow-2xl m-2 p-1 rounded-md ">
          <img src={pro1} alt="" className="h-[238px] w-full" />
          <div className='px-2'>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold "> Door </p>
              
            </div>
            <p className="my-3">
              Architecture Overview is intended to share conceptual overview of
              how React Native's internals work.
            </p>
            <hr className="bg-slate-200 py-px " />
            <div className="flex justify-between m-2">
              <div className='flex justify-center items-center gap-2'>
                <span><GoLocation size={20} color='green'/></span>
              <h1 className="text-gray-800  ">
                Kiambu
              </h1>
              </div>
              
              <div className='flex justify-center items-center gap-2'>
                <span><TbMessageCircle size={25} color='green'/></span>
              <h1 className="text-primary  ">
                Contact Now
              </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-2xl m-2 p-1 ">
          <img src={pro2} alt="" className="h-[238px] w-full" />
          <div className='px-2'>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold "> entrance Door</p>
              
            </div>
            <p className="my-3">
              Architecture Overview is intended to share conceptual overview of
              how React Native's internals work.
            </p>
            <hr className="bg-slate-200 py-px " />
            <div className="flex justify-between m-2">
              <div className='flex justify-center items-center gap-2'>
                <span><GoLocation size={20} color='green'/></span>
              <h1 className="text-gray-800  ">
                Kiambu
              </h1>
              </div>
              <div className='flex justify-center items-center gap-2'>
                <span><TbMessageCircle size={25} color='green'/></span>
              <h1 className="text-primary  ">
                Contact Now
              </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-2xl m-2 p-1 ">
          <img src={pro3} alt="" className="h-[238px] w-full" />
          <div className='px-2'>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold "> Locks</p>
              
            </div>
            <p className="my-3">
              Architecture Overview is intended to share conceptual overview of
              how React Native's internals work.
            </p>
            <hr className="bg-slate-200 py-px " />
            <div className="flex justify-between m-2">
              <div className='flex justify-center items-center gap-2'>
                <span><GoLocation size={20} color='green'/></span>
              <h1 className="text-gray-800  ">
                Kiambu
              </h1>
              </div>
              <div className='flex justify-center items-center gap-2'>
                <span><TbMessageCircle size={25} color='green'/></span>
              <h1 className="text-primary  ">
                Contact Now
              </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-2xl m-2 p-1 ">
          <img src={pro4} alt="" className="h-[238px] w-full" />
          <div className='px-2'>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold "> Toilet and Others</p>
              
            </div>
            <p className="my-3">
              Architecture Overview is intended to share conceptual overview of
              how React Native's internals work.
            </p>
            <hr className="bg-slate-200 py-px " />
            <div className="flex justify-between m-2">
              <div className='flex justify-center items-center gap-2'>
                <span><GoLocation size={20} color='green'/></span>
              <h1 className="text-gray-800  ">
                Kiambu
              </h1>
              </div>
              <div className='flex justify-center items-center gap-2'>
                <span><TbMessageCircle size={25} color='green'/></span>
              <h1 className="text-primary  ">
                Contact Now
              </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-2xl m-2 p-1 ">
          <img src={pro5} alt="" className="h-[238px] w-full" />
          <div className='px-2'>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold "> Bathroom Faucet and shower </p>
              
            </div>
            <p className="my-3">
              Architecture Overview is intended to share conceptual overview of
              how React Native's internals work.
            </p>
            <hr className="bg-slate-200 py-px " />
            <div className="flex justify-between m-2">
              <div className='flex justify-center items-center gap-2'>
                <span><GoLocation size={20} color='green'/></span>
              <h1 className="text-gray-800  ">
                Kiambu
              </h1>
              </div>
              <div className='flex justify-center items-center gap-2'>
                <span><TbMessageCircle size={25} color='green'/></span>
              <h1 className="text-primary  ">
                Contact Now
              </h1>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
      {/* Interior designs components start */}
      <div className='font-bold uppercase ml-4   '>
        Hardware 
      </div>
      <Carousel autoPlay autoPlaySpeed={5000} infinite   responsive={responsive} className=" m-2 bg-white ">
        <div className="bg-white shadow-2xl m-2 p-1 rounded-md ">
          <img src={pro6} alt="" className="h-[238px] w-full" />
          <div className='px-2'>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold ">Metal Bars </p>
              
            </div>
            <p className="my-3">
              Architecture Overview is intended to share conceptual overview of
              how React Native's internals work.
            </p>
            <hr className="bg-slate-200 py-px " />
            <div className="flex justify-between m-2">
              <div className='flex justify-center items-center gap-2'>
                <span><GoLocation size={20} color='green'/></span>
              <h1 className="text-gray-800  ">
                Kiambu
              </h1>
              </div>
              
              <div className='flex justify-center items-center gap-2'>
                <span><TbMessageCircle size={25} color='green'/></span>
              <h1 className="text-primary  ">
                Contact Now
              </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-2xl m-2 p-1 ">
          <img src={pro7} alt="" className="h-[238px] w-full" />
          <div className='px-2'>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold ">Cement </p>
              
            </div>
            <p className="my-3">
              Architecture Overview is intended to share conceptual overview of
              how React Native's internals work.
            </p>
            <hr className="bg-slate-200 py-px " />
            <div className="flex justify-between m-2">
              <div className='flex justify-center items-center gap-2'>
                <span><GoLocation size={20} color='green'/></span>
              <h1 className="text-gray-800  ">
                Kiambu
              </h1>
              </div>
              <div className='flex justify-center items-center gap-2'>
                <span><TbMessageCircle size={25} color='green'/></span>
              <h1 className="text-primary  ">
                Contact Now
              </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-2xl m-2 p-1 ">
          <img src={pro8} alt="" className="h-[238px] w-full" />
          <div className='px-2'>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold "> PVC pipes</p>
              
            </div>
            <p className="my-3">
              Architecture Overview is intended to share conceptual overview of
              how React Native's internals work.
            </p>
            <hr className="bg-slate-200 py-px " />
            <div className="flex justify-between m-2">
              <div className='flex justify-center items-center gap-2'>
                <span><GoLocation size={20} color='green'/></span>
              <h1 className="text-gray-800  ">
                Kiambu
              </h1>
              </div>
              <div className='flex justify-center items-center gap-2'>
                <span><TbMessageCircle size={25} color='green'/></span>
              <h1 className="text-primary  ">
                Contact Now
              </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-2xl m-2 p-1 ">
          <img src={pro9} alt="" className="h-[238px] w-full" />
          <div className='px-2'>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold ">Timber</p>
              
            </div>
            <p className="my-3">
              Architecture Overview is intended to share conceptual overview of
              how React Native's internals work.
            </p>
            <hr className="bg-slate-200 py-px " />
            <div className="flex justify-between m-2">
              <div className='flex justify-center items-center gap-2'>
                <span><GoLocation size={20} color='green'/></span>
              <h1 className="text-gray-800  ">
                Kiambu
              </h1>
              </div>
              <div className='flex justify-center items-center gap-2'>
                <span><TbMessageCircle size={25} color='green'/></span>
              <h1 className="text-primary  ">
                Contact Now
              </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-2xl m-2 p-1 ">
          <img src={pro10} alt="" className="h-[238px] w-full" />
          <div className='px-2'>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold ">Spade</p>
              
            </div>
            <p className="my-3">
              Architecture Overview is intended to share conceptual overview of
              how React Native's internals work.
            </p>
            <hr className="bg-slate-200 py-px " />
            <div className="flex justify-between m-2">
              <div className='flex justify-center items-center gap-2'>
                <span><GoLocation size={20} color='green'/></span>
              <h1 className="text-gray-800  ">
                Kiambu
              </h1>
              </div>
              <div className='flex justify-center items-center gap-2'>
                <span><TbMessageCircle size={25} color='green'/></span>
              <h1 className="text-primary  ">
                Contact Now
              </h1>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Products