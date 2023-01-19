import styles from "../Search/search.module.css";

function Search () {
    return(
        <>
            <form className={styles.formSearch} action="">
                <input 
                className={styles.inputSearch} 
                type="text" 
                placeholder="Buscar productos"/>

                <button className={styles.buttonSearch}>
                    <svg width={20} viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.198 19.482c2.108 0 4.08-.587 5.847-1.76l.272-.195 5.643 5.408 2.108-2.02-5.711-5.343.204-.26a9.612 9.612 0 001.768-5.539C20.329 4.365 15.773 0 10.13 0S0 4.365 0 9.773c0 5.343 4.555 9.709 10.198 9.709zm0-17.332c4.352 0 7.887 3.388 7.887 7.558s-3.535 7.623-7.887 7.623c-4.351 0-7.954-3.388-7.954-7.558S5.847 2.15 10.198 2.15z" fill="#565656"></path></svg>
                </button>
            </form>
        
        </>
    )
}
export default Search;