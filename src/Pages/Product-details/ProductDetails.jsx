import PropTypes from 'prop-types';
import './productDetails.css'

function ProductDetails({ productDetail }) {
  console.log('after using cb',productDetail);
  return (
    <div className="card-wrapper">
      <div className="card">
        {/* left side of the card */}
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase">
              <img src={productDetail?.thumbnail} alt="Product Thumbnail" />
            </div>
            <div className="img-select">
              <div className="img-item" data-id="1">
                <img src={productDetail?.thumbnail} alt="Product Thumbnail" />
              </div>
              {productDetail?.images.map((image, index) => (
                <div className="img-item" key={index}>
                  <img src={image} alt={`Product Image ${index}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* right side of the card */}
        <div className="product-content">
          <h2 className="product-title">{productDetail?.title}</h2>
          <div className="product-price">
            <p className="last-price">
              Price: <span>{productDetail?.price}</span>
            </p>
            {/* <p className="new-price">New Price: <span>$249.00 (5%)</span></p> */}
          </div>
          <div className="product-detail">
            <h2>About this product</h2>
            <p>{productDetail?.description}</p>
          </div>
          <div className="purchase-info">
            <input type="number" min="0" defaultValue="1" />
            <button type="button" className="btn">
              Add to Cart <i className="fas fa-shopping-cart"></i>
            </button>
            <button type="button" className="btn">Compare</button>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductDetails.propTypes = {
  productDetail: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
};

export default ProductDetails;
