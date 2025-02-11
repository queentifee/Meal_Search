import React from "react"
import { Quote } from "lucide-react";




function Reviews () {
    return (
        
<div className="container mx-auto px-9 lg:px-20 py-10">
{/* Title */}
  <h2 className="bebas-neue-goals text-center my-3 text-2xl font-bold text-black">OUR HAPPY USERS</h2>

  {/* Line Section */}
  <div className="relative w-4/4 mx-auto">
    {/* Black Line (Bottom) */}
    <div className="w-full h-0.5 bg-gray-200 " ></div>
    {/* White Line (Top) */}
    <div className=" w-45 m-auto mb-0.5  h-0.5 bg-red-500"></div>   
    </div>

    <div>
    <div className="flex flex-col items-center justify-center text-center w-full h-full">
  <div className="flex items-center justify-center bg-red-500 p-1 rounded-full mt-10">
    <Quote size={35} color="white" />
  </div>
  <h1 className="mt-5 font-medium text-black max-w-md">
    I love the service. The app is top notch with different amazing recipes.
  </h1>
</div>
</div>

  </div>
    )}

    export default Reviews