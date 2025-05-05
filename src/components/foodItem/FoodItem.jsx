import { useContext } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import styles from "./FoodItem.module.css";
import { StoreContext } from "../../context/StoreContext";
import PropTypes from "prop-types";

function FoodItem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // Add validation before adding to cart
  const handleAddToCart = () => {
    if (!id) {
      console.error("Cannot add to cart: Item ID is undefined");
      return;
    }
    addToCart(id);
  };

  const handleRemoveFromCart = () => {
    if (!id) {
      console.error("Cannot remove from cart: Item ID is undefined");
      return;
    }
    removeFromCart(id);
  };

  return (
    <div className={styles.foodItem}>
      <div className={styles.foodItemImageContainer}>
        <img className={styles.foodItemImage} src={image} alt={name} />
        {!cartItems[id] ? (
          <img
            className={styles.add}
            onClick={handleAddToCart}
            src={assets.add_icon_white}
            alt={`Add ${name} to cart`}
          />
        ) : (
          <div className={styles.foodItemCounter}>
            <img
              onClick={handleRemoveFromCart}
              src={assets.remove_icon_red}
              alt={`Remove ${name} from cart`}
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={handleAddToCart}
              src={assets.add_icon_green}
              alt={`Add more ${name}`}
            />
          </div>
        )}
      </div>
      <div className={styles.foodItemInfo}>
        <div className={styles.foodItemNameRating}>
          <p>{name}</p>
          <img src={assets.rating_starts} alt={`Rating for ${name}`} />
        </div>
        <p className={styles.foodItemDescription}>{description}</p>
        <p className={styles.foodItemPrice}>₹{price}</p>
      </div>
    </div>
  );
}

FoodItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default FoodItem;
