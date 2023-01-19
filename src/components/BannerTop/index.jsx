import styles from "../BannerTop/bannerTop.module.css";
import {Container} from "../containers/primitives/Container.jsx";


function BannerTop () {
    return (
        <>
            <Container 
            background="var(--color-primary)" 
            height="30px">
                <div className={styles.bannerTop}>
                    <span className={styles.bannerTopVentas} >
                        <a href="">
                            <img src="https://www.otero.com.ar/Content/Images/i-telefono.svg" alt="icon telefono" />
                            <span>Venta telefónica</span>
                        </a>
                        <p>0800-333-4521</p>
                    </span>

                    <a href="">Sucursales</a>
                </div>
            </Container>

        </>
    )
}

export default BannerTop;