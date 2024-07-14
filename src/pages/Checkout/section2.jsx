import four from './assets/4k.png';
import icemaker from './assets/something.png';
import gen from './assets/gen.png';
import power from './assets/power.png';
import blender from './assets/blender.png';
const Sec2check = () => {
    return (
        <div className='px-[20px] md:px-[40px] w-full mt-[20px] md:mt-[70px] flex flex-col lg:flex-row items-start'>
            <div className='w-full lg:w-[50%]'>
                <p className='text-[16px] md:text-[25px] font-semibold'>Billing Details</p>
                <div className="mt-[30px] mb-[30px]">
                <label className="block text-[14px] md:text-[16px] font-bold mb-2">Full Name <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="w-full px-[14px] md:px-[18px] py-[14px] md:py-[18px] border text-[13px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Darwin Nunez"
                />
                </div>
                <div className="mb-[30px]">
                <label className="block text-[14px] md:text-[16px] font-bold mb-2">Email Address <span className="text-red-500">*</span></label>
                <input 
                    type="email" 
                    className="w-full px-[14px] md:px-[18px] py-[14px] md:py-[18px] border text-[13px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="darwin.nunez@gmail.com"
                />
                </div>
                <div className="mb-[30px]">
                <label className="block text-[14px] md:text-[16px] font-bold mb-2">Phone Number <span className="text-red-500">*</span></label>
                <input 
                    type="tel" 
                    className="w-full px-[14px] md:px-[18px] py-[14px] md:py-[18px] border text-[13px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="+44 70 114 67 34"
                />
                </div>
                <div className="mb-[30px]">
                <label className="block text-[14px] md:text-[16px] font-bold mb-2">Address <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="w-full px-[14px] md:px-[18px] py-[14px] md:py-[18px] border text-[13px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Block 12C, West Minister Area"
                />
                </div>
                <div className="mb-[30px]">
                <label className="block text-[14px] md:text-[16px] font-bold mb-2">City <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="w-full px-[14px] md:px-[18px] py-[14px] md:py-[18px] border text-[13px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Liverpool"
                />
                </div>
                <div className="mb-[30px]">
                <label className="block text-[14px] md:text-[16px] font-bold mb-2">Country <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="w-full px-[14px] md:px-[18px] py-[14px] md:py-[18px] border text-[13px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="England"
                />
                </div>
                <div className="mb-[30px]">
                <label className="block text-[14px] md:text-[16px] font-bold mb-2">Additional Information</label>
                <p className='text-[13px] mb-[6px]'>Order notes<span className='text-[#696969]'>(optional)</span></p>
                <textarea 
                    className="w-full px-[14px] md:px-[18px] py-[14px] md:py-[18px] h-[150px] border text-[13px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Note about your order, e.g., special note for delivery"
                ></textarea>
                </div>
            </div>
            <div className="w-full lg:w-[50%] border-[1px] border-[#9DBEFF] rounded-[8px] p-[10px] lg:p-[20px]">
              <p className="font-semibold">Order Summary</p>
                <div className='w-full flex gap-[5px] justify-between items-center'>
                    <img src={ four } className="w-[100px]"/>
                    <div className='flex justify-between items-center gap-[10px] w-[70%]'>
                        <div className='flex flex-col gap-[10px]'>
                            <p className="text-[12px] md:text-[16px] text-wrap">HISENSE 100 INCH U7K SERIES ULED 4K</p>
                            <p className="text-[14px] md:text-[16px] font-semibold">₦3,900,990</p>
                        </div>
                        <p className='text-[14px] md:text-[16px] '>x1</p>
                    </div>
                </div>
                <hr className='pb-[10px]'/>
                <div className='w-full flex gap-[5px] justify-between items-center'>
                    <img src={ icemaker } className="w-[100px]"/>
                    <div className='flex justify-between items-center gap-[10px] w-[70%]'>
                        <div className='flex flex-col gap-[10px]'>
                            <p className="text-[12px] md:text-[16px] text-wrap">HISENSE 20KG ICE MAKER ICM2011</p>
                            <p className="text-[14px] md:text-[16px] font-semibold">₦321,800</p>
                        </div>
                        <p className='text-[14px] md:text-[16px] '>x2</p>
                    </div>
                </div>
                <hr className='pb-[10px]'/>
                <div className='w-full flex gap-[5px] justify-between items-center'>
                    <img src={ gen } className="w-[100px]"/>
                    <div className='flex justify-between items-center gap-[10px] w-[70%]'>
                        <div className='flex flex-col gap-[10px]'>
                            <p className="text-[12px] md:text-[16px] text-wrap">MAXI E17000KWH GENERATOR 21.25 KVA</p>
                            <p className="text-[14px] md:text-[16px] font-semibold">₦3,597,900</p>
                        </div>
                        <p className='text-[14px] md:text-[16px] '>x1</p>
                    </div>
                </div>
                <hr className='pb-[10px]'/>
                <div className='w-full flex gap-[5px] justify-between items-center'>
                    <img src={ power } className="w-[100px]"/>
                    <div className='flex justify-between items-center gap-[10px] w-[70%]'>
                        <div className='flex flex-col gap-[10px]'>
                            <p className="text-[12px] md:text-[16px] text-wrap">HUAWEI -M 2.5KW POWER INVERTER</p>
                            <p className="text-[14px] md:text-[16px] font-semibold">₦4,182,900</p>
                        </div>
                        <p className='text-[14px] md:text-[16px] '>x1</p>
                    </div>
                </div>
                <hr className='pb-[10px]'/>
                <div className='w-full flex gap-[5px] justify-between items-center'>
                    <img src={ blender } className="w-[100px]"/>
                    <div className='flex justify-between items-center gap-[10px] w-[70%]'>
                        <div className='flex flex-col gap-[10px]'>
                            <p className="text-[12px] md:text-[16px] text-wrap">BINATONE BLENDER</p>
                            <p className="text-[14px] md:text-[16px] font-semibold">₦146,970</p>
                        </div>
                        <p className='text-[14px] md:text-[16px] '>x3</p>
                    </div>
                </div>
                <hr className='pb-[10px]'/>

              <div className="w-full flex justify-between mt-[20px]">
                <p className="text-[#818181] text-[13px]">Sub-Total</p>
                <p className="text-[#2972FF] text-[13px]">₦12,150,560</p>
              </div>
              <div className="w-full flex justify-between mt-[8px]">
                <p className="text-[#818181] text-[13px]">Shipping Fee</p>
                <p className="text-[#2972FF] text-[13px]">₦83,300</p>
              </div>
              <hr className="w-full my-[10px]"/>

              <div className="w-full flex items-center gap-[5px]">
                <input type="text" placeholder="Coupon Code" className="py-[5px] pl-[10px] md:pl-[5px] w-[70%] text-[10px] md:text-[13px] border-[1px] rounded-[8px]"/>
                <p className="bg-[#70A1FF] text-white text-center w-[30%] py-[5px] rounded-[8px] text-[10px] md:text-[13px]">Apply</p>
              </div>

              <div className="w-full flex justify-between mt-[8px]">
                <p className="text-[14px]">Total Price</p>
                <p className="text-[#2972FF] text-[13px]">₦12,223,860</p>
              </div>
              <p className="bg-[#2972FF] hover:bg-[#6893eb] text-white w-full py-[7px] rounded-[8px] cursor-pointer mt-[20px] text-center">Proceed to Payment</p>
            </div>
        </div>
    );
}
 
export default Sec2check;