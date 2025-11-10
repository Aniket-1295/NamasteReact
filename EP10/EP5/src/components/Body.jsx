import CardCompo from "./CardCom";

import Shimmer from "./Shimmer";

import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";
import { swiggy_API_URL } from "../utils/constants";
import useFetch from "../utils/hooks/useFetch";

import useOnlineStatus from "../utils/hooks/useOnlineStatus";

const BodyCompo = () => {
  const onlineStatus = useOnlineStatus();

  const { searchText, seacrhButtonClicked, setSearchButtonClicked } =
    useOutletContext();

  const [btnClicked, setButtonClicked] = useState(false);

  // const [loading,setLoading] =useState(false);

  const [resData, setResData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (seacrhButtonClicked) {
      const filtredSearchlist = resData.filter((res) => {
        const name = res?.info?.name?.toLowerCase() || "";
        const cuisines = res?.info?.cuisines?.join(" ").toLowerCase() || "";

        return (
          name.includes(searchText.toLowerCase()) ||
          cuisines.includes(searchText.toLowerCase())
        );
      });

      setSearchResults(filtredSearchlist);
      setSearchButtonClicked(false);
    }
  }, [seacrhButtonClicked]);

  // useEffect(()=>{

  //     fetchRestorantsList()

  // },[])

  // const fetchRestorantsList= async()=>{

  //     try{

  //         setLoading(true);

  //         const ressponse = await fetch(swiggy_API_URL);

  //         const json= await ressponse.json();

  //         setResData(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //         setSearchResults(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  //          setLoading(false);

  //     }

  //     catch(error){
  //         setLoading(false);

  //         console.log("Eroor acured one ",error)
  //     }

  // }

  //here we dont handle the api responses like loading error because we are using useFetch custom hook
  
  
  const { data: res, loading, error } = useFetch(swiggy_API_URL);

  useEffect(() => {
    if (res) {
      setResData(
        res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setSearchResults(
        res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
  }, [res]);

  const handleClick = (e) => {
    const filteredList = resData.filter((res) => {
      return res?.info?.avgRating >= 4.4;
    });

    setButtonClicked(true);
    console.log(filteredList);

    setSearchResults(filteredList);
  };

  const handleSellAll = (e) => {
   
    setSearchResults(resData);
    setButtonClicked(false);
  };


  if(onlineStatus ===false){
    return (
      <div className="mainContainer">

        {/* react doesnt run the setTimeout nsde render */}
        {/* {
            setTimeout(()=>{

                return(
                    <Shimmer />
                )

            },3000)


        } */}
        <h1>🔴 You are offline please check your internet connection </h1>
       
      </div>
    );
  }



  //here we just concern about just rendring the data we are not concered about API responses, loading and error states because we are using useFetch custom hook
  //this is called separation of concerns or single responsibility principle
  //each component  should have a single responsibility 

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center my-4">
          {btnClicked ? (
            <button
              onClick={(e) => {
                handleSellAll(e);
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
            >
              See All Restaurants
            </button>
          ) : (
            <button
              onClick={(e) => {
                handleClick(e);
              }}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-700 cursor-pointer"
            >
              See Highly Rated Restaurants
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {searchResults?.length === 0 && loading === true ? (
            <div className="col-span-full">
              <Shimmer />
            </div>
          ) : (
            searchResults?.map((res) => {
              return (
                <Link to={"/restaurant/" + res?.info?.id} key={res?.info?.id}>
                  <CardCompo
                    resData={res}
                    key={res?.info?.id}
                  />
                </Link>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default BodyCompo;
