// Home.js
import ExploreMenu from "../../components/explore_menu/ExploreMenu";
import FoodDisplay from "../../components/foodDisplay/FoodDisplay";
import Header from "../../components/header/Header";
import styles from "./Home.module.css";
import { useState } from "react";

function Home() {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
}

export default Home;
