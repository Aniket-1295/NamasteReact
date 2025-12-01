import userContext from "../utils/userContext";
import { use, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavCompo = () => {
  const [btntxt, setBtntxt] = useState("Login");
const {logidInUser}= useContext(userContext);

const items =useSelector((store)=>store.cart.items);
// console.log(items);


  return (
    <>
      <div className="navContainer ">
        <ul className=" hidden md:flex  gap-5 justify-evenly items-center ">
          <li className=" text-gray-700 font-medium transition-all duration-300 hover:text-indigo-600">
            <Link to="/">Home</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-300 hover:w-full"></span>
          </li>
          <li className="text-gray-700 font-medium transition-all duration-300 hover:text-indigo-600">
            <Link to="/about">About US</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-300 hover:w-full"></span>
          </li>
          <li className="text-gray-700 font-medium transition-all duration-300 hover:text-indigo-600">
            <Link to="/contect">Contect US</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-300 hover:w-full"></span>
          </li>

          <li className="listItems text-gray-700 hover:text-indigo-600 font-medium transition-colors duration-200">
            <Link to="/gorsary">Gorsary</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-300 hover:w-full"></span>
          </li>

          <li className="text-gray-700 font-medium transition-all duration-300 hover:text-indigo-600">
            <Link to="/cart">Cart ({items.length})items</Link>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all duration-300 hover:w-full"></span>
          </li>
          <button
            className="cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
            onClick={() => {
              // btnText="Logout"
              setBtntxt((prev) => {
                return prev === "Login" ? "Logout" : "Login";
              });
              // console.log(btntxt);
            }}
          >
            {btntxt}
          </button>

          <li className="text-black-700 font-bold transition-all duration-300 hover:text-indigo-600">
            <span>{logidInUser}</span>
          </li>


        </ul>
      </div>
    </>
  );
};

export default NavCompo;
