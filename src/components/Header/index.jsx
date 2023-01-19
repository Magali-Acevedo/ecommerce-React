import Logo from "../Logo";
import Search from "../Search";
import NavBar from "../navBar";
import { Container } from "../containers/primitives/Container.jsx";
import styles from "./header.module.css";

function Header() {
  return (
    <>
        <Container 
        height="80px" 
        borderBottom="2px solid #d0d0d07a" >
          <div className={styles.header}>
           <Logo color="#fc0d1b"/>
           <Search />
           <NavBar/>
          </div>
        </Container>
  


    </>
  );
}

export default Header;
