import React, {lazy,Suspense}from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import About from "./components/About";
import Contect from "./components/Contect";
import Error from "./components/Error";
import BodyCompo from "./components/Body";
import ResMenue from "./components/ResMenue";
import Services from "./components/Services";
import Cart from "./components/Cart";
const Grosary =lazy(()=>import("./components/Grosary"));
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const appRoute= createBrowserRouter([
    {
        path:"/",
        element:<App />,
        children:[
            {

                path:'/',
                element:<BodyCompo />
            },
            {
                path:'/about',
                element:<About />,
                

            },
            {
                path:'/contect',
                element:<Contect />

            },
            {
                path:'/gorsary',
                element: <Suspense fallback={
                    <h1>Loading.......</h1>
                } >
                    <Grosary /> 

                </Suspense>
            },
            {
                path:'/restaurant/:resID',
                element:<ResMenue />
            },
            {
                path:'/about/services',
                element:<Services Service1="Swiggy Instamart" Service2="Swiggy Genie" Service3=" Swiggy Dineout" />
            },
            {
                path:'/cart',
                element:<Cart />
            }
            
        ],
        errorElement:<Error />
    },
    
   
])




const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(

<RouterProvider router={appRoute}  />
);