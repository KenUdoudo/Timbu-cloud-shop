import { IoIosHeartEmpty } from "react-icons/io";
import { TbShoppingBag } from "react-icons/tb";
import ac from './assets/ac.png';
import tv from './assets/tv.png';
import blender from './assets/blender.png';
import fridge from './assets/fridge.png';
import icemaker from './assets/something.png';
import airfryer from './assets/airfyer.png';
import washing from './assets/washingmachine.png';
import four from './assets/4k.png';
import power from './assets/power.png';
import gen from './assets/gen.png';
import toaster from './assets/toaster.png';
import solar from './assets/solar.png';
const Sec3home = () => {
    return (  
        <div className="px-[20px] md:px-[40px] py-[20px]">
            <p className="text-[20px] md:text-[38px] font-semibold">Featured Products</p>

            <div className="w-full flex flex-row justify-center flex-wrap gap-[20px] mt-[20px] md:mt-[40px]">
                <div className="w-full md:w-[30%] lg:w-[20%]">
                    <div className="w-full border-[2px] rounded-[8px] flex justify-center items-center  h-[300px]">
                        <img src={ ac } className="w-auto h-[250px]"/>
                    </div>
                    <p className='text-[9px] mt-[10px]'>BRUHM BLACK AC BAS-09ICQB</p>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">₦298,490</p>
                        <IoIosHeartEmpty />
                    </div>
                    <p className="bg-[#2972FF] hover:bg-[#6893eb] text-white px-[20px] py-[5px] rounded-[8px] flex justify-center items-center gap-[10px] cursor-pointer mt-[15px] text-[16px]"><TbShoppingBag /> Add to Cart</p>
                </div>
                <div className="w-full md:w-[30%] lg:w-[20%]">
                    <div className="w-full border-[2px] rounded-[8px] flex justify-center items-center  h-[300px]">
                        <img src={ tv } className="w-auto h-[250px]"/>
                    </div>
                    <p className='text-[9px] mt-[10px]'>BRUHM LED BTF43SV FHD , SMART OS TV</p>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">₦298,490</p>
                        <IoIosHeartEmpty />
                    </div>
                    <p className="bg-[#2972FF] hover:bg-[#6893eb] text-white px-[20px] py-[5px] rounded-[8px] flex justify-center items-center gap-[10px] cursor-pointer mt-[15px] text-[16px]"><TbShoppingBag /> Add to Cart</p>
                </div>
                <div className="w-full md:w-[30%] lg:w-[20%]">
                    <div className="w-full border-[2px] rounded-[8px] flex justify-center items-center  h-[300px]">
                        <img src={ blender } className="w-auto h-[250px]"/>
                    </div>
                    <p className='text-[9px] mt-[10px]'>BINATONE BLENDER</p>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">₦48,990</p>
                        <IoIosHeartEmpty />
                    </div>
                    <p className="bg-[#2972FF] hover:bg-[#6893eb] text-white px-[20px] py-[5px] rounded-[8px] flex justify-center items-center gap-[10px] cursor-pointer mt-[15px] text-[16px]"><TbShoppingBag /> Add to Cart</p>
                </div>
                <div className="w-full md:w-[30%] lg:w-[20%]">
                    <div className="w-full border-[2px] rounded-[8px] flex justify-center items-center  h-[300px]">
                        <img src={ fridge } className="w-auto h-[250px]"/>
                    </div>
                    <p className='text-[9px] mt-[10px]'>BRUHM BLACK REF BFQ-592EN </p>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">₦1,421,290</p>
                        <IoIosHeartEmpty />
                    </div>
                    <p className="bg-[#2972FF] hover:bg-[#6893eb] text-white px-[20px] py-[5px] rounded-[8px] flex justify-center items-center gap-[10px] cursor-pointer mt-[15px] text-[16px]"><TbShoppingBag /> Add to Cart</p>
                </div>
                <div className="w-full md:w-[30%] lg:w-[20%]">
                    <div className="w-full border-[2px] rounded-[8px] flex justify-center items-center  h-[300px]">
                        <img src={ icemaker } className="w-auto h-[250px]"/>
                    </div>
                    <p className='text-[9px] mt-[10px]'>HISENSE 20KG ICE MAKER ICM2011</p>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">₦160,900</p>
                        <IoIosHeartEmpty />
                    </div>
                    <p className="bg-[#2972FF] hover:bg-[#6893eb] text-white px-[20px] py-[5px] rounded-[8px] flex justify-center items-center gap-[10px] cursor-pointer mt-[15px] text-[16px]"><TbShoppingBag /> Add to Cart</p>
                </div>
                <div className="w-full md:w-[30%] lg:w-[20%]">
                    <div className="w-full border-[2px] rounded-[8px] flex justify-center items-center  h-[300px]">
                        <img src={ airfryer } className="w-auto h-[250px]"/>
                    </div>
                    <p className='text-[9px] mt-[10px]'>HISENSE H04AfBK1S1 4.5L AIR FRYER</p>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">₦60,000</p>
                        <IoIosHeartEmpty />
                    </div>
                    <p className="bg-[#2972FF] hover:bg-[#6893eb] text-white px-[20px] py-[5px] rounded-[8px] flex justify-center items-center gap-[10px] cursor-pointer mt-[15px] text-[16px]"><TbShoppingBag /> Add to Cart</p>
                </div>
                <div className="w-full md:w-[30%] lg:w-[20%]">
                    <div className="w-full border-[2px] rounded-[8px] flex justify-center items-center  h-[300px]">
                        <img src={ washing } className="w-auto h-[250px]"/>
                    </div>
                    <p className='text-[9px] mt-[10px]'>LG F2V5FGPYJE 9/5KG FRONT LOAD</p>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">₦733,400</p>
                        <IoIosHeartEmpty />
                    </div>
                    <p className="bg-[#2972FF] hover:bg-[#6893eb] text-white px-[20px] py-[5px] rounded-[8px] flex justify-center items-center gap-[10px] cursor-pointer mt-[15px] text-[16px]"><TbShoppingBag /> Add to Cart</p>
                </div>
                <div className="w-full md:w-[30%] lg:w-[20%]">
                    <div className="w-full border-[2px] rounded-[8px] flex justify-center items-center  h-[300px]">
                        <img src={ four } className="w-auto h-[250px]"/>
                    </div>
                    <p className='text-[9px] mt-[10px]'>HISENSE 100 INCH U7K SERIES ULED 4K</p>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">₦3,900,990</p>
                        <IoIosHeartEmpty />
                    </div>
                    <p className="bg-[#2972FF] hover:bg-[#6893eb] text-white px-[20px] py-[5px] rounded-[8px] flex justify-center items-center gap-[10px] cursor-pointer mt-[15px] text-[16px]"><TbShoppingBag /> Add to Cart</p>
                </div>
                <div className="w-full md:w-[30%] lg:w-[20%]">
                    <div className="w-full border-[2px] rounded-[8px] flex justify-center items-center  h-[300px]">
                        <img src={ power } className="w-auto h-[250px]"/>
                    </div>
                    <p className='text-[9px] mt-[10px]'>HUAWEI -M 2.5kW POWER  INVERTER</p>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">₦4,182,900</p>
                        <IoIosHeartEmpty />
                    </div>
                    <p className="bg-[#2972FF] hover:bg-[#6893eb] text-white px-[20px] py-[5px] rounded-[8px] flex justify-center items-center gap-[10px] cursor-pointer mt-[15px] text-[16px]"><TbShoppingBag /> Add to Cart</p>
                </div>
                <div className="w-full md:w-[30%] lg:w-[20%]">
                    <div className="w-full border-[2px] rounded-[8px] flex justify-center items-center  h-[300px]">
                        <img src={ gen } className="w-auto h-[250px]"/>
                    </div>
                    <p className='text-[9px] mt-[10px]'>MAXI E17000KWH GENERATOR 21.25 KVA</p>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">₦3,597,900</p>
                        <IoIosHeartEmpty />
                    </div>
                    <p className="bg-[#2972FF] hover:bg-[#6893eb] text-white px-[20px] py-[5px] rounded-[8px] flex justify-center items-center gap-[10px] cursor-pointer mt-[15px] text-[16px]"><TbShoppingBag /> Add to Cart</p>
                </div>
                <div className="w-full md:w-[30%] lg:w-[20%]">
                    <div className="w-full border-[2px] rounded-[8px] flex justify-center items-center  h-[300px]">
                        <img src={ toaster } className="w-auto h-[250px]"/>
                    </div>
                    <p className='text-[9px] mt-[10px]'>MAXI TOASTER 2 SLICES</p>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">₦28,400</p>
                        <IoIosHeartEmpty />
                    </div>
                    <p className="bg-[#2972FF] hover:bg-[#6893eb] text-white px-[20px] py-[5px] rounded-[8px] flex justify-center items-center gap-[10px] cursor-pointer mt-[15px] text-[16px]"><TbShoppingBag /> Add to Cart</p>
                </div>
                <div className="w-full md:w-[30%] lg:w-[20%]">
                    <div className="w-full border-[2px] rounded-[8px] flex justify-center items-center  h-[300px]">
                        <img src={ solar } className="w-auto h-[250px]"/>
                    </div>
                    <p className='text-[9px] mt-[10px]'>MAXI TOASTER 2 SLICES</p>
                    <div className="flex justify-between items-center">
                        <p className="font-semibold">₦184,800</p>
                        <IoIosHeartEmpty />
                    </div>
                    <p className="bg-[#2972FF] hover:bg-[#6893eb] text-white px-[20px] py-[5px] rounded-[8px] flex justify-center items-center gap-[10px] cursor-pointer mt-[15px] text-[16px]"><TbShoppingBag /> Add to Cart</p>
                </div>
            </div>
        </div>
    );
}
 
export default Sec3home;
