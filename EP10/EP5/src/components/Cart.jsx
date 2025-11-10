import { Link,useNavigate } from "react-router-dom";
const Cart =()=>{

    const navigate = useNavigate();

    const backButtonClicked=()=>{
        navigate('/')
    }
    return(
        <>
        <div>
            <button onClick={backButtonClicked}>
            {/* <Link to="/">Back</Link> */}
            Back
            </button>
        </div>

        <div>
            <h1>Cart section</h1>
        </div>
        
        </>
    )
}

export default Cart;