import {FunctionComponent} from "react";
import HeaderContainer from "../components/HeaderContainer";
import ProblemContainer from "../components/ProblemContainer";
import SolutionContainer from "../components/SolutionContainer";
import WireframeContainer from "../components/WireframeContainer";
import BetaContainer from "../components/BetaContainer";
import Form from '../components/FormContainer';
import styles from "./Page.module.css";
import headerStyles from "../components/HeaderContainer.module.css";

const Page: FunctionComponent = () => {

    const handleClickScroll = () => {
        const element = document.getElementById('form');
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <div className={headerStyles.page}>
            <section className={headerStyles.headerSection}>
                <section className={headerStyles.section}>
                    <div className={headerStyles.headline}>
                        <img className={headerStyles.logoIcon} alt="" src="/logo1@2x.png"/>
                        <div className={headerStyles.text}>
                            <div className={headerStyles.text1}>
                                <div className={headerStyles.header}>Badminton made competitive</div>
                                <div className={headerStyles.para}>
                <span
                    className={headerStyles.playRankGames}
                >{`Play rank games in real life. Challenge others, log your scores, and see who’s king in your neighborhood or city. Transform your game play today with `}</span>
                                    <b>RankIT</b>
                                </div>
                            </div>

                            <div className={headerStyles.button}>
                                <button className={headerStyles.button} onClick={handleClickScroll}>
                                    <div className={headerStyles.text2}>JOIN WAITLIST</div>
                                </button>
                            </div>

                        </div>
                    </div>
                    <img
                        className={headerStyles.backgroundIcon}
                        alt=""
                        src="/background-blur@2x.png"
                    />
                </section>
            </section>
            <ProblemContainer/>
            <SolutionContainer/>
            <WireframeContainer/>
            <BetaContainer/>
            <div id="form" style={{width: '100%'}}>
                <Form/>
            </div>
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
