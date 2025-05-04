import { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import styles from "./Navbar.module.css";
function Navbar() {
  const [trackPage, setTrackPage] = useState("");

  function handleActivePage(page) {
    setTrackPage(page);
  }
  return (
    <nav className={styles.navbar}>
      <img src={assets.logo} alt="" className={styles.logo} />
      <ul className={styles.navbarMenu}>
        <li
          className={trackPage === "home" ? styles.active : ""}
          onClick={() => handleActivePage("home")}
        >
          Home
        </li>
        <li
          className={trackPage === "menu" ? styles.active : ""}
          onClick={() => handleActivePage("menu")}
        >
          Menu
        </li>
        <li
          className={trackPage === "mobile-app" ? styles.active : ""}
          onClick={() => handleActivePage("mobile-app")}
        >
          Mobile-App
        </li>
        <li
          className={trackPage === "contact-us" ? styles.active : ""}
          onClick={() => handleActivePage("contact-us")}
        >
          Contact-Us
        </li>
      </ul>

      <div className={styles.navbarRight}>
        <img src={assets.search_icon} alt="" />
        <div className={styles.navbarSearchIcon}>
          <img src={assets.basket_icon} alt="" />
          <div className={styles.dot}></div>
        </div>
        <button>Sign-in</button>
      </div>
    </nav>
  );
}

export default Navbar;
