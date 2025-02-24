import react from "react"
import Styles from "./Footer.module.css"

export const Footer = () =>{ 
    return(
         <footer className={Styles.footer}>
               <div className={Styles.footeritem}>
                    <ul classNam={Styles.footeritems}>
                          <li className={Styles.footerList}>home</li>
                          <li className={Styles.footerList}>home</li>
                          <li className={Styles.footerList}>home</li>
                    </ul>
                </div>
         </footer>
    )
}