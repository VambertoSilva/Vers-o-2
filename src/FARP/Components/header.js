// import background from "../img/background.svg";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div>
        <img className={Styles.Header} />
      </div>
      <div className={Styles.head}>
        <p className={Styles.logo}>FARP</p>
        <button className={Styles.button}>Gerenciar Aluguel </button>
      </div>
    </div>
  );
};

export default Header;
