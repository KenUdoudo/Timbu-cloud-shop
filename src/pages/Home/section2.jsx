import { RiArrowDropDownLine } from "react-icons/ri";
const Sec2home = () => {
    return (  
        <div className="px-[20px] md:px-[40px] py-[20px]">
            <div className="flex flex-row justify-between items-center">
                <p className="flex items-center text-nowrap text-[8px] md:text-[16px]">Payment Method <RiArrowDropDownLine className="w-[15px] md:w-[30px] h-[15px] md:h-[30px]"/></p>
                <p className="flex items-center text-nowrap text-[8px] md:text-[16px]">Quick Customer Service <RiArrowDropDownLine className="w-[15px] md:w-[30px] h-[15px] md:h-[30px]"/></p>
                <p className="flex items-center text-nowrap text-[8px] md:text-[16px]">Product Quality <RiArrowDropDownLine className="w-[15px] md:w-[30px] h-[15px] md:h-[30px]"/></p>
                <p className="flex items-center text-nowrap text-[8px] md:text-[16px]">Fast Delivery <RiArrowDropDownLine className="w-[15px] md:w-[30px] h-[15px] md:h-[30px]"/></p>
            </div>
            <hr className="my-[15px]"/>
        </div>
    );
}
 
export default Sec2home;