import React, { use } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
import useFetch from "../utils/hooks/useFetch";
import ItemCategoryList from "./IreamCategoryList";


const ResMenue = () => {
  const { resID } = useParams();



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

  const { title, itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};


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

      <div>
            {

                iteamCatogary && iteamCatogary.map((items)=>{
                    return(
                        <ItemCategoryList

                        key={items?.card?.card?.title}
                        data={items?.card?.card}
                         />

                    )
                })

            }




        </div>
    </>
  );
};

export default ResMenue;
