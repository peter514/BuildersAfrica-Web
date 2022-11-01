import React, {useState, useEffect} from "react";
import Logo from "../../assets/logob.png";
import { Link as LinkS} from "react-scroll";
import { FaBars } from "react-icons/fa";
import { Link as LinkR} from "react-router-dom";
import { MdClose } from "react-icons/md";

function TopNavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [y, setY] = useState(window.scrollY);

    const toggle = () => (setIsOpen(!isOpen));

    useEffect(() => {
        window.addEventListener("scroll", () => setY(window.scrollY));
        return () => {
          window.removeEventListener("scroll", () => setY(window.scrollY));
        };
      }, [y]);

  return (
    <div className=" z-50 fixed  bg-white w-full top-0 left-0 ">
      <div className={`flex justify-between shadow-md flex-row  ${y > 100 ? "h-[60px]": "h-[80px]"} `}>
        {/* logo */}
        <div>
          <img src={Logo} alt="logo" className="h-[80px] w-[120px]" />
        </div>
        <div className="hidden md:flex pt-4 font-bold">
          <ul className="flex flex-row gap-14 ">
            <li className="hover:text-green-700">
              <LinkS
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Home
              </LinkS>
            </li>
            <li className="hover:text-green-700">
              <LinkS
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Services
              </LinkS>
            </li>
            <li className=" hover:text-green-700">
              <LinkS
                activeClass="active"
                to="products"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Products
              </LinkS>
            </li>

            <li className="hover:text-green-700">
              <LinkS
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Contact
              </LinkS>
            </li>
          </ul>
        </div>
        <div className=" pt-4">
          <ul className="flex flex-row gap-3 pr-4">
            <li className="font-bold hover:underline  hover: ">
              <LinkR to="/dashboard">Log In</LinkR>
            </li>
            <li className="">
              <LinkR
                to="/"
                className="rounded-md bg-green-700 px-4 py-1 text-white"
              >
                Sign Up
              </LinkR>
            </li>
            <li className=" px-2 md:hidden">
                {
                    isOpen ? 
                    <MdClose onClick={toggle} size={24} /> :
                    <FaBars onClick={toggle} size={24} /> 

                }
            </li>
          </ul>
        </div>
      </div>
      {/* mobile sidebar */}
      <div   className={`
        md:hidden bg-primary text-white font-bold pb-4 z-30 fixed w-[60%] h-full  
        duration-500 ${isOpen ? "right-0" : "right-[-100%]"}
        `}>
        <ul className="flex flex-col gap-8 text-center ">
          <li className="hover:text-green-700  pt-3">
            <LinkS
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-80}
              className="cursor-pointer"
            >
              Home
            </LinkS>
          </li>
          <li className="hover:text-green-700">
            <LinkS
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              offset={-80}
            >
              Services
            </LinkS>
          </li>
          <li className=" hover:text-green-700">
            <LinkS
              activeClass="active"
              to="products"
              spy={true}
              smooth={true}
              offset={-80}
            >
              Products
            </LinkS>
          </li>

          <li className="hover:text-green-700">
            <LinkS
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
            >
              Contact
            </LinkS>
          </li>
        </ul>
      </div>
      {/* end of mobile sidebar */}
    </div>
  );
}

export default TopNavBar;
