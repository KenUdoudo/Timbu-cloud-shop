import { HiOutlineTrash } from "react-icons/hi2";
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import four from './assets/4k.png';
import icemaker from './assets/something.png';
import gen from './assets/gen.png';
import power from './assets/power.png';
import blender from './assets/blender.png';

const Sec2cart = () => {
    

    return (
        <div className="px-[20px] md:px-[40px] w-full mt-[20px] md:mt-[70px] flex flex-col lg:flex-row items-start gap-x-[5px]">
            <div className="w-full lg:w-[75%]">
              <div className="w-full hidden md:flex justify-around font-semibold">
                <p className="px-[90px]">PRODUCT NAME</p>
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>TOTAL</p>
              </div>
              <div className="hidden md:block w-full">
                <hr className="mt-[20px] "/>
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-[5px]">
                    <HiOutlineTrash className="text-[#DD2C00]"/>
                    <img src={ four } className="w-[100px]"/>
                    <p className="text-[10px]">HISENSE 100 INCH U7K SERIES ULED 4K</p>
                  </div>
                  <p className="font-semibold">₦3,900,990</p>
                  <div className="flex items-center gap-[5px]">
                    <FaMinusSquare className="text-[#818181]"/>
                    <p className="text-[12px]">1</p>
                    <FaPlusSquare className="text-[#2972FF]"/>
                  </div>
                  <p className="font-semibold">₦3,900,990</p>
                </div>
                <hr className="mt-[20px] "/>
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-[5px]">
                    <HiOutlineTrash className="text-[#DD2C00]"/>
                    <img src={ icemaker } className="w-[100px]"/>
                    <p className="text-[10px]">HISENSE 20KG ICE MAKER ICM2011</p>
                  </div>
                  <p className="font-semibold">₦160,900</p>
                  <div className="flex items-center gap-[5px]">
                    <FaMinusSquare className="text-[#818181]"/>
                    <p className="text-[12px]">2</p>
                    <FaPlusSquare className="text-[#2972FF]"/>
                  </div>
                  <p className="font-semibold">₦321,800</p>
                </div>
                <hr className="mt-[20px] "/>
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-[5px]">
                    <HiOutlineTrash className="text-[#DD2C00]"/>
                    <img src={ gen } className="w-[100px]"/>
                    <p className="text-[10px]">MAXI E17000KWH GENERATOR 21.25 KVA</p>
                  </div>
                  <p className="font-semibold">₦3,597,900</p>
                  <div className="flex items-center gap-[5px]">
                    <FaMinusSquare className="text-[#818181]"/>
                    <p className="text-[12px]">2</p>
                    <FaPlusSquare className="text-[#2972FF]"/>
                  </div>
                  <p className="font-semibold">₦3,597,900</p>
                </div>
                <hr className="mt-[20px] "/>
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-[5px]">
                    <HiOutlineTrash className="text-[#DD2C00]"/>
                    <img src={ power } className="w-[100px]"/>
                    <p className="text-[10px]">HUAWEI -M 2.5KW POWER INVERTER</p>
                  </div>
                  <p className="font-semibold">₦4,182,900</p>
                  <div className="flex items-center gap-[5px]">
                    <FaMinusSquare className="text-[#818181]"/>
                    <p className="text-[12px]">2</p>
                    <FaPlusSquare className="text-[#2972FF]"/>
                  </div>
                  <p className="font-semibold">₦4,182,900</p>
                </div>
                <hr className="mt-[20px] "/>
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-[5px]">
                    <HiOutlineTrash className="text-[#DD2C00]"/>
                    <img src={ blender } className="w-[100px]"/>
                    <p className="text-[10px]">BINATONE BLENDER</p>
                  </div>
                  <p className="font-semibold">₦48,990</p>
                  <div className="flex items-center gap-[5px]">
                    <FaMinusSquare className="text-[#818181]"/>
                    <p className="text-[12px]">2</p>
                    <FaPlusSquare className="text-[#2972FF]"/>
                  </div>
                  <p className="font-semibold">₦146,970</p>
                </div>
              </div>
              <div className="md:hidden w-full">
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-[5px]">
                    <HiOutlineTrash className="text-[#DD2C00]"/>
                    <img src={ four } className="w-[100px]"/>
                  </div>
                  <div>
                    <p className="text-[10px]">HISENSE 100 INCH U7K SERIES ULED 4K</p>
                    <div className="w-full flex justify-between items-center mt-[5px]">
                      <p className="font-semibold text-[10px]">₦3,900,990</p>
                      <div className="flex items-center gap-[5px]">
                        <FaMinusSquare className="text-[#818181]"/>
                        <p className="text-[10px]">1</p>
                        <FaPlusSquare className="text-[#2972FF]"/>
                      </div>
                    </div>
                    <div className="w-full flex justify-start gap-[20px] mt-[20px]">
                      <p className="font-semibold text-[10px]">Total:</p>
                      <p className="font-semibold text-[10px]">₦3,900,990</p>
                    </div>
                  </div>
                </div>
                <hr className=""/>
              </div>
            </div>
            <div className="w-full lg:w-[25%] border-[1px] border-[#9DBEFF] rounded-[8px] p-[10px]">
              <p className="font-semibold">Order Summary</p>
              <div className="w-full flex justify-between mt-[20px]">
                <p className="text-[#818181] text-[13px]">Sub-Total</p>
                <p className="text-[#2972FF] text-[13px]">₦12,150,560</p>
              </div>
              <div className="w-full flex justify-between mt-[8px]">
                <p className="text-[#818181] text-[13px]">Shipping Fee</p>
                <p className="text-[#2972FF] text-[13px]">₦83,300</p>
              </div>
              <hr className="w-full my-[10px]"/>

              <div className="w-full flex items-center">
                <input type="text" placeholder="Coupon Code" className="py-[5px] pl-[10px] md:pl-[5px] pr-[90px] md:pr-[10px] text-[10px] border-[1px] rounded-[8px]"/>
                <p className="bg-[#70A1FF] text-white px-[30px] md:px-[20px] py-[5px] rounded-[8px] text-[13px]">Apply</p>
              </div>

              <div className="w-full flex justify-between mt-[8px]">
                <p className="text-[14px]">Total Price</p>
                <p className="text-[#2972FF] text-[13px]">₦12,223,860</p>
              </div>
              <p className="bg-[#2972FF] hover:bg-[#6893eb] text-white w-full py-[7px] rounded-[8px] cursor-pointer mt-[20px] text-center">Checkout</p>
            </div>

        </div>
    );
}
 
export default Sec2cart;