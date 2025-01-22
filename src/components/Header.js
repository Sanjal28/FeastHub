import { LOGO_IMG_HEADER } from "../../utils/img";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // context,useContext is the hook used to use context across the app
  const { loggedInUser } = useContext(UserContext);
  // subscribing to the store using useSelector
  // selector give access to whole store then we can use cart from store
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  return (
    <div className="flex justify-between shadow-lg bg-gray-200 lg:bg-gray-100">
      <div className="logo-container">
        <img src={LOGO_IMG_HEADER} className=" w-28"></img>
      </div>
      <div className="flex items-center">
        <ul className="flex ">
          <li className="p-2 m-1">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 m-1">
            <Link to="/about">About</Link>
          </li>
          <li className="p-2 m-1">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="p-2 m-1">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-2 m-1">
            <Link to="/cart"> Cart-({cartItems.length} Items)</Link>
          </li>
          <button
            className="flex p-2 m-1"
            onClick={() => {
              // reconciliation algo is used cause whenever btn is clicked,the old virtual dom is compared with the new virtual dom and render the change
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="p-2 m-1">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
