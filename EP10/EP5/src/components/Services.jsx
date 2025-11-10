// import React from 'react'

// const Services = () => {
//   return (
//     <div>Services</div>
//   )
// }

// export default Services

//classs based componaent

import React from 'react';
// import { Component } from 'react';

//here Services class is inheriting the properties of React.Component
class Services extends React.Component{

  constructor(props){
    //here super is used to call the constructor of parent class React.Component so that we can access 'this.props' in the constructor
    super(props);

    console.log(props)

    this.state={
      year:2025,
      date:`${3} november`
    }
  }

  render(){

    const {Service1,Service2,Service3} =this.props
 
    return(
      <>
      <h1>{this.state.date} {this.state.year}</h1>
      <button onClick={()=>{
        this.setState({
          year:this.state.year+1,
          date:`${this.state.date.split(" ")[0] } november`
        })

      }}>update the year </button>
      <h1>Our Other Services </h1>
      <h2>At Swiggy, we’re more than just food delivery.</h2>
      <p>We’re building an ecosystem that brings convenience, comfort, and joy to your everyday life.</p>


      <ul>
        <li>
          <h3>{Service1}</h3>
          <p>Need groceries or essentials right now?
          Instamart delivers everything — from fresh fruits to cleaning supplies — in minutes, right to your doorstep.</p>
          <ul>
            <li>Instant delivery (under 15–20 minutes)
            </li>
            <li>Fresh, quality products</li>
            <li>Open till late night</li>
          </ul>
        </li>
        <li>
          <h3>{Service2}</h3>
          <p>Got errands to run? Swiggy Genie is your personal assistant for pick-ups and drop-offs.
          Whether it’s sending a parcel or picking up laundry, we’ve got you covered.</p>
          <ul>
            <li>Pick up & drop anything within the city</li>
            <li>Reliable and quick delivery partners</li>
            <li>Affordable and hassle-free</li>
          </ul>

        </li>

        <li>
          <h3>💰 {Service3}</h3>
          <p>Enjoy dining out like never before with exclusive restaurant deals and discounts.</p>

          <ul>
            <li>Reserve tables instantly</li>
            <li>Get up to 50% off on your bill</li>
            <li>Earn and redeem rewards</li>
          </ul>

        </li>

      </ul>
      </>


    )
  }
}


export default Services;