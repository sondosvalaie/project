import styles from "./index.module.css"

const Card = ({products}) =>{
    return(
            <div className={styles.card}>
            <img className={styles.img} src={products.image} />
            <br/>
            <button className={styles.btn}>{products.category}</button>
            <div className={styles.allpro}>
                <h3 className={styles.about}>{products.title}</h3>
                <span className={styles.pricee}>$</span><span className={styles.price}>{products.price}</span>
                </div>
            </div>
        );
    
}
export default Card;