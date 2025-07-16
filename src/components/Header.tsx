import styles from "./Header.module.css";
import { MainLogoHorizontal } from "./logos/MainLogoHorizontal";

const Header = ({}) => {
  return (
    <header id="laguntzaFisioterapiaNavHeader" className={styles.header}>
      <a href="https://laguntzafisioterapia.com" className={styles.headerLogo}>
        <MainLogoHorizontal />
      </a>
    </header>
  );
};

export { Header };
