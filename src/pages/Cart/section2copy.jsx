import React from 'react';
import { useCart } from '../Cartcontext';
import { HiOutlineTrash } from "react-icons/hi2";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
const Sec2cart = () => {
  const { cart, removeItemFromCart, updateItemQuantity } = useCart();

  return (
    <div className="px-[20px] md:px-[40px] w-full mt-[20px] md:mt-[70px] flex flex-col lg:flex-row items-start gap-x-[5px] gap-y-[30px]">
      <div className="w-full lg:w-[75%]">
        <div className="w-full hidden md:flex justify-around font-semibold">
          <p className="px-[90px]">PRODUCT NAME</p>
          <p>PRICE</p>
          <p>QUANTITY</p>
          <p>TOTAL</p>
        </div>
        <div className="hidden md:block w-full">
          {cart.map((item) => (
            <div key={item.id}>
              <hr className="mt-[20px]" />
              <div className="w-full flex justify-between items-center mt-[10px]">
                <div className="flex items-center gap-[5px] md:gap-[10px] w-[70%]">
                  <HiOutlineTrash className="text-[#DD2C00]" onClick={() => removeItemFromCart(item.id)} />
                  <img src={`https://api.timbu.cloud/images/${item.photos[0].url}`} className="w-[100px]" />
                  <p className="text-[10px]">{item.name}</p>
                </div>
                <p className="font-semibold w-[20%]">₦{item.current_price[0].NGN[0]}</p>
                <div className="flex items-center gap-[5px] w-[20%]">
                  <FaMinusSquare className="text-[#818181]" onClick={() => updateItemQuantity(item.id, item.quantity - 1)} />
                  <p className="text-[12px]">{item.quantity}</p>
                  <FaPlusSquare className="text-[#2972FF]" onClick={() => updateItemQuantity(item.id, item.quantity + 1)} />
                </div>
                <p className="font-semibold w-[20%]">₦{item.current_price[0].NGN[0] * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden w-full">
          {cart.map((item) => (
            <div key={item.id}>
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center gap-[5px]">
                    <HiOutlineTrash className="text-[#DD2C00]" onClick={() => removeItemFromCart(item.id)} />
                    <img src={`https://api.timbu.cloud/images/${item.photos[0].url}`} className="w-[100px]" />
                  </div>
                  <div className="w-[60%]">
                    <p className="text-[10px]">{item.name}</p>
                    <div className="w-full flex justify-between items-center mt-[5px]">
                    <p className="font-semibold w-[20%]">₦{item.current_price[0].NGN[0]}</p>
                      <div className="flex items-center gap-[5px]">
                        <FaMinusSquare className="text-[#818181]" onClick={() => updateItemQuantity(item.id, item.quantity - 1)} />
                        <p className="text-[10px]">{item.quantity}</p>
                        <FaPlusSquare className="text-[#2972FF]" onClick={() => updateItemQuantity(item.id, item.quantity + 1)} />
                      </div>
                    </div>
                    <div className="w-full flex justify-start gap-[20px] mt-[20px]">
                      <p className="font-semibold text-[10px]">Total:</p>
                      <p className="font-semibold text-[10px] w-[20%]">₦{item.current_price[0].NGN[0] * item.quantity}</p>
                    </div>
                  </div>
                </div>
                <hr className="my-[10px]" />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[25%] border-[1px] border-[#9DBEFF] rounded-[8px] p-[10px]">
        <p className="font-semibold">Order Summary</p>
        <div className="w-full flex justify-between mt-[20px]">
          <p className="text-[#818181] text-[13px]">Sub-Total</p>
          <p className="text-[#2972FF] text-[13px]">₦{cart.reduce((total, item) => total + item.current_price[0].NGN[0] * item.quantity, 0)}</p>
        </div>
        <div className="w-full flex justify-between mt-[8px]">
          <p className="text-[#818181] text-[13px]">Shipping Fee</p>
          <p className="text-[#2972FF] text-[13px]">₦83,300</p>
        </div>
        <hr className="w-full my-[10px]" />
        <div className="w-full flex items-center gap-[5px]">
          <input type="text" placeholder="Coupon Code" className="py-[5px] pl-[10px] md:pl-[5px] w-[70%] text-[10px] md:text-[13px] border-[1px] rounded-[8px]" />
          <p className="bg-[#70A1FF] text-white text-center w-[30%] py-[5px] rounded-[8px] text-[10px] md:text-[13px]">Apply</p>
        </div>
        <div className="w-full flex justify-between mt-[8px]">
          <p className="text-[14px]">Total Price</p>
          <p className="text-[#2972FF] text-[13px]">₦{cart.reduce((total, item) => total + item.current_price[0].NGN[0] * item.quantity, 0) + 83300}</p>
        </div>
        <Link to='/checkout'><p className="bg-[#2972FF] hover:bg-[#6893eb] text-white w-full py-[7px] rounded-[8px] cursor-pointer mt-[20px] text-center">Checkout</p></Link>
      </div>
    </div>
  );
}

export default Sec2cart;
