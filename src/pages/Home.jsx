import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../store/products/productsSlice";
// components
import { Row, Col } from "react-bootstrap";
import { Product } from "../components/ecom";

const Home = () => {
  const dispatch = useDispatch();
  const { records } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const renderProductsList = records.map((product) => (
    <Col className="d-flex justify-content-center mb-5" md={3} key={product.id}>
      <Product {...product} />
    </Col>
  ));
  return <Row>{renderProductsList}</Row>;
};

export default Home;
