import { useState,useEffect } from "react";
//finlize the contract for the hook
//it does not take any parameters
//it returns one boolean value indicating whether the user is online or offline
const useOnlineStatus =()=>{

    const [OnlineStatus,setOnlineStatus] =useState(navigator.onLine);

    console.log("Online status hook invoked ",OnlineStatus)

    //onmounting we have to add the event listeners for online and offline events
    //so here we need useEffect hook

    useEffect(()=>{

        window.addEventListener("online",()=>{
            console.log("online event detected");
            setOnlineStatus(true)
        })

        window.addEventListener("offline",()=>{
            console.log("offline event detected");
            setOnlineStatus(false);
        })
    },[])


    return OnlineStatus;

}

export default useOnlineStatus;