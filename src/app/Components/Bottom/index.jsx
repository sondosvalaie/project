import styles from "./index.module.css"
function Bottom(){
    return(
        
        <div className={styles.last}>
            <div className={styles.firstt}>
                <div>    
                    <p className={styles.nutritext}>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit. Ut elit <br/> tellus, luctus nec ullamcor.</p>
                    <p className={styles.demo} id="demo"></p>
                </div>
                <div className={styles.second}>
                    <p className={styles.topbottom}>Navigation</p>
                    <a className={styles.bottomlink} href="#">Home page</a><br/>
                    <a className={styles.bottomlink} href="#">About us</a><br/>
                    <a className={styles.bottomlink} href="#">Health benefits</a><br/>
                    <a className={styles.bottomlink} href="#">Services</a><br/>
                </div>
                <div className={styles.second}>
                    <p className={styles.topbottom}>Support</p>
                    <a className={styles.bottomlink} href="#">Contact</a><br/>
                    <a className={styles.bottomlink} href="#">Find a Store</a><br/>
                    <a className={styles.bottomlink} href="#">Where's My Order?</a><br/>
                    <a className={styles.bottomlink} href="#">FAQ</a><br/>
                </div>
                <div className={styles.second} >
                <p className={styles.topbottom}>Quick links</p>
                <span className={styles.phone}></span><a className={styles.tis} href="#"> (+123) 456 7890</a><br/>
                <span className={styles.sendmail}></span><a className={styles.tis}  href="#">help@support.com</a><br/>
                </div>
            </div>
            <hr className={`${styles.mline} ${styles.bottomline}`}/>
            <div className={styles.justsecond}>
                <div >
                    <p className={styles.copy}>Copyright © 2023 Nutri Global By SondosValaie</p>
                </div>
                <div className={styles.cookie}>
                    <a className={styles.bottomcookies} href="#">Terms & Conditions</a>
                    <a className={styles.bottomcookies} href="#">Privacy Policy</a>
                    <a className={styles.bottomcookies} href="#">Manage Cookies</a>
                </div>
            </div>
        </div>    
           
        
    )
}
    
           
    


export default Bottom;