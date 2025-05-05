// Import necessary tools
import { useContext } from "react";
import styles from "./FoodDisplay.module.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../foodItem/FoodItem";

function FoodDisplay({ category }) {
  // Get the list of foods from our storage
  const { food_list } = useContext(StoreContext);

  return (
    <div className={styles.foodDisplay} id="food-display">
      <h2>Top Dishes near you!</h2>
      <div className={styles.foodDisplayList}>
        {/* Show each food item */}
        {food_list.map((food) => {
          // Only show food if it matches the selected category or "All" is selected
          if (category === "All" || category === food.category) {
            return (
              <FoodItem
                key={food.id}
                id={food.id}
                name={food.name}
                description={food.description}
                price={food.price}
                image={food.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
