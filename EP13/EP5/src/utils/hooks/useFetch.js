import { useState,useEffect } from "react"

const useFetch =(url)=>{

    const [data,setData] =useState(null);
    const [loading,setLoading] =useState(false);
    const [error,setError] =useState(null);

    useEffect(()=>{

        fetchData(url);
    },[url])

    const fetchData = async(url)=>{

        if(!url) return;

        try{
            setLoading(true);

            const response = await fetch(url);

            if(!response.ok){

                throw new Error ("Network response was not ok")

            }

            const json = await response.json();

            setData (json?.data || json);
            

        }
        catch(error){
           
            setError(error);
        }
        finally {
            setLoading(false);
          }



    }


    return {data,loading, error}
}

export default useFetch;