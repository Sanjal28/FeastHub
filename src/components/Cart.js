import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../../utils/cartSlice";

const Cart = () => {
  const itemList = useSelector((store) => store.cart.items);
  const dispatch=useDispatch()
  const handleClear=()=>{
    dispatch(clearItem())
  }
  return (
    <div className="text-center bold text-2xl m-2 p-2">
      <h1>Cart</h1>
      <div>
        <h2>{itemList.join(",")}</h2>
      </div>
      {itemList.length==0 && <h3 className="text-red-700 m-1 p-2">Cart is Empty!!!</h3>}
      <button className="bg-black text-white m-2 p-2 rounded-lg " onClick={handleClear}>Clear</button>
    </div>
  );
};

export default Cart;
