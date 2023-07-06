import { FunctionComponent } from "react";
import styles from "./Header.module.css";
const Header: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.h1Copy}>
        <div className={styles.headline}>
          <div className={styles.pageHeader}>Badminton made competitive</div>
          <div className={styles.pageHeaderP}>
            <span
              className={styles.playRankGames}
            >{`Play rank games in real life. Challenge others, log your scores, and see who’s king in your neighborhood or city. Transform your game play today with `}</span>
            <b>RankIT</b>
          </div>
        </div>
        <div className={styles.joinWaitlistButton}>
          <div className={styles.joinWaitlist}>JOIN WAITLIST</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
