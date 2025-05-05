// ExploreMenu.js
import styles from "./ExploreMenu.module.css";
import { menu_list } from "../../assets/frontend_assets/assets";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className={styles.exploreMenu} id="exploreMenu">
      <h1>Explore our Menu</h1>
      <p className={styles.exploreMenuText}>
        Embark on a culinary journey through our extensive menu! Uncover a
        delightful array of appetizers, main courses, and desserts, each
        prepared with the finest ingredients. Explore new tastes and savor
        familiar favorites. Your perfect meal is just a click away!
      </p>
      <div className={styles.exploreMenuList}>
        {menu_list.map((dish, index) => {
          return (
            <div
              onClick={() =>
                setCategory((previousState) =>
                  previousState === dish.menu_name ? "All" : dish.menu_name
                )
              }
              className={styles.exploreMenuListItem}
              key={index}
            >
              <img
                className={category === dish.menu_name ? styles.active : ""}
                src={dish.menu_image}
                alt=""
              />
              <p>{dish.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExploreMenu;
