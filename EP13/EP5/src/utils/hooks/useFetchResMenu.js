import { useEffect,useState } from "react";
import { MENU_API_URL } from "../constants";
const useFetchResMenu =(resID)=>{

    const [resInfo, setResInfo] =useState(null);

    useEffect(()=>{

       fetchResMenu()

    },[])

    const fetchResMenu= async ()=>{

        try{

            const response= await fetch( MENU_API_URL + resID);

            const json =await response.json();

            setResInfo(json?.data);



        }
        catch(error){

            console.log("Error accured ",error)

        }



    }

    return resInfo;



}

export default useFetchResMenu;