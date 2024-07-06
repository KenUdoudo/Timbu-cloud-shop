const Footer = () => {
    return (
        <div className="mt-[30px]">
            <div className="w-full py-[20px] px-[20px] md:px-[40px] bg-[#2972FF] flex flex-col gap-y-[10px] md:flex-row justify-between items-center">
                <p className="text-white text-[17px]">Subscribe to our newsletter to get updates on our latest offers!</p>
                <div className="flex justify-between items-center gap-[20px]">
                    <input type="email" placeholder="Enter your Email Address" className="py-[10px] pl-[20px] pr-[60px] text-[13px] rounded-[8px]"/>
                    <p className="bg-[#ffbaba] text-[13px] py-[10px] px-[20px] font-semibold rounded-[8px] cursor-pointer">Subscribe</p>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;