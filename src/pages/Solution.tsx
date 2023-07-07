import { FunctionComponent } from "react";
import styles from "./Solution.module.css";
const Solution: FunctionComponent = () => {
  return (
    <div className={styles.solution}>
      <div className={styles.solution3Group}>
        <div className={styles.description}>
          <div className={styles.header}>
            <div className={styles.headline}>Bayesian Ranking system</div>
            <div className={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
              dignissim imperdiet augue amet nisi adipiscing
            </div>
          </div>
        </div>
        <img
          className={styles.wireframeIcon}
          alt=""
          src="/wireframe12@2x.png"
        />
      </div>
      <div className={styles.solution2Group}>
        <img
          className={styles.wireframeIcon}
          alt=""
          src="/wireframe12@2x.png"
        />
        <div className={styles.description}>
          <div className={styles.header}>
            <div className={styles.headline}>Bayesian Ranking system</div>
            <div className={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
              dignissim imperdiet augue amet nisi adipiscing
            </div>
          </div>
        </div>
      </div>
      <div className={styles.solution1Group}>
        <div className={styles.description}>
          <div className={styles.header}>
            <div className={styles.headline}>Bayesian Ranking system</div>
            <div className={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
              dignissim imperdiet augue amet nisi adipiscing
            </div>
          </div>
        </div>
        <img
          className={styles.wireframeIcon}
          alt=""
          src="/wireframe12@2x.png"
        />
      </div>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionHeaderText}>OUR Solution</div>
      </div>
    </div>
  );
};

export default Solution;
