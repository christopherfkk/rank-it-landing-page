import { FunctionComponent } from "react";
import styles from "./BetaContainer.module.css";
const BetaContainer: FunctionComponent = () => {
  return (
    <div className={styles.betaSection}>

        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderText}>beta</div>
        </div>

        <div className={styles.pilots}>

          <div className={styles.pilot}>
            <div className={styles.headline}>Hyderabad, india 🇮🇳</div>
            <div className={styles.paragraph}>
              We ran a minimal version of RankIT during our semester abroad in India
              at the Minerva University residence hall. We ranked Ping Pong as a proxy
              and got 30 users to play a tournament with us.
            </div>
          </div>

          <div className={styles.pilot}>
            <div className={styles.headline}>Tokyo, Japan 🇯🇵</div>
            <div className={styles.paragraph}>
              We are looking to run a mobile version of RankIT with badminton Meetup Organizers
              in Tokyo! If you are one and willing to help test out our product, we can sponsor
              one of your Meetup events (e.g. venue/participant fees) and in turn have you get
              involved in our development with your feedback!
            </div>
          </div>

          <div className={styles.pilot}>
          <div className={styles.headline}>Join us!</div>
          <div className={styles.paragraph}>
            If you'd like to receive development updates about RankIT, give us your email!
            Or if you're interested in testing our app, send all three of us an email linked
            at the bottom of the page!
          </div>
        </div>

        </div>



    </div>
  );
};

export default BetaContainer;
