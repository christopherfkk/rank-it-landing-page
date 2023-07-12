import {FunctionComponent} from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
    return (
        <div className={styles.footerSection}>

                <img className={styles.logo} alt="" src="/logo@2x.png"/>

                <div className={styles.contact}>
                    <p className={styles.headline}>
                        Contact us
                    </p>
                    <p className={styles.paragraph}>
                        christopherfkk@uni.minerva.edu
                    </p>
                    <p className={styles.paragraph}>
                        hugosyh@uni.minerva.edu
                    </p>
                    <p className={styles.paragraph}>
                        bentley@uni.minerva.edu
                    </p>
                </div>

        </div>
    );
};

export default Footer;
