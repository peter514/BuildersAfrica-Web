import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.png'
import p3 from '../../assets/p3.jpeg'
import p4 from '../../assets/p4.jpg'
import p5 from '../../assets/p5.jpeg'
import interior1 from '../../assets/interior1.jpg'
import interior2 from '../../assets/interior2.jpg'
import interior3 from '../../assets/interior3.jpg'
import interior4 from '../../assets/interior4.png'
import interior5 from '../../assets/interior5.jpg'
import { GrCart } from 'react-icons/gr'
import {GoLocation} from 'react-icons/go'
import {TbMessageCircle} from 'react-icons/tb'

function Services() {
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
    <div className="" id='services'>
      <div>
        <h1 className="font-bold text-2xl text-center mt-2">Services</h1>

      </div>
      <div className='font-bold uppercase ml-4  '>
        Architecture Planning and Schematic Design Works
      </div>
      <Carousel autoPlay autoPlaySpeed={5000} infinite   responsive={responsive} className=" m-2 bg-white mb-10 ">
        <div className="bg-white shadow-2xl m-2 p-1 rounded-md ">
          <img src={p1} alt="" className="h-[238px] w-full" />
          <div className='px-2'>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold "> Signature Hotel Schematic design</p>
              
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
          <img src={p2} alt="" className="h-[238px] w-full" />
          <div className='px-2'>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold "> Signature Hotel Schematic design</p>
              
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
          <img src={p3} alt="" className="h-[238px] w-full" />
          <div className='px-2'>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold "> Signature Hotel Schematic design</p>
              
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
          <img src={p4} alt="" className="h-[238px] w-full" />
          <div className='px-2'>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold "> Signature Hotel Schematic design</p>
              
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
          <img src={p5} alt="" className="h-[238px] w-full" />
          <div className='px-2'>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold "> Signature Hotel Schematic design</p>
              
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
       Interior Design Work
      </div>
      <Carousel autoPlay autoPlaySpeed={5000} infinite   responsive={responsive} className=" m-2 bg-white ">
        <div className="bg-white shadow-2xl m-2 p-1 rounded-md ">
          <img src={interior1} alt="" className="h-[238px] w-full" />
          <div className='px-2'>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold ">Deep White Design | Resetting the spatial order </p>
              
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
          <img src={interior2} alt="" className="h-[238px] w-full" />
          <div className='px-2'>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold "> Deep White Design | Resetting the spatial order </p>
              
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
          <img src={interior3} alt="" className="h-[238px] w-full" />
          <div className='px-2'>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold "> Deep White Design | Resetting the spatial order </p>
              
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
          <img src={interior4} alt="" className="h-[238px] w-full" />
          <div className='px-2'>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold "> Deep White Design | Resetting the spatial order </p>
              
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
          <img src={interior5} alt="" className="h-[238px] w-full" />
          <div className='px-2'>
            <div className="flex flex-row justify-between items-center mt-2">
              <p className="text-lg font-bold "> Deep White Design | Resetting the spatial order </p>
              
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

export default Services