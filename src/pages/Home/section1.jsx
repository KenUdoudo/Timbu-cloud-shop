import bg from './assets/bg.png';
const Sec1home = () => {
    return ( 
        <div className='relative'>
            <img src={ bg } className='object-cover h-[350px]'/>

            <div className='absolute top-[30%] px-[20px] md:px-[40px] flex flex-col items-start gap-[10px]'>
                <p className='text-white text-[35px] md:text-[40px] font-semibold leading-[1]'>Get the Best Quality <br />Product</p>
                <p className='bg-[#2972FF] hover:bg-[#6893eb] text-white px-[20px] py-[5px] rounded-[8px]'>Shop Now</p>
            </div>
        </div>
    );
}
 
export default Sec1home;