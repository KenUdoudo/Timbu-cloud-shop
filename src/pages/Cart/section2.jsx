import { HiOutlineTrash } from "react-icons/hi2";
const CartItem = ({ image, name, price, quantity, total }) => {
    return (
      <div className="flex items-center justify-between py-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="cursor-pointer">
            <HiOutlineTrash className="text-[#DD2C00]"/>
          </div>
          <img src={image} alt={name} className="w-20 h-20 ml-4" />
          <div className="ml-4">
            <p className="text-lg font-semibold">{name}</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-lg font-semibold">{price}</p>
          <div className="flex items-center mx-4">
            <button className="px-2 py-1 bg-gray-300 text-black rounded">-</button>
            <span className="px-4">{quantity}</span>
            <button className="px-2 py-1 bg-gray-300 text-black rounded">+</button>
          </div>
          <p className="text-lg font-semibold">{total}</p>
        </div>
      </div>
    );
  };

const Sec2cart = () => {
    const items = [
        {
          image: './assets/4k.png',
          name: 'HISENSE 100 INCH U7K SERIES ULED 4K',
          price: '₦3,900,990',
          quantity: 1,
          total: '₦3,900,990',
        },
        {
          image: './assets/something.png',
          name: 'HISENSE 20KG ICE MAKER ICM2011',
          price: '₦160,900',
          quantity: 2,
          total: '₦321,800',
        },
        {
          image: './assets/gen.png',
          name: 'MAXI E17000KWH GENERATOR 21.25 KVA',
          price: '₦3,597,900',
          quantity: 1,
          total: '₦3,597,900',
        },
        {
          image: './assets/power.png',
          name: 'HUAWEI -M 2.5KW POWER INVERTER',
          price: '₦4,182,900',
          quantity: 1,
          total: '₦4,182,900',
        },
        {
          image: './assets/blender.png',
          name: 'BINATONE BLENDER',
          price: '₦48,990',
          quantity: 3,
          total: '₦146,970',
        },
      ];

    return (
        <div className="px-[20px] md:px-[40px] w-full">
            <div className="w-[80%]">
            <div className="grid grid-cols-5 gap-4 text-center font-bold py-4 border-b border-gray-200">
                <div>Product Name</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Total</div>
            </div>
            {items.map((item, index) => (
                <CartItem key={index} {...item} />
            ))}


            </div>

        </div>
    );
}
 
export default Sec2cart;