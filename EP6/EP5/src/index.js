import React from "react";
import ReactDOM from "react-dom/client";
// import HeaderCompo from "./components/Header";
// import BodyCompo from "./components/Body";
import App from "./App";

// const resList=[
//     {
//         resName:"Burger King",
//         id:1,
//         Prise:"₹300 FOR TWO",
//         Rating:"4.5",
//         Cusine:"Burger, Fast Food"

//     },
//     {
//         resName:"Pizza Hut",
//         id:2,
//         Prise:"₹500 FOR TWO",
//         Rating:"4.2",
//         Cusine:"Pizza, Fast Food"

//     },
//     {
//         resName:"Subway",
//         id:3,
//         Prise:"₹400 FOR TWO",
//         Rating:"4.0",
//         Cusine:"Healthy Food, Fast Food"

//     },
//     {
//         resName:"KFC",
//         id:4,
//         Prise:"₹350 FOR TWO",
//         Rating:"4.3",
//         Cusine:"Chicken, Fast Food"

//     },
//     {
//         resName:"Domino's",
//         id:5,
//         Prise:"₹450 FOR TWO",
//         Rating:"4.1",
//         Cusine:"Pizza, Fast Food"

//     },
//     {
//         resName:"McDonald's",
//         id:6,
//         Prise:"₹300 FOR TWO",
//         Rating:"4.4",
//         Cusine:"Burger, Fast Food"

//     },
//     {
//         resName:"Taco Bell",
//         id:7,
//         Prise:"₹350 FOR TWO",
//         Rating:"4.2",
//         Cusine:"Mexican, Fast Food"

//     },
//     {
//         resName:"Wendy's",
//         id:8,
//         Prise:"₹400 FOR TWO",
//         Rating:"4.0",
//         Cusine:"Burger, Fast Food"

//     },
//     {
//         resName:"Popeyes",
//         id:9,
//         Prise:"₹450 FOR TWO",
//         Rating:"4.3",
//         Cusine:"Chicken, Fast Food"

//     },
//     {
//         resName:"Chipotle",
//         id:10,
//         Prise:"₹500 FOR TWO",
//         Rating:"4.1",
//         Cusine:"Mexican, Fast Food"
//     }
    
// ]


// const LogoCompo=()=>{

//     return(
//         <>

//         <div className="logoContainer">

//             <img className="logo" src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381319.jpg" alt="logoImg" />
//             <h3 className="logoHead">For Foodie</h3>

//         </div>
        
//         </>
//     )

// }

// const SearchCompo=()=>{

//     return(
//         <>

//         <div className="searchContainer">
//             <input
//             className="searchInput"
//             type="search"
//             placeholder="Search for restaurant,cuisine or a dish"

//             />
//         </div>
//         </>

//     )

// }

// const NavCompo=()=>{

//     return(
//         <>
//         <div className="navContainer">
//             <ul>
//                 <li className="listItems">Home</li>
//                 <li className="listItems">About US</li>
//                 <li className="listItems">Contact US</li>
//                 <li className="listItems">Cart</li>
//             </ul>

//         </div>
//         </>
//     )

// }

// const HeaderCompo=()=>{

//     return(
//         <>
//         <div className="headerContainer">
//             <LogoCompo />
//             <SearchCompo />
//             <NavCompo />
//         </div>
//         </>
//     )

// }

// const CardCompo=({resData})=>{

//     const {name,Cusine,Rating,Prise} =resData
//     return(
//         <>
//         <div className="cardContainer">
//             <img className="cardImg" src="https://thumbs.dreamstime.com/b/tasty-burger-french-fries-fire-close-up-home-made-flames-137249900.jpg" alt="cardImg" />
//             <h3 className="cardHead">{name}</h3>
//             <h4 className="cardCusine">{Cusine}</h4>
//             <h4 className="cardRating">{Rating}⭐</h4>
//             <h4 className="cardPrice">{Prise}</h4>
//         </div>
//         </>

//     )
// }

// const BodyCompo=()=>{

//     return(
//         <>
//         <div className="mainContainer">
//            {
//             resList.length && 
//             resList.map((res)=>{
//                 return(
//                     <CardCompo 
//                     resData={res}
//                     key={res.id}
//                      />
//                 )
//             })
//            }
//         </div>
//         </>
//     )

// }


// const AppLayot=()=>{
//     return(
//         <>
//         <HeaderCompo />
//         <hr/>
        
//         <BodyCompo />
        
//         </>
//     )

// }

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);