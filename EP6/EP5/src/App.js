import HeaderCompo from "./components/Header";
import BodyCompo from "./components/Body";
import { useState } from "react";
const App=()=>{


    //the state is lifted to the common parent component - App.js
    const [searchText, setSearchText] = useState("");
    const [seacrhButtonClicked,setSearchButtonClicked] =useState(false);

    return (
        <>

       {/* This is called prop drilling  */}
        <HeaderCompo searchText={searchText} setSearchText={setSearchText} setSearchButtonClicked={setSearchButtonClicked}  />
                <hr/>
        
         {/* This is called prop drilling  */}
        <BodyCompo searchText={searchText} seacrhButtonClicked={seacrhButtonClicked} setSearchButtonClicked={setSearchButtonClicked}  />


        </>

    )
}

export default App;