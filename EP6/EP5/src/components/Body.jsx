import CardCompo from "./CardCom";
// import resList from "../utils/mockdata";
import Shimmer from "./Shimmer";

//norml js utility functions prewritten by facebook developers avalible in react library 
import { useState,useEffect } from "react";

const BodyCompo=({searchText,seacrhButtonClicked,setSearchButtonClicked})=>{

    const [btnClicked,setButtonClicked] =useState(false);

    const [loading,setLoading] =useState(false);

    //state variable - superpowerful variable
    // const [resData,setResData] =useState(resList);
    const [resData,setResData] =useState([]);
    const [searchResults,setSearchResults] =useState([]);

    // const arr= useState(resList);

     // destructuring of array 
    // const [resData, setResData] =arr; 

    
    // const resData=arr[0];
    // const setResData=arr[1];

   
 
    // useEffect - it takes 2 arguments - 1st is a callback function and 2nd is dependency array
    // if we pass empty dependency array it runs only once after initial render
    // if we pass any state variable in dependency array it runs only when that state variable changes and after initial render.
    // if we dont pass dependency array it runs after every render cycle it means after initial render and after every state variable change it runs
    // it is used to fetch data from api set up a subscription clean up the subscription manually change the DOM in react  avoid memory leaks optimize the performance of the app
    
    useEffect(()=>{

        if(seacrhButtonClicked){

            const filtredSearchlist = resData.filter((res)=>{
               const name= res?.info?.name?.toLowerCase() || "";
               const cuisines= res?.info?.cuisines?.join(" ").toLowerCase() || "";

               return (
                name.includes(searchText.toLowerCase()) ||
                cuisines.includes(searchText.toLowerCase())
              );
            })
          



            setSearchResults(filtredSearchlist);
            setSearchButtonClicked(false);

         }

    },[seacrhButtonClicked])

    useEffect(()=>{

        fetchRestorantsList()


    },[])

    const fetchRestorantsList= async()=>{


        try{

            setLoading(true);

            const response= await fetch("https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999")

            const json= await response.json();
            console.log(json);
    
            setResData(json?.data?.cards[4].card.card?.gridElements.infoWithStyle.restaurants)
           
            setSearchResults(json?.data?.cards[4].card.card?.gridElements.infoWithStyle.restaurants)
            setLoading(false);


        }

        catch(error){
            setLoading(false);

            console.log("Eroor acured ",error)
        }

       



    }



    
    //normal js variable
    // let resdata2=[resList];

    const handleClick=(e)=>{
        const filteredList = resData.filter((res)=>{
            return res?.info?.avgRating >=4.4;    
        })

        setButtonClicked(true);
        console.log(filteredList);

        setResData(filteredList);


    }

    const handleSellAll=(e)=>{
        // setResData(resData);
        fetchRestorantsList()
        setButtonClicked(false);
    }

  
 
    return(
        <>
        <div className="mainContainer">
            <div>
                {
                    btnClicked ? <button 
                    onClick={(e)=>{handleSellAll(e)}}className="btn">
                       see All restorants
                    </button>
                    : <button 
                    onClick={(e)=>{handleClick(e)}}
                    className="btn">see highly rated restorants</button>

                } 
            </div>


          <div className="cardDiv">

          {
            
            searchResults.length === 0 && loading ===true  ? 
            <div>
            <Shimmer />
            </div>
            
            : searchResults.map((res)=>{
               
                return(
                    <CardCompo 
                    resData={res}
                    key={res?.info?.id}
                     />
                )
            })
           }


          </div>
        </div>
        </>
    )

}

export default BodyCompo;
