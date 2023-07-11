import { FunctionComponent } from "react";
import styles from "./HeaderContainer.module.css";
const HeaderContainer: FunctionComponent = () => {
  return (
    <section className={styles.headerSection}>
      <section className={styles.section}>
        <div className={styles.headline}>
          <img className={styles.logoIcon} alt="" src="/logo1@2x.png" />
          <div className={styles.text}>
            <div className={styles.text1}>
              <div className={styles.header}>Badminton made competitiVe</div>
              <div className={styles.para}>
                <span
                  className={styles.playRankGames}
                >{`Play rank games in real life. Challenge others, log your scores, and see who’s king in your neighborhood or city. Transform your game play today with `}</span>
                <b>RankIT</b>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.text2}>JOIN WAITLIST</div>
            </div>
          </div>
        </div>
        <img
          className={styles.backgroundIcon}
          alt=""
          src="/background-blur@2x.png"
        />
      </section>
    </section>
  );
};

export default HeaderContainer;
