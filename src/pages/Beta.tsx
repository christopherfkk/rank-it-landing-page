import { FunctionComponent } from "react";
import styles from "./Beta.module.css";
const Beta: FunctionComponent = () => {
  return (
    <div className={styles.beta}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionHeaderText}>beta</div>
      </div>
      <div className={styles.sectionDetails}>
        <div className={styles.pilot1}>
          <div className={styles.header}>
            <div className={styles.headline}>Hyderabad, india 🇮🇳</div>
            <div className={styles.paragram}>
              Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
              dignissim imperdiet augue amet nisi adipiscing
            </div>
          </div>
        </div>
        <div className={styles.pilot2}>
          <div className={styles.header}>
            <div className={styles.headline}>
              <p className={styles.tokyoJapan}>Tokyo, japan 🇯🇵</p>
            </div>
            <div className={styles.paragram}>
              Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
              dignissim imperdiet augue amet nisi adipiscing
            </div>
          </div>
        </div>
      </div>
      <div className={styles.sectionDetails1}>
        <div className={styles.paragram1}>
          <span className={styles.paragramTxt}>
            <p className={styles.joinUs}>Join us</p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.blankLine}>
              We are currently looking for users to use our app. To this and do
              that. Click below.
            </p>
          </span>
        </div>
      </div>
      <div className={styles.joinWaitlistButton}>
        <div className={styles.joinWaitlist}>JOIN WAITLIST</div>
      </div>
    </div>
  );
};

export default Beta;
