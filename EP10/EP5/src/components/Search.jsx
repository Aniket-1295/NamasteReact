
// import { useState } from "react";
const SearchCompo=({searchText,setSearchText,setSearchButtonClicked})=>{

    //move to App.js for props drilling and state lifting 
    // const [searchText,setSearchText] =useState("")

    return(
        <>

        <div className="flex gap-1 ">
            <input
            className="px-4 py-2 w-96 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" 
            type="search"
            placeholder="Search for restaurant,cuisine or a dish"
            value={searchText}
            onChange={(e)=>setSearchText(e.target.value)}

            />

            <button
            className="px-4 py-2 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={()=>{
                console.log("search button clicked ",searchText);
                return setSearchButtonClicked(true);
            }}
            
            >Search</button>
        </div>
        </>

    )

}

export default SearchCompo;