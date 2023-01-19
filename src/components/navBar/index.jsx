import { User } from "../../icons/User";
import {ShoppingCar} from "../../icons/ShoppingCar"
import styles from "../navBar/navBar.module.css";

function NavBar() {
  return (
    <>
      <ul className={styles.navBar}>
        <li>
          <ion-icon name="heart-outline" size="large" />
        </li>
        <li className={styles.miCuenta}>
            <User color="#565656" width="23px"/>
          <span >
            Ingresar
            <ion-icon name="chevron-down-outline" />
          </span>
        </li>
        <li>
          <ShoppingCar color="#565656" width="34px" />
        </li>
      </ul>
    </>
  );
}
export default NavBar;
