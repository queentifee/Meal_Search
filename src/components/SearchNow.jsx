import React from "react";
import { Link } from "react-router-dom";



function SearchNow() {
    return (
      <div
      className="relative  h-[400px] flex justify-center items-center mt-30"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>
  
        {/* Content Section */}
        <div className="relative z-10 text-white text-center px-6">
          <h1 className="bebas-neue-word text-5xl font-bold">End mealtime</h1>
          <h1 className="bebas-neue-words text-4xl">
            boredom with exciting <span className="text-red-500">recipes</span>
          </h1>
          <p className="text-lg">
          Let your taste buds try something new today!
          </p>
          <br />
          <Link
            to="/search"
            className="bebas-neue-regular rounded-full bg-red-500 px-5 py-2 hover:bg-red-400 hover:text-black transition"
          >
            Search Now
          </Link>
        </div>
      </div>
    );
  }
  

  export default SearchNow;


//   className={`absolute inset-0 w-full flex flex-col justify-center text-white max-w-full transition-all duration-1000 px-5 ${
