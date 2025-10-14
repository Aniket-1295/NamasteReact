import CardCompo from "./CardCom";
import resList from "../utils/mockdata";

//norml js utility functions prewritten by facebook developers avalible in react library 
import { useState } from "react";

const BodyCompo=()=>{

    const [btnClicked,setButtonClicked] =useState(false);

    //state variable - superpowerful variable
    const [resData,setResData] =useState(resList);

    const arr= useState(resList);

     // destructuring of array 
    // const [resData, setResData] =arr; 

    
    // const resData=arr[0];
    // const setResData=arr[1];



    
    //normal js variable
    let resdata2=[resList];

    const handleClick=(e)=>{
        const filteredList = resList.filter((res)=>{
            return res.Rating >=4.0;    
        })

        setButtonClicked(true);
        console.log(filteredList);

        setResData(filteredList);


    }

    const handleSellAll=(e)=>{
        setResData(resList);
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
            
            resData.length &&  
            resData.map((res)=>{
               
                return(
                    <CardCompo 
                    resData={res}
                    key={res.id}
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
