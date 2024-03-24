import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

function CartList() {
  const cart = useSelector((state) => state.purchased.cartProducts);

  return (
    <>
      {cart.map((product, index) => (
        <Card key={index} className="d-flex">
          {" "}
          {/* Add key prop to Card */}
          <div className="flex-grow-1">
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
          </div>
          <Card.Img
            variant="top"
            src={product.thumbnail}
            style={{ width: "200px", objectFit: "cover" }}
          />
        </Card>
      ))}
    </>
  );
}

export default CartList;
