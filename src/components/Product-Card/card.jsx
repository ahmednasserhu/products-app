import PropTypes from "prop-types";
import "./card.css";
import { useState } from "react";
import ProductDetails from "../../Pages/Product-details/ProductDetails";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementCounter } from "../../store/slices/counter";
import { updatePurchasedItems } from "../../store/slices/purchased";

function ProductCard({ singleProduct }) {
  const [showProductDetails, setShowProductDetails] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    setShowProductDetails(true);
    navigate(`/productDetail/${singleProduct.id}`);
  };

  const addToCart = () => {
    dispatch(incrementCounter());
    dispatch(updatePurchasedItems(singleProduct));
  };

  return (
    <div>
      <div
        id="card-component"
        className="card m-5"
        style={{ width: "18rem", backgroundColor: "#212921", color: "white" }}
      >
        <img
          src={singleProduct.thumbnail}
          className="card-img-top fixed-image-size mt-1"
          alt="..."
        />
        <div className="card-body fixed-card-body-size">
          <div className="d-flex">
            <h5
              className="card-title fw-bolder text-primary"
              onClick={handleClick}
            >
              {singleProduct.title}
            </h5>
            <small className="ms-auto">{singleProduct.price}$</small>
          </div>
          <p className="card-text">
            <span className="fw-bold">
              {singleProduct.description.slice(0, 100)}
            </span>
          </p>
          <div className="mt-auto">
            <button className="btn btn-group btn-primary" onClick={addToCart}>
              Add to cart
            </button>
            {singleProduct.stock === 0 ? (
              <span className="outOfStockSpan fw-bolder">Out Of Stock</span>
            ) : (
              <span className="stockSpan fw-bolder">In Stock</span>
            )}
          </div>
        </div>
      </div>
      {showProductDetails && <ProductDetails productDetail={singleProduct} />}
    </div>
  );
}

// Define propTypes for validation
ProductCard.propTypes = {
  singleProduct: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
