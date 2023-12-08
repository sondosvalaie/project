import styles from "./index.module.css"
function Menu(){
    return(
        <>
              <div className={styles.menu}>
        <div className={styles.bottomd}>
            <div className={`${styles.left} ${styles.two}`}>
                <div className={`${styles.logo}${styles.both} `}>
                   
                   
                </div>    
                <a className={styles.about}  href="#">Home</a>
                <a className={styles.about}  href="#">Health Benefits</a>
                <a className={styles.about}  href="#">Reviews</a>
                <div className={styles.nim}>
                    
                </div>
                <a className={`${styles.about} ${styles.con}`} href="#">Contact</a>
                <a className={`${styles.about} ${styles.consult}`} href="#">Free Consultation</a>
                  <button className={`${styles.callab} ${styles.two}`}>
                  <a className={styles.number}  href="#"> (+123) 456 7890 </a>
                  </button>
            </div>
        </div>    
        
        
    </div>    
          </>
    )
}

export default Menu;