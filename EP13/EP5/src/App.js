import HeaderCompo from "./components/Header";
import userContext from "./utils/userContext";
import appStore from "./utils/appStore";

import { useState } from "react";
import { Outlet } from "react-router-dom";
import {Provider} from 'react-redux';



const App = () => {
 
  const [searchText, setSearchText] = useState("");
  const [seacrhButtonClicked, setSearchButtonClicked] = useState(false);

  const [userName,setUserName] =useState("Anonymous");

  return (
    <>
    <Provider store={appStore}>
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
      </Provider>
    </>
  );
};

export default App;
