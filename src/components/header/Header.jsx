import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <h2>Order your Manpasand Food from here 😍</h2>
        <p>
          Indulge in your Manpasand Food favorites! Explore our diverse menu and
          order online for a convenient and satisfying culinary experience.
          Freshly prepared and delivered with care, your delicious meal awaits!
        </p>
        <button>View Menu</button>
      </div>
    </header>
  );
}

export default Header;
