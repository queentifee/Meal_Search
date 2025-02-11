import React from 'react';
// import Navbar from "../components/Navbar"
import Herosection from '../components/Herosection';
import ImageCarousel from '../components/ImageCarousel';
import Goals from "../components/Goals"
import MealTips from '../components/MealTips';
import SearchNow from '../components/SearchNow';
import Footer from "../components/footer";
import Reviews from '../components/Review';
import SearchSection from '../components/SearchSection'
import SearchFields from '../components/SearchFields';


function Homepage() {
    return (
        <>
                         <Herosection />
                         {/* <Goals/> */}
        <div className="max-w-full mx-auto pt- px-3">
          <Goals/>
          <SearchSection/>
          <SearchFields/>
          <MealTips/>
          <ImageCarousel/>
          <SearchNow/>
          <Reviews/>
          <Footer/>

          </div>
        </>
        
    );
}
 export default Homepage;