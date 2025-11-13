import ListIteamCarda from "./ListIteamCards";
import { useState } from "react";

const ItemCategory = ({ data }) => {
  const [showList, setShowList] = useState(false);

  // console.log(data)

  
  const handleClick = () => {
    setShowList(!showList);
  };

  return (
    <>
      <div className=" my-4 w-6/12 mx-auto items-start bg-gray-100 p-4">
        <div 
        onClick={handleClick}
        className="flex justify-between cursor-pointer">
          <h2 className="text-lg font-bold">
            {data.title} ({data.itemCards.length})
          </h2>

          <button className="cursor-pointer" onClick={handleClick}>
            <img
              className="w-6 h-6  bg-gray-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmpQMWgQ7-Mv2M8T5IUqubfsp5rn5TS_nyvQ&s"
            />
          </button>
        </div>

        {showList && <ListIteamCarda list={data?.itemCards} />}
      </div>
    </>
  );
};

export default ItemCategory;
