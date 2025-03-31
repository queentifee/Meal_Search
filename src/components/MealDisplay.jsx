import React, { useEffect } from "react";
import { X } from "lucide-react"; // Close button icon

const MealDisplay = ({ selectedMeal, closeModal }) => {

  useEffect(() => {
    if (selectedMeal) {
      document.documentElement.classList.add("overflow-hidden"); // Prevent scrolling
    } else {
      document.documentElement.classList.remove("overflow-hidden"); // Allow scrolling
    }

    return () => {
      document.documentElement.classList.remove("overflow-hidden"); // Cleanup
    };
  }, [selectedMeal]);
    
  if (!selectedMeal) return null;

  

  // Extract ingredients dynamically
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = selectedMeal[`strIngredient${i}`];
    const measure = selectedMeal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className="fixed inset-0 bg-[#D1D5DB9C] backdrop-blur-[3px] flex justify-center items-center z-50 p-2">

<div className="relative item-center justify-center bg-white rounded-lg shadow-lg w-full max-w-3xl p-6 max-h-[95vh] overflow-y-auto">

      {/* <div className="bg-white rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto relative p-6"> */}
      
        {/* Close Button */}
        <button
          className="absolute top-1 right-1 bg-red-500 rounded-full text-white"
          onClick={closeModal}
        >
          <X size={24} />
        </button>

        {/* Meal Image */}
        <img
          src={selectedMeal.strMealThumb}
          alt={selectedMeal.strMeal}
          className="w-full h-60 object-cover rounded-lg mb-4"
        />

        {/* Meal Name */}
        <h2 className="text-2xl font-bold text-gray-800">{selectedMeal.strMeal}</h2>

        {/* Cuisine & Category */}
        <div className="mt-2 text-gray-700">
          <p><strong>Cuisine:</strong> {selectedMeal.strArea}</p>
          <p><strong>Category:</strong> {selectedMeal.strCategory}</p>
        </div>

        {/* Ingredients */}
        <h3 className="mt-4 text-lg font-semibold">Ingredients</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          {ingredients.length > 0 ? (
            ingredients.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <p className="text-sm text-gray-500">No ingredients available.</p>
          )}
        </ul>

        {/* Instructions */}
        <h3 className="mt-4 text-lg font-semibold">Instructions</h3>
        <p className="text-sm text-gray-700 leading-relaxed">{selectedMeal.strInstructions}</p>

        {/* Close Button */}
        <button
          className="mt-6 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition w-full"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MealDisplay;
