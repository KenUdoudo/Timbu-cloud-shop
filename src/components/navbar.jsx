import logo from "../assets/Logo.svg";
import { CgMenuLeft } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TbShoppingBag } from "react-icons/tb";
import Search from "./search";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { PiCaretDownLight } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";
import { CartContext } from '../pages/Cartcontext';
import { useContext } from 'react';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { cart } = useContext(CartContext);
  return (
    <div className="px-[20px] md:px-[40px] py-[20px]  w-full font-pop">
      <div className="flex flex-row justify-between items-center">
        <button onClick={toggleMenu} className="block lg:hidden z-30">
          
          {isOpen ? <IoCloseOutline className="h-[25px] w-[25px]" /> : <CgMenuLeft className="h-[25px] w-[25px]" />}
          
        </button>
        <Link to="/" className="cursor-pointer">
          <img src={logo} className="w-[90px] lg:w-[102px]" />
        </Link>
        <div className="lg:hidden relative">
        <Link
            to="/mycart"
            className="bg-[#2972FF] hover:bg-[#6893eb] lg:hidden flex items-center text-white gap-[6px] py-[5px] px-[8px] rounded-[8px]"
          >
            <TbShoppingBag />
            My Cart
          </Link>
          <p className="bg-[#2972FF] border-[2px] border-white w-[20px] h-[20px] flex justify-center items-center rounded-full text-[10px] top-[-7px] right-[-7px] absolute text-white">{cart.length}</p>
          </div>
        <div
          className={`fixed top-0 left-0 h-full z-20 bg-white w-[75%] md:w-[50%] transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500 ease-in-out overflow-hidden`}
        >
          <div className="flex flex-col justify-between items-start pt-[60px] pl-[20px] gap-[16px]">
          <div className="flex flex-row items-center w-[250px] text-[12px] h-[42px] border bg-white border-[#818181] rounded-[12px]">
              <CiSearch className="flex-shrink-0 ml-[10px]" />
              <input
                type="text"
                className="w-full py-2 ml-[10px] focus:outline-none"
                placeholder="Search for all accessories"
              />
            </div>
            <p className="flex gap-[10px] items-center text-[12px]">All Categories <PiCaretDownLight className="w-[20px] h-[20px]"/></p>
            <Link to="/notfound" className="text-[12px]">Products</Link>
            <Link to="/notfound" className="text-[12px]">Contact Us</Link>
            
            <p className="mt-[16px] text-[12px] text-[#696969]">SOCIAL</p>
            <p className="text-[12px]">X</p>
            <p className="text-[12px]">Facebook</p>
            <p className="text-[12px]">Instagram</p>
          </div>
        </div>

        <Search />

        <div className="hidden lg:flex flex-row justify-between items-center gap-[10px] lg:gap-[25px] text-nowrap">
          <Link to="/notfound">Products</Link>
          <Link to="/notfound">Contact Us</Link>
          <div className="relative">
        <Link
            to="/mycart"
            className="bg-[#2972FF] hover:bg-[#6893eb] flex items-center text-white gap-[6px] py-[5px] px-[8px] rounded-[8px]"
          >
            <TbShoppingBag />
            My Cart
          </Link>
          <p className="bg-[#2972FF] border-[2px] border-white w-[20px] h-[20px] flex justify-center items-center rounded-full text-[10px] top-[-7px] right-[-7px] absolute text-white">{cart.length}</p>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Navbar;
