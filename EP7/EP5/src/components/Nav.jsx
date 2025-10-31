
import { useState } from "react";
import { Link } from "react-router-dom";
const NavCompo=()=>{


    //js variable
    let btnText="Login";

    const [btntxt,setBtntxt] =useState("Login");

    return(
        <>
        <div className="navContainer">
            <ul>
                <li 
               
                className="listItems" >
                    <Link to="/">Home</Link>
                    </li>
                <li className="listItems">
                <Link to="/about">About US</Link>
                    
                    </li>
                <li className="listItems">
                <Link to="/contect">Contect US</Link>
                    </li>
                    
                <li className="listItems">
                    <Link to="/cart">Cart</Link>
                    </li>
                <button onClick={()=>{
                    // btnText="Logout"
                    setBtntxt((prev)=>
                    {
                        return (
                            prev ==="Login" ? 'Logout' :'Login'
                        )
                    })
                    console.log(btntxt)
                }}>{btntxt}</button>
            </ul>

        </div>
        </>
    )

}

export default NavCompo;
