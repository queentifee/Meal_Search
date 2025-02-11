import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg"


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-black/75  shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-10 mr-2" />
          {/* <span className="text-xl font-bold text-green-900">Go To Meal</span> */}
          <span className="fancy-logo">Go To Meal</span>

        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8">
        {/* <h2 className="text-4xl font-bold text-orange-800 font-[Playfair] tracking-wide leading-relaxed"> */}
 
 <h2 className="fancy-heading">
  Discover Delicious Meals
</h2>


         
        </div>

        {/* Auth Buttons */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/login" className="py-2 px-4 border border-yellow-300 text-yellow-300 rounded-md hover:bg-yellow-300 hover:text-white">
            Search
          </Link> <br/>
          {/* <hi>Search for random meals or any meal of your choice</hi> */}
        </div>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white py-6 px-4 absolute top-16 left-0 w-full shadow-md">
          <div className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-green-600">Menu</Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600">Contact</Link>
            <hr />
            <Link to="/login" className="py-2 px-4 border border-green-600 text-green-600 rounded-md text-center">
              Log In
            </Link>
            <Link to="/create-account" className="py-2 px-4 bg-green-600 text-white rounded-md text-center">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
