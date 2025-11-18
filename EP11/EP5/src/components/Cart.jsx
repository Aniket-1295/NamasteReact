import { Link,useNavigate } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/userContext";



const Cart =()=>{

    const navigate = useNavigate();

    const {logidInUser} = useContext(userContext);

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
        
        </>
    )
}

export default Cart;