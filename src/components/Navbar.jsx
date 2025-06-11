import { IoIosArrowRoundForward } from "react-icons/io";
import logo from "../assets/logo.png";
import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="pt-12  top-0 sticky">
      <div className="flex items-center justify-between max-w-[1300px] mx-auto">
        <div className="flex items-center gap-6 text-white">
          <img className="size-8" src={logo} alt="" /> <h3 className=" text-3xl font-semibold">HomeQuest</h3>
          <a href="#" className="ml-8 border px-4 py-1 rounded-3xl">Projects</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
           <a href="#">Testimonials</a>
        </div>
        <div className="flex items-center  gap-6 text-white">
          <p>+21 934 748 392</p>
          <p className="size-8 bg-gray-400 rounded-full flex items-center justify-center "><CiSearch /></p>
          <button className="px-6 py-2 rounded-2xl bg-[#DBFB1E] flex gap-2 items-center justify-center text-black">
            Get a Quote <IoIosArrowRoundForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
