import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./cart.css"
import { useSelector } from "react-redux";

function ShoppingCart() {
  const counter = useSelector(state=>state.counter.counter_val)

  return (
    <>
      <button className="cartStyle">
        <FontAwesomeIcon  icon={faCartShopping} />
      </button>
      <sup>{counter}</sup>
    </>
  );
}

export default ShoppingCart;
