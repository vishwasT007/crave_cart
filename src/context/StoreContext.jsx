import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  function addToCart(itemId) {
    if (!itemId) {
      console.error("Cannot add to cart: Item ID is missing");
      return;
    }
    setCartItems((previousItems) => {
      // If item doesn't exist in cart, initialize with quantity 1
      if (!previousItems[itemId]) {
        return {
          ...previousItems,
          [itemId]: 1,
        };
      }
      // If item exists, increment its quantity
      else {
        return {
          ...previousItems,
          [itemId]: previousItems[itemId] + 1,
        };
      }
    });
  }

  function removeFromCart(itemId) {
    setCartItems((previousItem) => {
      const newItems = { ...previousItem };
      if (newItems[itemId] > 1) {
        newItems[itemId] = newItems[itemId] - 1;
      } else {
        delete newItems[itemId];
      }
      return newItems;
    });
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  // Transform food_list to use 'id' instead of '_id'
  const normalizedFoodList = food_list.map((item) => ({
    ...item,
    id: item._id, // Add id field that points to _id
  }));
  const contextValue = {
    // Add shared state or functions here
    food_list: normalizedFoodList,
    addToCart,
    removeFromCart,
    cartItems,
    setCartItems,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreContextProvider };
