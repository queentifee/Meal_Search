// import React from "react";

// const SearchFields = () => {
//   return (
//     <div className="relative mx-auto px-6 lg:px-20 py-6">
    //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6 bg-gray-100 rounded-lg shadow-md">
    //     {/* Left Column */}
    //     <div className="space-y-4">
    //       <div>
    //         <label className="block text-gray-700 text-lg font-semibold">Search by Name</label>
    //         <input 
    //           type="text" 
    //           placeholder="Enter meal name" 
    //           className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400" 
    //         />
    //       </div>
    //       <div>
    //         <label className="block text-gray-700 text-lg font-semibold">Search by Category</label>
    //         <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400">
    //           <option>Select Category</option>
    //           <option>Beef</option>
    //           <option>Breakfast</option>
    //           <option>Chicken</option>
    //           <option>Desert</option>
    //           <option>Goat</option>
    //           <option>Lamb</option>
    //           <option>Miscellaneous</option>
    //           <option>Pasta</option>
    //           <option>Seafood</option>
    //           <option>Side</option>
    //           <option>Starter</option>
    //           <option>Vegetarian</option>
    //           <option>Vegan</option>
    //         </select>
    //       </div>
    //     </div>

    //     {/* Right Column */}
    //     <div className="space-y-4">
    //     <div>
    //         <label className="block text-gray-700 text-lg font-semibold">Search by Cuisine</label>
    //         <select className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400">
    //           <option>Select Cuisine</option>
    //           <option>American</option>
    //           <option>British</option>
    //           <option>Canadian</option>
    //           <option>Chinese</option>
    //           <option>French</option>
    //           <option>Italian</option>
    //           <option>Jamaican</option>
    //           <option>Mexican</option>
    //           <option>Spanish</option>
    //           <option>Side</option>
    //         </select>
    //       </div>
    //       <div>
    //         <label className="block text-gray-700 text-lg font-semibold">Random Search</label>
    //         <button className="w-full p-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition">Surprise Me!</button>
    //       </div>
    //     </div>
    //   </div>
//     </div>
//   );
// };

// export default SearchFields;

// import React, { useState } from "react";
// import { Search, Utensils, Globe, Shuffle, XCircle } from "lucide-react"; // Icons for buttons

// const SearchFields = () => {
//     const [search, setSearch] = useState("");
//     const [category, setCategory] = useState("");
//     const [cuisine, setCuisine] = useState("");
//     const [meals, setMeals] = useState("");
  
//     const cuisines = ["American", "British", "Italian", "Chinese", "Mexican", "Indian", "French", "Japanese"];
//     const categories = ["Beef" , "Breakfast", "Chicken", "Dessert", "Pasta", "Porl", "Seafood", "Side", "Starter", "Vegan", "Vegetarian"];

//   // Function to fetch meals based on search type
//   const handleSearch = async (type, query = "") => {
//     let url = "";

//     if (type === "search") {
//       url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
//     } else if (type === "category") {
//       url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
//     } else if (type === "cuisine") {
//       url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${cuisine}`;
//     } else if (type === "random") {
//       url = `https://www.themealdb.com/api/json/v1/1/random.php`;
//     }

//     try {
//       const response = await fetch(url);
//       const data = await response.json();

//       if (data.meals) {
//         setMeals(data.meals);
//         console.log(`Results for ${type}:`, data.meals);
//       } else {
//         setMeals([]);
//         console.log("No results found.");
//       }
//     } catch (error) {
//       console.error("Error fetching meals:", error);
//     }
//   };
//   const clearMeals = () => {
//     setMeals([]);
//     setSearch("");
//     setCategory("")
//     setCuisine("") 
//     // Clears input field
//   };

//   return (
//     <div className="relative mx-auto px-6 lg:px-20 py-10">
//       {/* Search Fields Section */}
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Left Section */}
//         <div className="w-full lg:w-[50%] space-y-4">
//           {/* Search by Name */}
//           <div className="flex items-center space-x-2 border border-gray-300 p-2 rounded-lg">
//             <Search size={20} className="text-red-500" />
//             <input
//               type="text"
//               placeholder="Search by Name"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//               className="w-full outline-none bg-transparent text-gray-800"
//             />
//             <button
//               onClick={() => handleSearch("search")}
//               className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-400 transition"
//             >
//               Search
//             </button>
//           </div>

//            {/* Right Section */}
//         <div className="space-y-4">
//           {/* Search by Cuisine */}
//           <div className="flex items-center border border-gray-300 rounded-lg p-3 shadow-sm bg-white">
//             <Utensils size={20} className="text-red-500 mr-3" />
//             <select
//               className="w-full outline-none bg-transparent"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//             >
//               <option value="">Select Category</option>
//               {categories.map((category, index) => (
//                 <option key={index} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//             <button
//               onClick={() => handleSearch("category")}
//               className="ml-2 px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
//             >
//               Search
//             </button>
//           </div>

//         </div>
//         </div>

//         {/* Right Section */}
//         <div className="w-full lg:w-[50%] space-y-4">
//           {/* Search by Cuisine */}

//           <div className="flex items-center border border-gray-300 rounded-lg p-3  focus:outline-none focus:ring-2 focus:ring-red-400">
//             <Globe size={20} className="text-red-500 mr-3" />
//             <select
//               className="w-full outline-none bg-transparent"
//               value={cuisine}
//               onChange={(e) => setCuisine(e.target.value)}
//             >
//               <option value="">Select Cuisine</option>
//               {cuisines.map((cuisine, index) => (
//                 <option key={index} value={cuisine}>
//                   {cuisine}
//                 </option>
//               ))}
//             </select>
//             <button
//               onClick={() => handleSearch("cuisine")}
//               className="ml-2 px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
//             >
//               Search
//             </button>
//           </div>


//           {/* Random Meal Button */}
//           <div className="flex justify-center">
//             <button
//               onClick={() => handleSearch("random")}
//               className="flex items-center space-x-2 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-400 transition"
//             >
//               <Shuffle size={20} />
//               <span>Random Meal</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Display Results */}
//       <div className="mt-8">
//         {meals.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {meals.map((meal, index) => (
//               <div key={index} className="border rounded-lg overflow-hidden shadow-lg">
//               <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
//               <div className="p-4">
//                   <h3 className="text-lg font-bold text-gray-800">{meal.strMeal}</h3>
//                   <p className="text-sm text-gray-600">{meal.strCategory}</p>
//                 </div>
//               </div>
//             ))}
//             <button onClick={clearMeals} className="absolute buttom-2 right-2 text-red-500 hover:text-black">
//     <XCircle size={40}  />
//   </button>
  
//           </div>
//         ) : (
//           <p className="text-center text-gray-500 mt-4"></p>
//         )}
       
//       </div>
      
      
//     </div>
//   );
// };

// export default SearchFields;

import React, { useState } from "react";
import { Search, Utensils, Globe, Shuffle, XCircle } from "lucide-react"; // Icons
import MealDisplay from "./MealDisplay";

const SearchFields = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const cuisines = ["American", "British", "Italian", "Chinese", "Mexican", "Indian", "French", "Japanese"];
  const categories = ["Beef", "Breakfast", "Chicken", "Dessert", "Pasta", "Pork", "Seafood", "Side", "Starter", "Vegan", "Vegetarian"];



  const SEARCH_ENDPOINT = import.meta.env.VITE_SEARCH_BY_NAME_ENDPOINT;
  const CATEGORY_ENDPOINT = import.meta.env.VITE_SEARCH_BY_CATEGORY_ENDPOINT;
  const CUISINE_ENDPOINT = import.meta.env.VITE_SEARCH_BY_CUISINE_ENDPOINT;
  const RANDOM_ENDPOINT = import.meta.env.VITE_SEARCH_RANDONLY_ENDPOINT;
  const MEAL_DETAILS_ENDPOINT= import.meta.env.VITE_GET_MEAL_DETAILS_ENDPOINT;
  // Function to fetch meals based on search type
  const handleSearch = async (type) => {
    let url = "";

    if (type === "search") {
      url = `${SEARCH_ENDPOINT}${search}`;
    } else if (type === "category") {
      url = `${CATEGORY_ENDPOINT}${category}`;
    } else if (type === "cuisine") {
      url = `${CUISINE_ENDPOINT}${cuisine}`;
    } else if (type === "random") {
      url = `${RANDOM_ENDPOINT}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };

  // Function to fetch full meal details
  const openModal = async (id) => {
   
    try {
      const response = await fetch(`${MEAL_DETAILS_ENDPOINT}${id}`);
      const data = await response.json();

      if (data.meals) {
        setSelectedMeal(data.meals[0]);
      }
    } catch (error) {
      console.error("Error fetching meal details:", error);
    }
    
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedMeal(null);
  };

  // Function to clear meal results
  const clearMeals = () => {
    setMeals([]);
    setSearch("");
    setCategory("");
    setCuisine("");
  };
  

  return (
    <div className="relative mx-auto px-6 lg:px-20 py-10">
      {/* Search Fields Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-[50%] space-y-4">
          {/* Search by Name */}
          <div className="flex items-center space-x-2 border border-gray-300 p-2 rounded-lg">
            <Search size={20} className="text-red-500" />
            <input
              type="text"
              placeholder="Search by Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none bg-transparent text-gray-800"
            />
            <button
              onClick={() => handleSearch("search")}
              disabled={!search.trim()}  // Disable if input is empty
              className={`px-4 py-2 rounded-lg transition ${
                search.trim()
                  ? "bg-red-500 text-white hover:bg-red-400"
                  : "bg-red-500 text-white hover:bg-red-400 cursor-not-allowed"
              }`}
            >            
              Search
            </button>
          </div>

          {/* Search by Category */}
          <div className="flex items-center border border-gray-300 rounded-lg p-3 shadow-sm bg-white">
            <Utensils size={20} className="text-red-500 mr-3" />
            <select
              className="w-full outline-none bg-transparent"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <button
              onClick={() => handleSearch("category")}
              className="flex items-center space-x-2 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-400 transition"
            >
              Search
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[50%] space-y-4">
          {/* Search by Cuisine */}
          <div className="flex items-center border border-gray-300 rounded-lg p-3">
            <Globe size={20} className="text-red-500 mr-3" />
            <select
              className="w-full outline-none bg-transparent"
              value={cuisine}
              onChange={(e) => setCuisine(e.target.value)}
            >
              <option value="">Select Cuisine</option>
              {cuisines.map((cuisine, index) => (
                <option key={index} value={cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>
            <button
              onClick={() => handleSearch("cuisine")}
              className="flex items-center space-x-2 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-400 transition"
            >
              Search
            </button>
          </div>

          {/* Random Meal Button */}
          <div className="flex justify-center">
            <button
              onClick={() => handleSearch("random")}
              className="flex items-center space-x-2 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-400 transition"
            >
              <Shuffle size={20} />
              <span>Random Meal</span>
            </button>
          </div>
        </div>
      </div>

      {/* Display Results */}
      <div className="mt-8">
        {meals.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {meals.map((meal) => (
              <div key={meal.idMeal} className="border rounded-lg overflow-hidden shadow-lg">
                <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-800">{meal.strMeal}</h3>
                  <p className="text-sm text-gray-600">{meal.strCategory}</p>
                  <button
                    onClick={() => openModal(meal.idMeal)}
                    className="mt-3 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
            <button onClick={clearMeals} className="absolute bottom-2 right-2 text-red-500 hover:text-black">
              <XCircle size={40} />
            </button>
          </div>
        ) : null}
      </div>
      <MealDisplay selectedMeal={selectedMeal} closeModal={() => setSelectedMeal(null)} />


     
    </div>
  );
};

export default SearchFields;


// {selectedMeal && (
        
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
//     <div className="bg-white rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto relative p-6">
//       {/* Close Button */}
//       <button
//         className="absolute top-3 right-3 text-gray-700 hover:text-red-500"
//         onClick={closeModal}
//       >
//         <XCircle size={24} />
//       </button>

//       {/* Meal Image */}
//       <img
//         src={selectedMeal.strMealThumb}
//         alt={selectedMeal.strMeal}
//         className="w-full h-60 object-cover rounded-lg mb-4"
//       />

//       {/* Meal Name */}
//       <h2 className="text-2xl font-bold text-gray-800">{selectedMeal.strMeal}</h2>

//       {/* Cuisine & Category */}
//       <div className="mt-2 text-gray-700">
//         <p><strong>Cuisine:</strong> {selectedMeal.strArea}</p>
//         <p><strong>Category:</strong> {selectedMeal.strCategory}</p>
//       </div>

//       Ingredients
//       <h3 className="mt-4 text-lg font-semibold">Ingredients</h3>
//       <ul className="list-disc pl-5 space-y-1 text-gray-700">
//         {ingredients.length > 0 ? (
//           ingredients.map((item, index) => <li key={index}>{item}</li>)
//         ) : (
//           <p className="text-sm text-gray-500">No ingredients available.</p>
//         )}
//       </ul>

//       {/* Instructions */}
//       <h3 className="mt-4 text-lg font-semibold">Instructions</h3>
//       <p className="text-sm text-gray-700 leading-relaxed">{selectedMeal.strInstructions}</p>

//       {/* Close Button */}
//       <button
//         className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition w-full"
//         onClick={closeModal}
//       >
//         Close
//       </button>
//       </div>
//      </div>
//    )}
   