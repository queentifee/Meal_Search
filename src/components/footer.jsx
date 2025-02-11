import {React, useState} from "react";
import CountUp from "react-countup";



import { Fish, CakeSlice, Sandwich, EggFried, } from "lucide-react";


const Footer = () => {

    const [replay, setReplay] = useState(false);

    return (
      <footer className=" relative  h-[400px] flex justify-center items-center mt-20 lg:px-20 py-10"

        style={{
           backgroundImage: `url('https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
           backgroundSize: "cover",
           backgroundPosition: "center",
         }}
       >
         {/* Dark Overlay */}
         <div className="absolute inset-0 bg-black opacity-70"></div>

         <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-30 mt-6 text-white ">
      
        {/* Sea Foods */}
        <div
        className="group flex flex-col items-center"
        onMouseEnter={() => setReplay(!replay)}
      >
        <Fish size={55} />
        <CountUp start={0} end={150} duration={2} key={replay} className="text-3xl text-red-500 font-bold mt-2" />
        <h1 className="text-xl font-semibold mt-2">Sea Foods</h1>
      </div>


      {/* Section 2 */}
      <div
        className="group flex flex-col items-center"
        onMouseEnter={() => setReplay(!replay)}
      >
        <CakeSlice size={55} />
        <CountUp start={0} end={130} duration={2} key={replay} className="text-3xl text-red-500 font-bold mt-2" />
        <h1 className="text-xl font-semibold mt-2">Pastries</h1>
      </div>
  
      {/* Section 3 */}
      <div
        className="group flex flex-col items-center"
        onMouseEnter={() => setReplay(!replay)}
      >
        <Sandwich size={55} />
        <CountUp start={0} end={120} duration={2} key={replay} className="text-3xl text-red-500 font-bold mt-2" />
        <h1 className="text-xl font-semibold mt-2">Snacks</h1>
      </div>
      <div
        className="group flex flex-col items-center"
        onMouseEnter={() => setReplay(!replay)}
      >
        <EggFried size={55} />
        <CountUp start={0} end={100} duration={2} key={replay} className="text-3xl text-red-500 font-bold mt-2" />
        <h1 className="text-xl font-semibold mt-2">Breakfast</h1>
      </div>
      <div className="col-span-full flex flex-col items-center text-white font-md mt-6">
  <p>&copy; 2025 Go To Meal. All rights reserved.</p>
  <br />
  <p>
    <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
  </p>
</div>
      </div>
      
      
   
            </footer>
    )}
 export default Footer;


