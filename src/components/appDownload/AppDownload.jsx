import { assets } from "../../assets/frontend_assets/assets";
import styles from "./AppDownload.module.css";

function AppDownload() {
  return (
    <section className={styles.appDownload} id="appDownload">
      <p>
        For Bettr Experience Download <br /> Crave Cart App.
      </p>
      <div className={styles.appDownloadPlatforms}>
        <img src={assets.play_store} />
        <img src={assets.app_store} />
      </div>
    </section>
  );
}

export default AppDownload;
