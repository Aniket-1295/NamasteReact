
import { useState } from "react";
const NavCompo=()=>{


    //js variable
    let btnText="Login";

    const [btntxt,setBtntxt] =useState("Login");

    return(
        <>
        <div className="navContainer">
            <ul>
                <li className="listItems">Home</li>
                <li className="listItems">About US</li>
                <li className="listItems">Contact US</li>
                <li className="listItems">Cart</li>
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
