import { useState } from "react";
import resList from "../../utils/mockData";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
const Restaurants = () => {
  const { resid } = useParams();
  //  dispatch is a function
  const dispatch = useDispatch();
  // accordian design
  const handleClick = () => {
    setShowItems(!showItems);
  };
  const addToCart = () => {
    // dispatch an action
    dispatch(addItem("pizza"));
    
    
  };

  const [showItems, setShowItems] = useState(false);
  return (
    <div>
      <h1 className="font-bold text-2xl my-6 text-center">
        {resList[resid].name}
      </h1>

      <div
        className=" w-6/12 bg-gray-200 flex justify-between p-4  mx-auto cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-xl">Menu</span>
        <span>⬇️</span>
      </div>

      {showItems && (
        <h4 className=" w-6/12 bg-gray-100 flex justify-between p-4  mx-auto">
          {resList[resid].menuItems.join(" , ")}{" "}
          <button
            className="bg-black text-white m-1 p-2 cursor-pointer"
            onClick={addToCart}
          >
            Add +
          </button>
        </h4>
      )}
    </div>
  );
};
export default Restaurants;
