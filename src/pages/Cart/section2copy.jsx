import { HiOutlineTrash } from "react-icons/hi2";
import four from './assets/4k.png';

const Sec2cart = () => {
    

    return (
        <div className="px-[20px] md:px-[40px] w-full">
            <div className="w-[75%]">
              <div className="w-full flex justify-around">
                <p>PRODUCT NAME</p>
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>TOTAL</p>
              </div>
              <div className="w-full">
                <hr className="my-[20px] "/>
                <div className="w-full flex justify-between">
                  <div className="flex items-center">
                    <HiOutlineTrash className="text-[#DD2C00]"/>
                    <img src={ four } className="w-[100px]"/>
                    <p className="text-[10px]">HISENSE 100 INCH U7K SERIES ULED 4K</p>
                  </div>
                </div>
              </div>



            </div>
            

        </div>
    );
}
 
export default Sec2cart;