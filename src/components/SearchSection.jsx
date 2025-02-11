// import React from "react";

// import { useState } from 'react';

// const Search = () => {
//   const [message, setMessage] = useState('');

  

//   const handleClick = () => {
//     setMessage('Button clicked');
//     console.log('Button clicked');
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//       <p>{message}</p>
//     </div>
//   );
// };

// export default App;

function SearchSection () {
    return (
        
<div className="container mx-auto px-6 lg:px-20 py-10">
{/* Title */}
<h2 className="bebas-neue-goals text-left my-2 text-2xl font-bold text-black">
SEARCH</h2>

  {/* Line Section */}
  <div className="relative w-4/4 mx-auto">
    {/* Black Line (Bottom) */}
    <div className="w-full h-0.5 bg-gray-200 " ></div>
    {/* White Line (Top) */}
    <div className="w-32 mb-0.5 h-0.5 bg-red-500"></div>

  </div>
  </div>
    )}

    export default SearchSection;