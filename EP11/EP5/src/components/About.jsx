import React from 'react'
import {Link} from 'react-router-dom'
import ExampleClass from './ExampleClass.jsx';

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

  componentDidMount(){
    console.log("parent componentDidMount called");
  }

  componentDidUpdate(){
    console.log("parent componentDidUpdate called");
  }

  render(){

    console.log("parent render");

    return (
          <>
          <div>About Page</div>
          <h1>{this.state.count}</h1>
             <button onClick={()=>{
                this.setState({
                    count:this.state.count+1
                })
             }}>clc</button>
          <br />
          <ExampleClass child="child1" />
          <ExampleClass child="child2" />
      
        <Link to="/about/services">
        <p >our other services</p>
         
        </Link>
       
          
          </>
          
          
        )


    
  }
}

export default About