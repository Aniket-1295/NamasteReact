import { CDN_URL } from "../utils/constants";

const CardCompo = ({ resData }) => {
  // const { name, cuisines, avgRating, costForTwo } = resData?.info || {}
  return (
    <>
      <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
        <img
          className="cardImg w-full h-40 object-cover rounded-t-lg mb-4"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/349477cfa675d63e5d7d6bddc3e254b1"
          alt="cardImg"
        />
        <h3 className="cardHead text-lg font-semibold text-gray-800 mb-2">
          {resData?.info?.name}
        </h3>
        <h4 className="cardCusine text-sm text-gray-600 mb-2">
          {resData?.info?.cuisines?.join(", ")}
        </h4>
        <h4 className="cardRating text-sm text-yellow-500 font-medium mb-2">
          {resData?.info?.avgRating}⭐
        </h4>
        <h4 className="cardPrice text-sm text-gray-700">
          {resData?.info?.costForTwo}
        </h4>
      </div>
    </>
  );
};

//define the contract of the higher order function
//it takes the CardCompo as input and return veg labeld component
// Higher Order Component to add a "Veg" label to the CardCompo


export const WithVegLabbledCard = (CardCompo) => {
  return (props) => {
    return (
      <div>
        <label className="absolute  bg-green-600 px-2 rounded-3xl text-white ">Veg</label>
        <CardCompo {...props}/>
      </div>
    );
  };
};




export default CardCompo;
