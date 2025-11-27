import React from 'react'
import {Link} from 'react-router-dom'
import userContext from '../utils/userContext';
// import ExampleClass from './ExampleClass.jsx';

// const About = () => {
//   return (
//     <>
//     <div>About Page</div>

//   <Link to="/about/services">
//   <p >our other services</p>
   
//   </Link>
 
    
//     </>
    
    
//   )
// }

class About extends React.Component{
  constructor(){
    super();

     console.log("parent constructor");

     this.state={
      count:0
  }

    

  }

  render(){

   
    return (
          <>
          <div className='text-center m-5'>About Page

          <Link
          className='bg-blue-500 hover:bg-blue-700 text-black font-bold py-2  rounded m-5'
           to="/about/services">
       
          <button>our other services</button>
        </Link>
          </div>

          <div className='text-center'>
            {
              <userContext.Consumer>
                {
                  ({logidInUser})=>{
                    return <h1>{logidInUser}</h1>
                  }
                }

              </userContext.Consumer>
            }

          </div>

        
      
       
       
          
          </>
          
          
        )


    
  }
}

export default About