import {FunctionComponent} from "react";
import HeaderContainer from "../components/HeaderContainer";
import ProblemContainer from "../components/ProblemContainer";
import SolutionContainer from "../components/SolutionContainer";
import WireframeContainer from "../components/WireframeContainer";
import BetaContainer from "../components/BetaContainer";
import styles from "./Page.module.css";

const Page: FunctionComponent = () => {
    return (
        <div className={styles.page}>
            <HeaderContainer/>
            <ProblemContainer/>
            <SolutionContainer/>
            <WireframeContainer/>
            <BetaContainer/>
            <div className={styles.footerSection}>
                <section className={styles.footer}>
                    <img className={styles.logoIcon} alt="" src="/logo@2x.png"/>
                    <div className={styles.contact}>
                        <p className={styles.contactUs}>Contact us</p>
                        <p className={styles.christopherfkkuniminervaedu}>
                            christopherfkk@uni.minerva.edu
                        </p>
                        <p className={styles.christopherfkkuniminervaedu}>
                            hugosyh@uni.minerva.edu
                        </p>
                        <p className={styles.christopherfkkuniminervaedu}>
                            bentley@uni.minerva.edu
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Page;
