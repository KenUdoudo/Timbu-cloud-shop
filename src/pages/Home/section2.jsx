
import { PiCheckFat } from "react-icons/pi";
const Sec2home = () => {
    return (  
        <div className="px-[20px] md:px-[40px] py-[20px]">
            <div className="flex flex-row justify-between items-center flex-wrap">
                <p className="flex items-center gap-[10px] text-nowrap text-[10px] md:text-[16px]">Payment Method <PiCheckFat className="w-[15px] md:w-[20px] h-[15px] md:h-[20px]"/></p>
                <p className="flex items-center gap-[10px] text-nowrap text-[10px] md:text-[16px]">Quick Customer Service <PiCheckFat className="w-[15px] md:w-[20px] h-[15px] md:h-[20px]"/></p>
                <p className="flex items-center gap-[10px] text-nowrap text-[10px] md:text-[16px]">Product Quality <PiCheckFat className="w-[15px] md:w-[20px] h-[15px] md:h-[20px]"/></p>
                <p className="flex items-center gap-[10px] text-nowrap text-[10px] md:text-[16px]">Fast Delivery <PiCheckFat className="w-[15px] md:w-[20px] h-[15px] md:h-[20px]"/></p>
            </div>
            <hr className="my-[15px]"/>
        </div>
    );
}
 
export default Sec2home;