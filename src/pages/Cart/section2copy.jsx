import { HiOutlineTrash } from "react-icons/hi2";
import { FaPlusSquare } from "react-icons/fa";
import { FaMinusSquare } from "react-icons/fa";
import four from './assets/4k.png';

const Sec2cart = () => {
    

    return (
        <div className="px-[20px] md:px-[40px] w-full mt-[70px]">
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
            

        </div>
    );
}
 
export default Sec2cart;