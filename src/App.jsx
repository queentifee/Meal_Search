import React from "react";
import Homepage from "./pages/homepage"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./pages/search";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
       <Route path="/search" element={<Search/>}/>
      </Routes>
    </Router>
  );
}
export default App;
