import React from "react";;
import ReactDom from "react-dom/client";


const Logo =()=>{
    return(

        <div className="Logo-container">
            <img  className="Logo" src="https://img.freepik.com/premium-vector/food-delivery-motorcycle-with-box_461522-22.jpg" alt="Logo" />
        </div>
    )

}

const Nav =()=>{
    return(
        <div className="nav-iteams">
            <ul className="list">
                <li>Home</li>
                <li>About US</li>
                <li> Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>

        
    )
}
const Header =()=>{
    return(
        <div className="header">
            <Logo />
            <Nav />
        </div>
    )
}
const SearchCom =()=>{
    return(
        <div className="Search-input">
            <input type="search" placeholder="Search Here" />
        </div>
        
    )
}

//Array of objects
const rescardData=[
    

    {
        resName:"Harsh Biryani",
        id:1,
        Prise:"$140",
        Rating:"4.5",
        Cusine:"Biryani, Hydabadi,Muglai"
    },
    {
        resName:"swarn Biryani",
        id:2,
        Prise:"$120",
        Rating:"4.2",
        Cusine:"Biryani,panjabi,korma"
    },
    {
        resName:"bhehroj Biryani",
        id:3,
        Prise:"$110",
        Rating:"4.0",
        Cusine:"Biryani, multaani,Muglai"
    },
    // {
    //     resName:"Itminan Biryani",
    //     id:4,
    //     Prise:"$130",
    //     Rating:"4.3",
    //     Cusine:"Biryani, Hydabadi,Muglai"
    // },
    // {
    //     resName:"Shivarj  Biryani",
    //     Prise:"$150",
    //     Rating:"4.6",
    //     Cusine:"Biryani, Hydabadi,Muglai"
    // },
    // {
    //     resName:"Sajj Biryani",
    //     Prise:"$160",
    //     Rating:"4.8",
    //     Cusine:"Biryani, Hydabadi,Muglai"
    // },
    
]

//Destructuring Props->
const CardCom =({res})=>{

    const {resName,Prise,Rating,Cusine}=res;
    return(
        <div className="Card">
          
            <img className="Card-img" 
              alt="food img"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/q9bxpoklwvqa8a3ffac4" />
            <h1>{resName}</h1>
            <h2>{Prise}</h2>
            <h3>{Rating}</h3>
            <h4>{Cusine}</h4>
        </div>
    )
}

const Body =()=>{
    return(

        <div className="main-coantiner">

            <div className="search-container">
                <SearchCom />
            </div>

            <div className="card-container">
                {/* <CardCom 
                resName="Harsh Biryani"
                Cusine="Biryani, Hydabadi,Muglai"
                 />
                <CardCom
                 resName="swarn Biryani"
                  Cusine="Biryani,panjabi,korma"
                 />
                <CardCom
                 resName="bhehroj Biryani"
                  Cusine="Biryani, multaani,Muglai"
                 />
                <CardCom
                 resName="Itminan Biryani"
                 />
                <CardCom 
                 resName="Shivarj  Biryani"
                 />
                <CardCom
                 resName="Sajj Biryani"
                 /> */}

                 {
                    rescardData.length &&
                    rescardData.map((rescard)=>{
                        return(
                        <CardCom res={rescard} key={rescard.id}/>
                        

                    )})
                 }
                
            </div>

        </div>
    )
}



const APPLayout =()=>{
    return(
        <div className="App">
            <Header />
            <Body />


          

        </div>
    )
}


const root= ReactDom.createRoot(document.getElementById("root"));

root.render(<APPLayout />)