import styles from "./styles.module.css";
import { Button } from "react-bootstrap";

const Product = ({ title, image, price }) => {
  return (
    <div className={styles.item}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant="info">Add to card</Button>
    </div>
  );
};

export default Product;
