
import { useState,useEffect } from "react";
const NavCompo=()=>{


    //js normal  variable
    let btnText="Login";
    
    //state variable 
    const [btntxt,setBtntxt] =useState("Login");

    // console.log(useState())co
    console.log(btntxt)

    useEffect(()=>{

        console.log("called only after intial render... ")

    },[])

    useEffect(()=>{

        console.log("called after every render...")
    })


    useEffect(()=>{

        console.log("called after only dependency array change... ")


    },[btntxt])









    return(
        <>
        <div className="navContainer">
            <ul>
                <li className="listItems">Home</li>
                <li className="listItems">About US</li>
                <li className="listItems">Contact us</li>
                <li className="listItems">Cart</li>
                <button onClick={()=>{
                    // btnText="Logout"
                    setBtntxt((prev)=>
                    {
                        return (
                            prev ==="Login" ? 'Logout' :'Login'
                        )
                    })
                    // console.log(btntxt)
                }}>{btntxt}</button>
            </ul>

        </div>
        </>
    )

}

export default NavCompo;
