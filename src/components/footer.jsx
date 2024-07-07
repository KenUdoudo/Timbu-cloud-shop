const Footer = () => {
    return (
        <div className="mt-[30px]">
            <div className="w-full py-[20px] px-[20px] md:px-[40px] bg-[#2972FF] flex flex-col gap-y-[10px] md:flex-row justify-between items-center">
                <p className="text-white text-[17px]">Subscribe to our newsletter to get updates on our latest offers!</p>
                <div className="flex flex-col md:flex-row justify-between items-center gap-y-[10px] gap-x-[20px] w-full md:w-auto">
                    <input type="email" placeholder="Enter your Email Address" className="py-[10px] pl-[20px] pr-[60px] text-[13px] rounded-[8px] w-full md:w-auto"/>
                    <p className="bg-[#ffbaba] text-[13px] py-[10px] px-[20px] font-semibold rounded-[8px] cursor-pointer w-full md:w-auto text-center">Subscribe</p>
                </div>
            </div>

            <div className="px-[20px] md:px-[40px] flex flex-col md:flex-row justify-center">
                <div className="flex flex-col md:flex-row">
                    <div>
                        <p className="font-semibold text-[14px]">Let Us Help You</p>
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
                </div>

            </div>
            
        </div>
    );
}
 
export default Footer;