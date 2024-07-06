import logo from '../assets/Logo.svg';
import { HiOutlineMenu } from "react-icons/hi";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbShoppingBag } from "react-icons/tb";
import Search from './search';
const Navbar = () =>{
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="px-[40px] py-[20px]  w-full font-pop">
            <div className='flex flex-row justify-between items-center'>
             <Link to='/' className= 'cursor-pointer'>
                <img src={ logo } className='w-[25px] lg:w-[102px]'/>
             </Link>

             <button onClick={toggleMenu} className='block md:hidden z-30'><HiOutlineMenu className="h-[25px] w-[25px]"/></button>

             <div className={`fixed top-0 right-0 h-full bg-[#e9e9e9] w-[75%] transform ${isOpen ? '-translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out overflow-hidden`}>
                <div className='flex flex-col justify-between items-center gap-[45px]'>
                    <Link to="/products">Products</Link>
                    <Link to="/contactus">Contact Us</Link>
                    <Link to="/mycart" className='bg-[#2972FF] hover:bg-[#6893eb] flex items-center text-white gap-[10px] py-[5px] px-[8px] rounded-[8px]'><TbShoppingBag/>My Cart</Link>
                </div>  
             </div>

            <Search />

            <div className='flex flex-row justify-between items-center gap-[25px] text-nowrap'>
                <Link to="/products">Products</Link>
                <Link to="/contactus">Contact Us</Link>
                <Link to="/mycart" className='bg-[#2972FF] hover:bg-[#6893eb] flex items-center text-white gap-[10px] py-[5px] px-[8px] rounded-[8px]'><TbShoppingBag/>My Cart</Link>
            </div>
             
           </div>
        </div>
    )
}

export default Navbar;