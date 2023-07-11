import { FunctionComponent } from "react";
import styles from "./BetaContainer.module.css";
const BetaContainer: FunctionComponent = () => {
  return (
    <div className={styles.betaSection}>
      <div className={styles.section}>
        <div className={styles.header}>
          <div className={styles.sectionHeaderText}>beta</div>
        </div>
        <section className={styles.pilots}>
          <div className={styles.pilot1}>
            <div className={styles.headline}>Hyderabad, india 🇮🇳</div>
            <div className={styles.paragram}>
              Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
              dignissim imperdiet augue amet nisi adipiscing
            </div>
          </div>
          <div className={styles.pilot1}>
            <div className={styles.headline}>Tokyo, Japan 🇯🇵</div>
            <div className={styles.paragram1}>
              Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
              dignissim imperdiet augue amet nisi adipiscing
            </div>
          </div>
        </section>
        <div className={styles.join}>
          <div className={styles.headline2}>Join us</div>
          <div className={styles.paragraph}>
            We are currently looking for users to use our app. To this and do
            that. Click below.
          </div>
        </div>
      </div>
    </div>
  );
};

export default BetaContainer;
