import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import logoo from "../assets/logoo.png"
// import hero from "../assets/hero.png"

function Herosearch() {
  const images = [
    { url: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", position: "left" },
    { url:   "  https://images.unsplash.com/photo-1577308856961-8e9ec50d0c67?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      , position: "center" },
    { url: "https://images.unsplash.com/photo-1553944384-ffdc4fd8f2fa?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  position: "right" }
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="relative h-screen w-full">

<div className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url('${images[currentIndex].url}')` }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>

           <nav className="sticky top-0 left-0  w-full z-50 bg-black/40 backdrop-blur">

        <div className="container mx-auto px-2  flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center ml-12">
            <img src={logoo} alt="Logo" className="h-18 w-18 mr-2" />
            {/* <span className="bebas-neue-logo">Go To Meal</span> */}
          </Link>

        

          {/* Auth Buttons */}
          <div className="hidden lg:flex space-x-7  mr-10 pt-2">
          <Link to="/"   className="bebas-neue-regular rounded-full bg-transparent px-4 py-1 hover:bg-red-500 hover:text-black transition"  >
          Home
  </Link>
  <Link to="/"   className="bebas-neue-regular rounded-full bg-transparent px-4 py-1 hover:bg-red-500 hover:text-black transition"  >
      Blog
    </Link>
    <Link to="/"   className="bebas-neue-regular rounded-full bg-transparent px-4 py-1 hover:bg-red-500 hover:text-black transition"  >
      FAQ
    </Link>
</div>


          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
         {isOpen && (
                  <div className="lg:hidden bg-black/70 py-6 px-4 absolute top-16 left-0 w-full shadow-md">
                    <div className="flex flex-col space-y-4 text-white">
                      <Link to="/" className="bebas-neue-regular rounded-full bg-transparent px-4 py-1 hover:bg-red-500 hover:text-black transition">Home</Link>
                     
          <Link to="/"   className="bebas-neue-regular rounded-full bg-transparent px-4 py-1 hover:bg-red-500 hover:text-black transition"  >
              Blog
            </Link>
            <Link to="/"   className="bebas-neue-regular rounded-full bg-transparent px-4 py-1 hover:bg-red-500 hover:text-black transition"  >
              FAQ
            </Link>       
                    </div>
                  </div>
                )}
              </nav>

     {/* Hero Content */}
     <motion.div
  initial={{ opacity: 0, y: -50 }} 
  animate={{ opacity: 5, y: 0 }} 
  transition={{ duration: 1 }}
  className={`absolute inset-0 w-full flex flex-col justify-center text-white max-w-full transition-all duration-1000 px-5 ${
    images[currentIndex].position === "left" ? "items-start ml-14" :
    images[currentIndex].position === "center" ? "items-center mx-auto text-center" :
    images[currentIndex].position === "right" ? "items-end mr-14" : ""
  }`}
>
        <h1 className="bebas-neue-word text-5xl font-bold">Spice up</h1>
        <h1 className="bebas-neue-words text-4xl">
         your meals with a random <span className="text-red-500">recipe</span>
        </h1>
        <p className="text-lg">Explore endless possibilities and uncover delicious new favorites</p>
      </motion.div>
    
      {/* Second Navbar (Bottom of Hero Image) */}
<nav className="absolute bottom-9 left-15 w-[90%] mx-auto bg-black/40 shadow-md rounded-lg px-6 py-4">
  <div className="container mx-auto flex justify-between text-white ">
      
    {/* Section 1 */}
    <div className="group">
      <h1 className="bebas-neue-logo text-2xl font-bold relative group-hover:before:w-[55%] before:w-0 before:h-[3px] before:bg-red-500 before:absolute before:top-0 before:left-0 before:transition-all before:duration-300">
        Recipes
      </h1>
      <h2 className="text-sm">Explore world recipes</h2>
    </div>

    {/* Section 2 */}
    <div className="group">
    <h1 className="bebas-neue-logo text-2xl font-bold relative group-hover:before:w-[65%] before:w-0 before:h-[3px] before:bg-red-500 before:absolute before:top-0 before:left-0 before:transition-all before:duration-300">
    Ingredients
      </h1>
      <h2 className="text-sm mr-8">Make meals in minutes</h2>
    </div>

    {/* Section 3 */}
    <div className="group">
    <h1 className="bebas-neue-logo text-2xl font-bold relative group-hover:before:w-[70%] before:w-0 before:h-[3px] before:bg-red-500 before:absolute before:top-0 before:left-0 before:transition-all before:duration-300">
    Nutrition
      </h1>
      <h2 className="text-sm">Only the best for you</h2>
    </div>
  </div>
</nav>

    </div>
    </div>
  );
}

export default Herosearch;
