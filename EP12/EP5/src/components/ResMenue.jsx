import React, { use } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import useFetch from "../utils/hooks/useFetch";
import ItemCategoryList from "./IreamCategoryList";
import { useState } from "react";


const ResMenue = () => {
  const { resID } = useParams();

  //now parent component can control the state of all the child component
  //now all the cild components become controlled component.
  //this called lifting of state we lift the state of each child component to the parent component. now all the child component have shared state.it doent hold there own state.
  const [showList,setShowList]= useState(null);

  // const [resInfo,setResInfo]=useState(null);

  // useEffect(()=>{

  //     fetchMenue();

  // },[])

  // const fetchMenue = async ()=>{

  //     try{

  //         const response= await fetch(MENU_API_URL+ resID);

  //         const json= await response.json();
  //         console.log("Menue data ",json);

  //         setResInfo(json?.data);

  //     }
  //     catch(error){
  //         console.log("Error accured ",error)
  //     }

  // }

  const { data: resInfo, loading, error } = useFetch(MENU_API_URL + resID);
//   console.log(resInfo);
  // const resInfo = useFetchResMenu(resID);

  const { name, avgRating, costForTwo, cuisines } =
    resInfo?.cards[2]?.card?.card?.info || {};

  // const { title, itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
  //     ?.card || {};


    const iteamCatogary = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((iteam)=>{
        return(
            iteam?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        )
    })

    // console.log(iteamCatogary)

  return (
    <>
      <div className="text-center jsutify-center my-4 w-11/12 mx-auto">
        <div className="flex flex-col items-start space-y-2">
          <h1 className="font-extrabold text-2xl text-gray-800">{name}</h1>
          <span className="text-lg text-yellow-500">{avgRating} ★</span>
          <span>{costForTwo}</span>
          <h3 className="text-sm font-bold text-orange-600">
            {cuisines?.join(", ")}
          </h3>
        </div>

       
      </div>
ś
      <div>
            {

                iteamCatogary && iteamCatogary.map((items,index)=>{
                    return(
                        <ItemCategoryList
                        key={items?.card?.card?.title}
                        data={items?.card?.card}
                        showList={items?.card?.card?.title === showList?true :false}
                        setShowList={setShowList}
                         />

                    )
                })

            }




        </div>
    </>
  );
};

export default ResMenue;
