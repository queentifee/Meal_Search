import React from "react";


import { UtensilsCrossed, Salad, Coffee, Drumstick } from "lucide-react";


function Goals () {
    return (
        
<div className="container mx-auto px-6 lg:px-20 py-10">
{/* Title */}
  <h2 className="bebas-neue-goals text-center my-3 text-2xl font-bold text-black">FEATURES</h2>

  {/* Line Section */}
  <div className="relative w-4/4 mx-auto">
    {/* Black Line (Bottom) */}
    <div className="w-full h-0.5 bg-gray-200 " ></div>
    {/* White Line (Top) */}
    <div className=" w-32 m-auto mb-0.5  h-0.5 bg-red-500"></div>   

  </div>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 text-black ">
      
    {/* Icons */}
    <div className="group flex flex-col items-center">
    <div className="bg-red-500 p-5 rounded-full transition duration-300 group-hover:bg-black group-hover:scale-110 group-hover:animate-bounce">
      
        <UtensilsCrossed size={35} color="white" />
      </div>
      <h1 className=" text-2xl font-medium mt-4">
        Name
      </h1>
      <h2 className="text-sm text-center">Search for meals by name</h2>
    </div>

    {/* Section 2 */}
    <div className="group flex flex-col items-center">
    <div className="bg-red-500 p-5 rounded-full transition duration-300 group-hover:bg-black group-hover:scale-110 group-hover:animate-bounce">
        <Salad size={35} color="white" />
      </div>
    <h1 className=" text-2xl font-medium mt-4">
    Categories
      </h1>
      <h2 className="text-sm text-center">Discover meals in categories</h2>
    </div>

    {/* Section 3 */}
    <div className="group flex flex-col items-center">
    <div className="bg-red-500 p-5 rounded-full transition duration-300 group-hover:bg-black group-hover:scale-110 group-hover:animate-bounce">
        <Coffee size={35} color="white" />
      </div>
    <h1 className=" text-2xl font-medium mt-4">
    Cuisines
      </h1>
      <h2 className="text-sm text-center">Explore different cuisines</h2>
    </div>
    <div className="group flex flex-col items-center">
    <div className="bg-red-500 p-5 rounded-full transition duration-300 group-hover:bg-black group-hover:scale-110 group-hover:animate-bounce">
        <Drumstick size={35} color="white" />
      </div>
    <h1 className=" text-2xl font-medium mt-4">
    Random
      </h1>
      <h2 className="text-sm text-center">Get a random meal</h2>
    </div>
  </div>
</div>




        
    )
}

export default  Goals