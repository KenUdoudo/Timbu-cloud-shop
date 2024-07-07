import { Link } from "react-router-dom";
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
const Sec1cart = () => {
    return ( 
        <div className="px-[20px] md:px-[40px] w-full">
            <p className="text-[12px] md:text-[16px]"><Link to='/'>Home </Link>/ <Link to='/mycart'>Cart</Link></p>
            <div className="mt-[32px] md:mt-[40px] w-full">
                <p className="text-[24px] md:text-[30px] font-semibold">Cart</p>
                <div className="w-full flex justify-around items-center">
                    <hr className="border-[#2972FF] border-[1px] md:border-[2px] w-[87px] md:w-[120px] lg:w-[200px]"/>
                    <Bs1CircleFill className="text-[#2972FF] w-[18px] md:w-[25px] h-[18px] md:h-[25px]"/>
                    <hr className="border-[#BDBDBD] border-[1px] md:border-[2px] w-[87px] md:w-[312px] lg:w-[412px]"/>
                    <Bs2CircleFill className="text-[#BDBDBD] w-[18px] md:w-[25px] h-[18px] md:h-[25px]"/>
                    <hr className="border-[#BDBDBD] border-[1px] md:border-[2px] w-[87px] md:w-[120px] lg:w-[200px]"/>
                </div>
            </div>
        </div>
    );
}
 
export default Sec1cart;