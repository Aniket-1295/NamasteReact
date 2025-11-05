import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {

    const error =useRouteError()

    console.log(error)
  return (
    <div>
      <h2>{error.status}</h2>
        <h1>
            OOPS {error.statusText} !!
        </h1>
        
        

    </div>
  )
}

export default Error