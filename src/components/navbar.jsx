import logo from "../assets/Logo.svg";
import { CgMenuLeft } from "react-icons/cg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { TbShoppingBag } from "react-icons/tb";
import Search from "./search";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="px-[20px] md:px-[40px] py-[20px]  w-full font-pop">
      <div className="flex flex-row justify-between items-center">
        <button onClick={toggleMenu} className="block lg:hidden z-30">
          <CgMenuLeft className="h-[25px] w-[25px]" />
        </button>
        <Link to="/" className="cursor-pointer">
          <img src={logo} className="w-[90px] lg:w-[102px]" />
        </Link>
        <div className="relative">
        <Link
            to="/mycart"
            className="bg-[#2972FF] hover:bg-[#6893eb] md:hidden flex items-center text-white gap-[6px] py-[5px] px-[8px] rounded-[8px]"
          >
            <TbShoppingBag />
            My Cart
          </Link>
          <p className="bg-[#2972FF] border-[2px] border-white p-[3px] rounded-full text-[8px] absolute">5</p>
          </div>
        <div
          className={`fixed top-0 right-0 h-full z-20 bg-[#e9e9e9] w-[75%] md:w-[50%] transform ${
            isOpen ? "-translate-x-0" : "translate-x-full"
          } transition-transform duration-500 ease-in-out overflow-hidden`}
        >
          <div className="flex flex-col justify-between items-center py-[40px] gap-[25px]">
            <Link to="/products">Products</Link>
            <Link to="/contactus">Contact Us</Link>
            <Link
              to="/mycart"
              className="bg-[#2972FF] hover:bg-[#6893eb] flex items-center text-white gap-[10px] py-[5px] px-[8px] rounded-[8px]"
            >
              <TbShoppingBag />
              My Cart
            </Link>
            <div className="flex flex-row items-center w-[250px] text-[8px] h-[42px] border bg-white border-[#2972FF] rounded-[12px]">
              <CiSearch className="flex-shrink-0 ml-[10px]" />
              <input
                type="text"
                className="w-full py-2 ml-[10px] focus:outline-none"
                placeholder="Search for all accessories"
              />
              <select className="px-[10px] focus:outline-none hidden lg:block">
                <option>
                  All Categories
                  <RiArrowDropDownLine />
                </option>
              </select>
              <button className="h-full px-[20px] bg-[#2972FF] text-white rounded-r-[12px]">
                Search
              </button>
            </div>
          </div>
        </div>

        <Search />

        <div className="hidden lg:flex flex-row justify-between items-center gap-[10px] lg:gap-[25px] text-nowrap">
          <Link to="/products">Products</Link>
          <Link to="/contactus">Contact Us</Link>
          
        </div>

        
      </div>
    </div>
  );
};

export default Navbar;
