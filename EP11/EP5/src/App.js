import HeaderCompo from "./components/Header";
// import BodyCompo from "./components/Body";
import { use, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import userContext from "./utils/userContext";
import { USER_API_URL } from "./utils/constants";
import useFetch from "./utils/hooks/useFetch";

const App = () => {
  //the state is lifted to the common parent component - App.js
  const [searchText, setSearchText] = useState("");
  const [seacrhButtonClicked, setSearchButtonClicked] = useState(false);

  const [userName,setUserName] =useState("");

  const {data} = useFetch(`${USER_API_URL}/api/v1/users`);
  console.log(data);

  useEffect(()=>{

    if(data){
      setUserName(data);
    }

  },[data])

 
  return (
    <>
      <userContext.Provider value={{
        logidInUser:userName,
        setUserName

      }}>
        {/* This is called prop drilling  */}
        <HeaderCompo
          searchText={searchText}
          setSearchText={setSearchText}
          setSearchButtonClicked={setSearchButtonClicked}
        />
        <hr />

        {/* This is called prop drilling  */}
        {/* <BodyCompo searchText={searchText} seacrhButtonClicked={seacrhButtonClicked} setSearchButtonClicked={setSearchButtonClicked}  /> */}

        <Outlet
          context={{
            searchText,
            seacrhButtonClicked,
            setSearchButtonClicked,
          }}
        />
      </userContext.Provider>
    </>
  );
};

export default App;
