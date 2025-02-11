import React from "react";
import SearchSection from "../components/SearchSection";
import SearchFields from "../components/SearchFields";
import Herosearch from "../components/HeroSearch";
import Footer from '../components/footer';
function Search  () {
    return (
        <>
        <Herosearch/>
<SearchSection/>
<SearchFields/>
<Footer/>
</>
    )
}

export default Search