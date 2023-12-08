import styles from "./index.module.css"
function Special(){
    return(
        <>
        <div className={styles.secmain}>
        <div className={styles.header}>
            <h1 className={styles.head}>Our special dish</h1>
            <p className={styles.headb}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,<br/> luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            
        </div>
        <div className={styles.tom}>

            <div className={`${styles.row} ${styles.food}`}>
                <img className={styles.imgpro} src="./image/1.png" alt=""/>
                <h3 className={`${styles.topping} ${styles.dish}`}>Fried Egg Prosciutto</h3>
                <p className={`${styles.topping} ${styles.lorem}`}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p> 
                <h1 className={`${styles.topping} ${styles.price}`}>$24.00</h1>   
            </div>              
            <div className={`${styles.secrow} ${styles.food}`}>
                <img className={styles.imgpro} src="./image/2.png" alt=""/>
                <h3 className={`${styles.topping} ${styles.dish}`}>Fresh Ketogenic</h3>
                <p className={`${styles.topping} ${styles.lorem}`}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
                <h1 className={`${styles.topping} ${styles.price}`}>$19.00</h1>
            </div>
            <div className={`${styles.thirrow} ${styles.food}`}>
                <img className={styles.imgpro} src="./image/3.png" alt=""/>
                <h3 className={`${styles.topping} ${styles.dish}`}>Diet Buddha Bowl</h3>
                <p className={`${styles.topping} ${styles.lorem}`}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
                <h1 className={`${styles.topping} ${styles.price}`}>$24.00</h1>
            </div>
        </div>
        <div
        className={styles.tomtwo}>    
            <div className={`${styles.fourrow}${styles.orange}`}>
                <div className={`${styles.promo} ${styles.bothh}`}>
                    <div className={styles.platee}>
                        <img className={styles.imgpr} src="./image/4.png" alt=""/>
                    </div>
                    <div className={styles.platr}>
                        <button className={styles.promm}>PROMO!!!</button>
                        <h5 className={styles.name}>Farfalle Spinach</h5>
                        <p className={styles.inf}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit. Ut elit <br/> tellus, luctus nec ullam.</p>
                        <p className={styles.dol}>$25.00</p>
                        <p id="buy" onclick="detail()" className={styles.buy} >Order Now!</p>   
                    </div>
                </div>
            </div>   
            <div className={`${styles.fourrow} ${styles.food}`}>    
                <div className={styles.promot}>
                    <img className={styles.imgpro} src="./image/5.png" alt=""/>
                    <h3 className={`${styles.topping} ${styles.dish}`}>Chicken Breast</h3>
                    <p className={`${styles.topping} ${styles.lorem}`}>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
                    <h1 className={`${styles.topping} ${styles.price}`}>$24.00</h1>
                </div>
                
            </div>
        </div>
    </div>
        </>
    )
}
export default Special;