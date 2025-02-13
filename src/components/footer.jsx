
import {React, useState} from "react";
import CountUp from "react-countup";
 import { Fish, CakeSlice, Sandwich, EggFried, } from "lucide-react";


const Footer = () => {
  const [replay, setReplay] = useState(false);

  return (
    <footer
      className="relative flex justify-center items-center mt-20 px-5 md:px-20 py-10"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-white text-center w-full max-w-5xl">
        {/* Sea Foods */}
        <div
          className="group flex flex-col items-center"
          onMouseEnter={() => setReplay(!replay)}
        >
          <Fish size={55} />
          <CountUp start={0} end={150} duration={2} key={replay} className="text-3xl text-red-500 font-bold mt-2" />
          <h1 className="text-lg font-semibold mt-2">Sea Foods</h1>
        </div>

        {/* Pastries */}
        <div
          className="group flex flex-col items-center"
          onMouseEnter={() => setReplay(!replay)}
        >
          <CakeSlice size={55} />
          <CountUp start={0} end={130} duration={2} key={replay} className="text-3xl text-red-500 font-bold mt-2" />
          <h1 className="text-lg font-semibold mt-2">Pastries</h1>
        </div>

        {/* Snacks */}
        <div
          className="group flex flex-col items-center"
          onMouseEnter={() => setReplay(!replay)}
        >
          <Sandwich size={55} />
          <CountUp start={0} end={120} duration={2} key={replay} className="text-3xl text-red-500 font-bold mt-2" />
          <h1 className="text-lg font-semibold mt-2">Snacks</h1>
        </div>

        {/* Breakfast */}
        <div
          className="group flex flex-col items-center"
          onMouseEnter={() => setReplay(!replay)}
        >
          <EggFried size={55} />
          <CountUp start={0} end={100} duration={2} key={replay} className="text-3xl text-red-500 font-bold mt-2" />
          <h1 className="text-lg font-semibold mt-2">Breakfast</h1>
        </div>

        {/* Footer Text */}
        <div className="col-span-full flex flex-col items-center text-white font-md mt-6 text-center">
          <p>&copy; 2025 Go To Meal. All rights reserved.</p>
          <br />
          <p>
            <a href="#" className="underline">Privacy Policy</a> | 
            <a href="#" className="underline ml-2">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



