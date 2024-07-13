import React, { useEffect, useState } from 'react';
import { IoIosHeartEmpty } from "react-icons/io";
import { TbShoppingBag } from "react-icons/tb";
import { useCart } from '../Cartcontext';


const Sec3home = () => {
    const { addItemToCart } = useCart();

    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch(`https://timbu-get-all-products.reavdev.workers.dev?organization_id=8ae37985db5c4bd88cfbd53f52972263&reverse_sort=false&page=${currentPage}&size=10&Appid=YO1NW8GUL4ENHX6&Apikey=ee17b5f35b76441a9736019dc474f62a20240712195531195532`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.items);
                setTotalPages(data.totalPages || 1); 
            })
            .catch(err => console.error('Error fetching products:', err)); 
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prevPage => prevPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prevPage => prevPage - 1);
        }
    };

    return (
        <div className="px-[20px] md:px-[40px] py-[20px]">
            <p className="text-[20px] md:text-[38px] font-semibold">Featured Products</p>
            <div className="w-full flex flex-row justify-center flex-wrap gap-[20px] mt-[20px] md:mt-[40px]">
                {products.map(product => (
                    <div key={product.id} className="w-full md:w-[30%] lg:w-[20%]">
                        <div className="w-full border-[2px] border-[#9DBEFF] rounded-[8px] flex justify-center items-center h-[300px]">
                            {product.photos && product.photos.length > 0 ? (
                                <img src={`https://api.timbu.cloud/images/${product.photos[0].url}`} className="w-auto h-[250px]" alt={product.name} />
                            ) : (
                                <p>No image available</p>
                            )}
                        </div>
                        <p className='text-[12px] mt-[10px]'>{product.name}</p>
                        <div className="flex justify-between items-center">
                            <p className="font-semibold">₦{product.current_price.NGN}</p> 
                            <IoIosHeartEmpty className="w-[20px] h-[20px] md:w-auto md:h-auto" />
                        </div>
                        <p
                            className="bg-[#2972FF] hover:bg-[#6893eb] text-white px-[20px] py-[5px] rounded-[8px] flex justify-center items-center gap-[10px] cursor-pointer mt-[15px] text-[16px]"
                            onClick={() => addItemToCart(product)}
                        >
                            <TbShoppingBag className="w-[20px] h-[20px] md:w-auto md:h-auto" /> Add to Cart
                        </p>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center mt-[20px]">
                <button 
                    className="px-[10px] py-[5px] bg-gray-300 rounded mr-[10px] disabled:bg-gray-200"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>{currentPage} / {totalPages}</span>
                <button 
                    className="px-[10px] py-[5px] bg-gray-300 rounded ml-[10px] disabled:bg-gray-200"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Sec3home;

