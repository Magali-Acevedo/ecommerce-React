import { Container } from "../containers/primitives/Container";
import styles from "./navMenu.module.css";
import menu from "../../assets/icons8-menu-rounded-50.png";

function NavMenu (){
    return(
    <>
        <Container className={styles.containerNavMenu}>
            <ul className={styles.navMenu}>
                <li>
                    <img src={menu} alt="menu de productos" width={15} />
                    {/* {<ion-icon name="menu-outline" />} */}
                    <span>CATEGORÍAS</span>
                
                </li>
                <li> 
                    <a href="">Ofertas Destacadas</a>
                </li>
            </ul>
        </Container>


    </>
    )
}
export default NavMenu;