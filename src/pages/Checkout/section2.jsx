import four from './assets/4k.png';
import icemaker from './assets/something.png';
import gen from './assets/gen.png';
import power from './assets/power.png';
import blender from './assets/blender.png';
const Sec2check = () => {
    return (
        <div className='px-[20px] md:px-[40px] w-full mt-[20px] md:mt-[70px] flex flex-col lg:flex-row items-start'>
            <div className='w-full lg:w-[50%]'>
                <p className='text-[25px] font-semibold'>Billing Details</p>
                <div className="mt-[30px] mb-[30px]">
                <label className="block font-bold mb-2">Full Name <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="w-full px-[18px]  py-[18px] border text-[13px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Darwin Nunez"
                />
                </div>
                <div className="mb-[30px]">
                <label className="block font-bold mb-2">Email Address <span className="text-red-500">*</span></label>
                <input 
                    type="email" 
                    className="w-full px-[18px]  py-[18px] border text-[13px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="darwin.nunez@gmail.com"
                />
                </div>
                <div className="mb-[30px]">
                <label className="block font-bold mb-2">Phone Number <span className="text-red-500">*</span></label>
                <input 
                    type="tel" 
                    className="w-full px-[18px]  py-[18px] border text-[13px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="+44 70 114 67 34"
                />
                </div>
                <div className="mb-[30px]">
                <label className="block font-bold mb-2">Address <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="w-full px-[18px]  py-[18px] border text-[13px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Block 12C, West Minister Area"
                />
                </div>
                <div className="mb-[30px]">
                <label className="block font-bold mb-2">City <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="w-full px-[18px]  py-[18px] border text-[13px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Liverpool"
                />
                </div>
                <div className="mb-[30px]">
                <label className="block font-bold mb-2">Country <span className="text-red-500">*</span></label>
                <input 
                    type="text" 
                    className="w-full px-[18px]  py-[18px] border text-[13px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="England"
                />
                </div>
                <div className="mb-[30px]">
                <label className="block font-bold mb-2">Additional Information</label>
                <p className='text-[13px] mb-[6px]'>Order notes<span className='text-[#696969]'>(optional)</span></p>
                <textarea 
                    className="w-full px-[18px] h-[150px] py-[18px] border text-[13px] rounded-[8px] focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="Note about your order, e.g., special note for delivery"
                ></textarea>
                </div>
            </div>
        </div>
    );
}
 
export default Sec2check;