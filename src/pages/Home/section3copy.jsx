import React from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { TbShoppingBag } from "react-icons/tb";
import { useCart } from '../Cartcontext';
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
    const { addItemToCart } = useCart();

    const products = [
        { id: 1, name: 'BRUHM BLACK AC BAS-09ICQB', price: 298490, img: ac },
        { id: 2, name: 'BRUHM LED BTF43SV FHD , SMART OS TV', price: 298490, img: tv },
        { id: 3, name: 'BINATONE BLENDER', price: 48990, img: blender },
        { id: 4, name: 'BRUHM BLACK REF BFQ-592EN', price: 1421290, img: fridge },
        { id: 5, name: 'HISENSE 20KG ICE MAKER ICM2011', price: 160900, img: icemaker },
        { id: 6, name: 'HISENSE H04AfBK1S1 4.5L AIR FRYER', price: 60000, img: airfryer },
        { id: 7, name: 'LG F2V5FGPYJE 9/5KG FRONT LOAD', price: 733400, img: washing },
        { id: 8, name: 'HISENSE 100 INCH U7K SERIES ULED 4K', price: 3900990, img: four },
        { id: 9, name: 'HUAWEI -M 2.5kW POWER INVERTER', price: 4182900, img: power },
        { id: 10, name: 'MAXI E17000KWH GENERATOR 21.25 KVA', price: 3597900, img: gen },
        { id: 11, name: 'MAXI TOASTER 2 SLICES', price: 28400, img: toaster },
        { id: 12, name: 'Jinko 625W Monofacial Solar Panel', price: 184800, img: solar }
    ];

    return (
        <div className="px-[20px] md:px-[40px] py-[20px]">
            <p className="text-[20px] md:text-[38px] font-semibold">Featured Products</p>
            <div className="w-full flex flex-row justify-center flex-wrap gap-[20px] mt-[20px] md:mt-[40px]">
                {products.map(product => (
                    <div key={product.id} className="w-full md:w-[30%] lg:w-[20%]">
                        <div className="w-full border-[2px] border-[#9DBEFF] rounded-[8px] flex justify-center items-center h-[300px]">
                            <img src={product.img} className="w-auto h-[250px]" alt={product.name} />
                        </div>
                        <p className='text-[9px] mt-[10px]'>{product.name}</p>
                        <div className="flex justify-between items-center">
                            <p className="font-semibold">₦{product.price.toLocaleString()}</p>
                            <IoIosHeartEmpty className="w-[20px] h-[20px] md:w-auto md:h-auto"/>
                        </div>
                        <p 
                            className="bg-[#2972FF] hover:bg-[#6893eb] text-white px-[20px] py-[5px] rounded-[8px] flex justify-center items-center gap-[10px] cursor-pointer mt-[15px] text-[16px]"
                            onClick={() => addItemToCart(product)}
                        >
                            <TbShoppingBag className="w-[20px] h-[20px] md:w-auto md:h-auto"/> Add to Cart
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sec3home;

