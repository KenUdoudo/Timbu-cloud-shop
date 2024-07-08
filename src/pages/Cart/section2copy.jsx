import { HiOutlineTrash } from "react-icons/hi2";
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import four from './assets/4k.png';

const Sec2cart = () => {
    

    return (
        <div className="px-[20px] md:px-[40px] w-full mt-[70px] flex flex-row items-start gap-x-[5px]">
            <div className="w-[75%]">
              <div className="w-full flex justify-around font-semibold">
                <p className="px-[90px]">PRODUCT NAME</p>
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>TOTAL</p>
              </div>
              <div className="w-full">
                <hr className="mt-[20px] "/>
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-[5px]">
                    <HiOutlineTrash className="text-[#DD2C00]"/>
                    <img src={ four } className="w-[100px]"/>
                    <p className="text-[10px]">HISENSE 100 INCH U7K SERIES ULED 4K</p>
                  </div>
                  <p className="font-semibold">₦3,900,990</p>
                  <div className="flex items-center gap-[5px]">
                    <FaMinusSquare />
                    <p className="text-[12px]">1</p>
                    <FaPlusSquare className="text-[#2972FF]"/>
                  </div>
                  <p className="font-semibold">₦3,900,990</p>
                </div>
              </div>



            </div>
            <div className="w-[25%] border-[1px] border-[#9DBEFF] rounded-[8px] p-[10px]">
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
                <input type="text" placeholder="Coupon Code" className="py-[5px] pl-[5px] pr-[10px] text-[10px] border-[1px] rounded-[8px]"/>
                <p className="bg-[#70A1FF] text-white px-[20px] py-[5px] rounded-[8px] text-[13px]">Apply</p>
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