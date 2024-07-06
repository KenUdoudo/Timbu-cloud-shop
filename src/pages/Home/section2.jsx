import { RiArrowDropDownLine } from "react-icons/ri";
const Sec2home = () => {
    return (  
        <div className="px-[20px] md:px-[40px] py-[20px]">
            <div className="flex flex-row justify-between items-center">
                <p className="flex items-center">Payment Method <RiArrowDropDownLine className="w-[30px] h-[30px]"/></p>
                <p className="flex items-center">Quick Customer Service <RiArrowDropDownLine className="w-[30px] h-[30px]"/></p>
                <p className="flex items-center">Product Quality <RiArrowDropDownLine className="w-[30px] h-[30px]"/></p>
                <p className="flex items-center">Fast Delivery <RiArrowDropDownLine className="w-[30px] h-[30px]"/></p>
            </div>
            <hr className="my-[15px]"/>
        </div>
    );
}
 
export default Sec2home;