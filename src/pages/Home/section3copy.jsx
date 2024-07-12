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

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://api.example.com/products/${PRODUCT_ID}`, {
                    headers: {
                        'Authorization': `Bearer ${API_KEY}`
                    }
                });
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

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

