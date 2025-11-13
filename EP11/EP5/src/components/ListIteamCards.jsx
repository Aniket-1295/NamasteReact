const ListIteamCarda = ({ list }) => {
  console.log(list);

  return (
    <>
      {list.map((card) => {
        return (
          <div 
          className="flex justify-between border-b p-4 "
         
          key={card?.card?.info?.id}>
            <div className="">
            <h2 className="font-bold text-gray-800">
              {card?.card?.info?.name}
            </h2>
           

            <span className="text-gray-600 ">
            ₹{card?.card?.info?.price / 100}
            </span>
            <p className="text-gray-600 text-sm mt-2  pb-2">{
                card?.card?.info?.description
                }</p>
            </div>

            <div>
            <img
            className="w-32 h-32 object-cover rounded-lg mt-2"  
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/8/29/a8a8d763-c6fd-4ae0-97df-007054225b23_3dfd797c-7bc1-4592-83d8-04f31700f321.jpg_compressed" alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ListIteamCarda;
