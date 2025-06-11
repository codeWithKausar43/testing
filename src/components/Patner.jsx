import { GoArrowUpRight } from "react-icons/go";
import image from "../assets/patner.png";
import { FaHome } from "react-icons/fa";
const Patner = () => {
  return (
    <div className="mt-24 max-w-[1300px] mx-auto">
      <h3 className="font-semibold text-2xl text-center">
        Your trusted real estate partner
      </h3>
      <div className="flex items-center justify-center gap-6 mt-12">
        <div className="h-[424px] w-full relative ">
          <img className=" h-full w-full rounded-2xl" src={image} alt="" />
          <p className="size-12 absolute bg-gray-300 rounded-full top-8 right-8 flex items-center justify-center text-3xl">
            <GoArrowUpRight />
          </p>
          <div className="bg-gray-600 w-full h-20 absolute -mt-20 rounded-b-2xl items-center">
            <div className="flex items-center gap-8 px-6 py-2">
              <div>
                <p className="size-12 bg-gray-300 rounded-full flex items-center justify-center text-3xl">
                  <FaHome />
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Property Buying
                </h3>
                <p className="text-white">Starting from $1,200</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[424px] w-full relative ">
          <img className=" h-full w-full rounded-2xl" src={image} alt="" />
          <p className="size-12 absolute bg-gray-300 rounded-full top-8 right-8 flex items-center justify-center text-3xl">
            <GoArrowUpRight />
          </p>
          <div className="bg-gray-600 w-full h-20 absolute -mt-20 rounded-b-2xl items-center">
            <div className="flex items-center gap-8 px-6 py-2">
              <div>
                <p className="size-12 bg-gray-300 rounded-full flex items-center justify-center text-3xl">
                  <FaHome />
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Property Buying
                </h3>
                <p className="text-white">Starting from $1,200</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[424px] w-full relative ">
          <img className=" h-full w-full rounded-2xl" src={image} alt="" />
          <p className="size-12 absolute bg-gray-300 rounded-full top-8 right-8 flex items-center justify-center text-3xl">
            <GoArrowUpRight />
          </p>
          <div className="bg-gray-600 w-full h-20 absolute -mt-20 rounded-b-2xl items-center">
            <div className="flex items-center gap-8 px-6 py-2">
              <div>
                <p className="size-12 bg-gray-300 rounded-full flex items-center justify-center text-3xl">
                  <FaHome />
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  Property Buying
                </h3>
                <p className="text-white">Starting from $1,200</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patner;
