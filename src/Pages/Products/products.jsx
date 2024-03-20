import ProductCard from '../../components/Product-Card/card';
import { products } from './products-list';

function Products() {
  const productList = products;
  return (
    <div style={{ backgroundColor: '#383f45' }} className="row row-cols-1 row-cols-md-3 g-4">
      {/* Render ProductCard components for each product */}
      {productList.map((product) => (
        <div key={product.id} className="col">
          <ProductCard singleProduct={product}/>
        </div>
      ))}
    </div>
  );
}

export default Products;
