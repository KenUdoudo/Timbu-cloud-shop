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
                <img src={ logo } className='w-[25px] lg:w-[132px]'/>
             </Link>

             <button onClick={toggleMenu} className='block md:hidden z-30'><HiOutlineMenu className="h-[25px] w-[25px]"/></button>

             <div className={`fixed top-0 right-0 h-full bg-[#e9e9e9] w-[75%] transform ${isOpen ? '-translate-x-0' : 'translate-x-full'} transition-transform duration-500 ease-in-out overflow-hidden`}>
                <div className='flex flex-col items-start gap-y-[20px] px-[20px] py-[20px]'>
                    <Link to="/" className='hover:text-[#e9e9e9] cursor-pointer transition-all duration-500 text-[20px] font-semibold'>Home</Link>
                    <Link to="/about" className='hover:text-[#e9e9e9] cursor-pointer transition-all duration-500 text-[20px] font-semibold'>About</Link>
                    <Link to="/events" className='hover:text-[#e9e9e9] cursor-pointer transition-all duration-500 text-[20px] font-semibold'>Events</Link>
                    <p className='hover:text-[#e9e9e9] cursor-pointer transition-all duration-500 text-[20px] font-semibold'>Library</p>
                    <p className='hover:text-[#e9e9e9] cursor-pointer transition-all duration-500 text-[20px] font-semibold'>QHub</p>
                    <div>
                        <p className='hover:text-[#e9e9e9] cursor-pointer transition-all duration-500 text-[20px] font-semibold'>Resources</p>

                    </div>
                    <Link to="/alumini" className='hover:text-[#e9e9e9] cursor-pointer transition-all duration-500 text-[20px] font-semibold'>Alumini</Link>
                    <p className='bg-[#1b6535] text-white py-[10px] px-[20px] cursor-pointer hover:bg-[#30854e] rounded-lg transition-all duration-500'>Contact Us</p>
                </div>
             </div>

            <Search />

            <div className='flex flex-row justify-between items-center gap-[45px]'>
                <Link to="/products">Products</Link>
                <Link to="/contactus">Contact Us</Link>
                <Link to="/mycart" className='bg-[#2972FF] flex items-center text-white gap-[10px] py-[5px] px-[8px] rounded-[8px]'><TbShoppingBag/>My Cart</Link>
            </div>
             
           </div>
        </div>
    )
}

export default Navbar;