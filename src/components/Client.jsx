import { RiArrowRightSLine } from "react-icons/ri";
import avater from "../assets/avater.png";
const Client = () => {
  return (
    <div className="my-12">
      <div className="max-w-[1300px] mx-auto items-center justify-between flex **:">
        <h3 className="text-3xl font-bold ">
          Your trusted real estate partner
        </h3>
        <p className="flex items-center gap-2">
          Read all stories <RiArrowRightSLine />
        </p>
      </div>
      <div className="mt-12 md:flex justify-between">
        <div className="w-[424px] h-[515px] bg-gray-300  p-8 rounded-2xl">
          <img src={avater} alt="" />
          <p className=" mt-24  ">
            “As a first-time buyer, I had many questions, but homequest guided
            me through every step.”
          </p>
          <p className="text-xl font-semibold mt-24">Ayesha Rahman</p>
          <p>First-time Homebuyer</p>
        </div>
          <div className="w-[424px] h-[515px] bg-gray-300  p-8 rounded-2xl">
          <img src={avater} alt="" />
          <p className=" mt-24  ">
            “As a first-time buyer, I had many questions, but homequest guided
            me through every step.”
          </p>
          <p className="text-xl font-semibold mt-24">Ayesha Rahman</p>
          <p>First-time Homebuyer</p>
        </div>
          <div className="w-[424px] h-[515px] bg-gray-300  p-8 rounded-2xl">
          <img src={avater} alt="" />
          <p className=" mt-24  ">
            “As a first-time buyer, I had many questions, but homequest guided
            me through every step.”
          </p>
          <p className="text-xl font-semibold mt-24">Ayesha Rahman</p>
          <p>First-time Homebuyer</p>
        </div>
          <div className="w-[424px] h-[515px] bg-gray-300  p-8 rounded-2xl">
          <img src={avater} alt="" />
          <p className=" mt-24  ">
            “As a first-time buyer, I had many questions, but homequest guided
            me through every step.”
          </p>
          <p className="text-xl font-semibold mt-24">Ayesha Rahman</p>
          <p>First-time Homebuyer</p>
        </div>
      </div>
    </div>
  );
};

export default Client;
