import { IoIosHeartEmpty } from "react-icons/io";
import { TbShoppingBag } from "react-icons/tb";
import ac from './assets/ac.png';
const Sec3home = () => {
    return (  
        <div className="px-[20px] md:px-[40px] py-[20px]">
            <p className="text-[38px] font-semibold">Featured Products</p>

            <div className="w-full flex flex-col flex-wrap gap-[10px] mt-[40px]">
                <div className="w-[45%] md:w-[33%] lg:w-[25%]">
                    <div className="w-full border-[2px] rounded-[8px] flex justify-center items-center  h-[300px]">
                        <img src={ ac }/>
                    </div>
                    <p className='text-[13px] mt-[10px]'>BRUHM BLACK AC BAS-09ICQB</p>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">₦298,490</p>
                        <IoIosHeartEmpty />
                    </div>
                    <p className="bg-[#2972FF] hover:bg-[#6893eb] text-white px-[20px] py-[5px] rounded-[8px] flex justify-center items-center gap-[10px] cursor-pointer mt-[15px]"><TbShoppingBag /> Add to Cart</p>
                </div>
            </div>
        </div>
    );
}
 
export default Sec3home;
