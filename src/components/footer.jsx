import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import gp from '../assets/gp.png';
import app from '../assets/app.png';
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="mt-[30px]">
            <div className="w-full py-[20px] px-[20px] md:px-[40px] bg-[#2972FF] flex flex-col gap-y-[10px] md:flex-row justify-between items-center font-pop">
                <p className="text-white text-[17px]">Subscribe to our newsletter to get updates on our latest offers!</p>
                <div className="flex flex-col md:flex-row justify-between items-center gap-y-[10px] gap-x-[20px] w-full md:w-auto">
                    <input type="email" placeholder="Enter your Email Address" className="py-[10px] pl-[20px] pr-[60px] text-[13px] rounded-[8px] w-full md:w-auto"/>
                    <p className="bg-[#ffbaba] text-[13px] py-[10px] px-[20px] font-semibold rounded-[8px] cursor-pointer w-full md:w-auto text-center">Subscribe</p>
                </div>
            </div>

            <div className="px-[20px] md:px-[40px] flex flex-row justify-between mt-[50px] gap-x-[40px] font-inter">
                <div className="flex flex-col md:flex-row justify-between gap-y-[20px] gap-x-[90px]">
                    <div className="flex flex-col gap-[8px]">
                        <p className="font-semibold text-[14px] mb-[2px]">Let Us Help You</p>
                        <p className="text-[#3C4859] text-[13px] cursor-pointer">Accessibility Statement</p>
                        <p className="text-[#3C4859] text-[13px] cursor-pointer">Your Orders</p>
                        <p className="text-[#3C4859] text-[13px] cursor-pointer">Returns & Replacements</p>
                        <p className="text-[#3C4859] text-[13px] cursor-pointer">Shipping Rates & Policies</p>
                        <p className="text-[#3C4859] text-[13px] cursor-pointer">Refund and Returns Policy</p>
                        <p className="text-[#3C4859] text-[13px] cursor-pointer">Privacy Policy</p>
                        <p className="text-[#3C4859] text-[13px] cursor-pointer">Terms and Conditions</p>
                        <p className="text-[#3C4859] text-[13px] cursor-pointer">Cookie Settings</p>
                        <p className="text-[#3C4859] text-[13px] cursor-pointer">Help Center</p>
                    </div>
                    <div className="flex flex-col gap-[8px]">
                        <p className="font-semibold text-[14px] mb-[2px]">About</p>
                        <p className="text-[#3C4859] text-[13px] cursor-pointer">Contact Us</p>
                        <p className="text-[#3C4859] text-[13px] cursor-pointer">Careers</p>
                        <p className="text-[#3C4859] text-[13px] cursor-pointer">Blogs</p>
                        <p className="text-[#3C4859] text-[13px] cursor-pointer">Customers Reviews</p>
                        <p className="text-[#3C4859] text-[13px] cursor-pointer">FAQs</p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-[40px]">
                    <div className="flex flex-col gap-[8px]">
                        <p className="font-semibold text-[14px] mb-[2px]">Support</p>
                        <p className="text-[#3C4859] text-[13px] cursor-pointer">Showrooms</p>
                        <p className="text-[#3C4859] text-[13px] cursor-pointer">Customer Service</p>
                        <p className="text-[#3C4859] text-[13px] cursor-pointer">Affiliates</p>
                        <p className="text-[#3C4859] text-[13px] cursor-pointer">After Service Sale</p>
                    </div>
                    <div className="flex flex-col gap-[40px] md:gap-[20px]">
                        <div>
                            <p className="text-[#3C4859] text-[13px]">Follow us on social media:</p>
                            <div className="flex flex-row justify-start items-center gap-[10px] mt-[8px]">
                                <div className="bg-[#1e293b] w-[25px] h-[25px] p-[6px] flex justify-center items-center rounded-full"><FaTwitter className="text-white"/></div>
                                <div className="bg-[#1e293b] w-[25px] h-[25px] p-[6px] flex justify-center items-center rounded-full"><FaFacebookF className="text-white"/></div>
                                <div className="bg-[#1e293b] w-[25px] h-[25px] p-[6px] flex justify-center items-center rounded-full"><FaInstagram className="text-white"/></div>
                            </div>
                        </div>

                        <div>
                            <p className="text-[13px] font-semibold">Download our app</p>
                            <img src={ gp } className="mt-[10px]"/>
                            <img src={ app } className="mt-[10px]"/>
                        </div>
                    </div>
                    <Link to="/" className="cursor-pointer">
                        <img src={logo} className="w-[90px] lg:w-[102px] ml-[30px] md:ml-0" />
                    </Link>
                </div>
            </div>
            <div className="px-[20px] md:px-[40px] pt-[80px] pb-[20px]"><hr /></div>

            <div className="px-[20px] md:px-[40px] flex flex-col md:flex-row justify-between gap-y-[10px]">
                <div className="flex gap-[10px]">
                    <p className="text-[13px] underline cursor-pointer">Terms and Conditions</p>
                    <p className="text-[13px] underline cursor-pointer">Policy</p>
                    <p className="text-[13px] underline cursor-pointer">Privacy</p>
                    <p className="text-[13px] underline cursor-pointer">Order</p>
                </div>
                <p className="text-[13px] text-[#3E3E3E]">© Copyright 2024, All Rights Reserved by Timbu Cloud Shop</p>
            </div>
            
        </div>
    );
}
 
export default Footer;