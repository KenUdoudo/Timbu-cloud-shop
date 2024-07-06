import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
const Search = () => {
    return (  
        <div className="items-center justify-center hidden md:flex">
            <div className="flex flex-row items-center w-[100px] md:w-[350px] lg:w-[500px] h-[42px] border border-[#2972FF] rounded-[12px]">
                <CiSearch className="flex-shrink-0 ml-[10px]"/>
                <input 
                type="text" 
                className="w-full py-2 ml-[10px] focus:outline-none"
                placeholder="Search for all accessories" 
                />
                <select className="px-[10px] focus:outline-none hidden lg:block">
                <option>All Categories<RiArrowDropDownLine /></option>
                </select>
                <button className="h-full px-[20px] bg-[#2972FF] text-white rounded-r-[12px]">
                Search
                </button>
            </div>
        </div>
    );
}
 
export default Search;