import { assets } from "../../assets/frontend_assets/assets";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footerContent}>
        <div className={styles.footerContentLeft}>
          <img src={assets.logo} alt="" />
          <p>
            "Fast, fresh, and delivered with care. Your favorite meals from
            local restaurants, brought to your doorstep. Order now and
            experience seamless food delivery anytime, anywhere. Satisfaction
            guaranteed!"
          </p>
          <div className={styles.footerSocialIcons}>
            <img src={assets.facebook_icon} />
            <img src={assets.twitter_icon} />
            <img src={assets.linkedin_icon} />
          </div>
        </div>
        <div className={styles.footerContentCenter}>
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={styles.footerContentRight}>
          <h2>Get in touch</h2>
          <ul>
            <li>+91 9100700007</li>
            <li>contact@cravecart.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className={styles.footerCopyright}>
        © 2025 Crave Cart. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
