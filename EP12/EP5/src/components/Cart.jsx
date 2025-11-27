import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/userContext";
import { useSelector,useDispatch } from "react-redux";
import ListIteamCarda from "./ListIteamCards";
import clearCart from "../utils/slices/cartSlice";



const Cart =()=>{

    const navigate = useNavigate();
    const {logidInUser} = useContext(userContext);
  
    //be carefull while subscribing to the store always subscribe to the small portion of the store 
    //rather than the whole store. cause it will cause unnecessary performance issue.
    const cartIteam = useSelector((store)=>store.cart.items);
    console.log(cartIteam);

    //never ever do this => whenever the any part of the store changes it will updte the store variable and thats how it causes performance issue
    
    // const store = useSelector((store)=>store);
    //const cartIteam = store.cart.items;

    const dispatch = useDispatch();


    const handleClearCart =()=>{

        dispatch(clearCart())

    }





    const backButtonClicked=()=>{
        navigate('/')
    }
    return(
        <>
        <div>
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5"
             onClick={backButtonClicked}>
            {/* <Link to="/">Back</Link> */}
            Back
            </button>
        </div>

        <div className="text-center">
            <span>Cart section for : </span>
            <span className="text-red-600 ">{logidInUser}</span>
        </div>

        <div className="text-center w-6/12  m-auto">
            <h1 className="text-3xl font-bold">Cart Items</h1>
            <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-5 cursor-pointer"
            onClick={handleClearCart} 
            >clear cart</button>
            <ListIteamCarda list={cartIteam} />
        </div>
        
        </>
    )
}

export default Cart;