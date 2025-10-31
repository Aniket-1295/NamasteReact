import React, { use } from 'react'
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import {MENU_API_URL} from '../utils/constants';

const ResMenue = () => {

    const {resID} =useParams();

    console.log("ResMenue id ",resID);

    const [resInfo,setResInfo]=useState(null);



    useEffect(()=>{

        fetchMenue();

    },[])

    const fetchMenue = async ()=>{

        try{

            const response= await fetch(MENU_API_URL+ resID);

            const json= await response.json();
            console.log("Menue data ",json);
            
            setResInfo(json?.data);



        }
        catch(error){
            console.log("Error accured ",error)
        }
         
    }

    const {name,avgRating,cuisines} =resInfo?.cards[2]?.card?.card?.info || {}

    const {title,itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {}






  return (
    <>
    <div className='menue-container'>

        <h1>{name}</h1>
        <h2>{avgRating}</h2>
        <h3>{cuisines?.join(', ')}</h3>

        <h1>{title}</h1>
        <ul>
            {
                itemCards?.map((iteam)=>{
                    return(
                        <li key={iteam?.card?.info?.id}>
                            {iteam?.card?.info?.name}
                        </li>
                    )
                })

            }
            {/* <li>{itemCards[0]?.card?.info?.name}</li>
            <li>{itemCards[1]?.card?.info?.name}</li>
            <li>{itemCards[2]?.card?.info?.name}</li> */}
        </ul>




    </div>
    </>
  )
}

export default ResMenue