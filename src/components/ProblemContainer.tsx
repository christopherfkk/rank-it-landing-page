import { FunctionComponent } from "react";
import styles from "./ProblemContainer.module.css";
const ProblemContainer: FunctionComponent = () => {
  return (
    <div className={styles.problemSection}>
      <div className={styles.section}>
        <div className={styles.header}>
          <div className={styles.sectionHeaderText}>the Problem</div>
        </div>
        <section className={styles.details}>
          <div className={styles.problem1}>
            <div className={styles.headline}>LACK OF COMPETITIVENESS</div>
            <img
              className={styles.mdiswordCrossIcon}
              alt=""
              src="/mdiswordcross.svg"
            />
            <div className={styles.paragraph}>
              Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
              dignissim imperdiet augue amet nisi adipiscing
            </div>
          </div>
          <div className={styles.problem1}>
            <div className={styles.headline}>no consistent play</div>
            <img
              className={styles.mdicalendarIcon}
              alt=""
              src="/mdicalendar.svg"
            />
            <div className={styles.paragraph1}>
              Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
              dignissim imperdiet augue amet nisi adipiscing
            </div>
          </div>
          <div className={styles.problem1}>
            <div className={styles.headline}>cannot track progress</div>
            <img
              className={styles.mdicalendarIcon}
              alt=""
              src="/mdichart.svg"
            />
            <div className={styles.paragraph2}>
              Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
              dignissim imperdiet augue amet nisi adipiscing
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProblemContainer;
