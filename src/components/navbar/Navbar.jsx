import { useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [trackPage, setTrackPage] = useState("");

  function handleActivePage(page) {
    setTrackPage(page);
  }
  return (
    <nav className={styles.navbar}>
      <img src={assets.logo} alt="" className={styles.logo} />
      <ul className={styles.navbarMenu}>
        <Link
          to={"/"}
          className={trackPage === "home" ? styles.active : ""}
          onClick={() => handleActivePage("home")}
        >
          Home
        </Link>
        <a
          href="#exploreMenu"
          className={trackPage === "menu" ? styles.active : ""}
          onClick={() => handleActivePage("menu")}
        >
          Menu
        </a>
        <a
          href="#appDownload"
          className={trackPage === "mobile-app" ? styles.active : ""}
          onClick={() => handleActivePage("mobile-app")}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          className={trackPage === "contact-us" ? styles.active : ""}
          onClick={() => handleActivePage("contact-us")}
        >
          Contact-Us
        </a>
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
