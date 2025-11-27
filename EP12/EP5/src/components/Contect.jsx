import React from 'react'
import { useEffect } from 'react'



const Contect = () => {

  useEffect(()=>{

    console.log("contect page mounted")

    let timer =setInterval(()=>{
      console.log("hello from contect page")
    },1000)

    return ()=>{
      console.log("contect page unmounted")
      clearInterval(timer)
    }

  },[])

  console.log("contect component rendered")
  return (
    <div>Contect Page</div>
  )
}

export default Contect