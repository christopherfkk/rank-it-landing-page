import { FunctionComponent } from "react";
import styles from "./ProblemSection.module.css";
const ProblemSection: FunctionComponent = () => {
  return (
    <div className={styles.problemSection}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionHeaderText}>the Problem</div>
      </div>
      <div className={styles.details}>
        <div className={styles.problem1}>
          <div className={styles.problem1Header}>
            <div className={styles.headline}>LACK OF COMPETITIVENESS</div>
            <div className={styles.paragram}>
              Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
              dignissim imperdiet augue amet nisi adipiscing
            </div>
          </div>
        </div>
        <div className={styles.problem1}>
          <div className={styles.problem1Header}>
            <div className={styles.headline}>cannot track progress</div>
            <div className={styles.paragram}>
              Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
              dignissim imperdiet augue amet nisi adipiscing
            </div>
          </div>
        </div>
        <div className={styles.problem1}>
          <div className={styles.problem1Header}>
            <div className={styles.headline}>no consistent play</div>
            <div className={styles.paragram}>
              Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
              dignissim imperdiet augue amet nisi adipiscing
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
