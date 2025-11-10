
// import { useState } from "react";
const SearchCompo=({searchText,setSearchText,setSearchButtonClicked})=>{

    //move to App.js for props drilling and state lifting 
    // const [searchText,setSearchText] =useState("")

    return(
        <>

        <div className="searchContainer">
            <input
            className="searchInput"
            type="search"
            placeholder="Search for restaurant,cuisine or a dish"
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}

            />

            <button
            onClick={()=>{
                console.log("search button clicked ",searchText);
                return setSearchButtonClicked(true);
            }}
            
            className="btn-search">Search</button>
        </div>
        </>

    )

}

export default SearchCompo;