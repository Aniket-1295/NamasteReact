import { useDispatch } from "react-redux";
import { addItems } from "../utils/slices/cartSlice";
import { compose } from "@reduxjs/toolkit";

const ListIteamCarda = ({ list }) => {

  const dispatch = useDispatch();
  

  const handleAddToCart =(card)=>{

    // console.log(card)
    dispatch(addItems(card));
   
  }



  return (
    <>
      {list.map((card) => {
        return (
          <div 
          className="flex justify-between border-b p-4 "
         
          key={card?.card?.info?.id}>
            <div className="">
            <h2 className="font-bold text-gray-800">
              {card?.card?.info?.name}
            </h2>
           

            <span className="text-gray-600 ">
            ₹{card?.card?.info?.price / 100}
            </span>
            <p className="text-gray-600 text-sm mt-2  pb-2">{
                card?.card?.info?.description
                }</p>
            </div>

            <div>
              <div className="flex flex-col ">
            <img
            className="w-32 h-32 object-cover rounded-lg mt-2 mb-0"  
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/8/29/a8a8d763-c6fd-4ae0-97df-007054225b23_3dfd797c-7bc1-4592-83d8-04f31700f321.jpg_compressed" alt="" />
            </div>
            <button
            
            //Don’t pass the event into Redux. Don’t pass JSX or DOM nodes into Redux.
            //Only pass plain data
            //plain objects/arrays of strings, numbers, booleans and null are allowed to be passed to Redux actions 
            onClick={()=>handleAddToCart(card?.card?.info)}
             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded h-10 w-20  cursor-pointer">Add</button>

            </div>

          </div>
        );
      })}
    </>
  );
};

export default ListIteamCarda;
