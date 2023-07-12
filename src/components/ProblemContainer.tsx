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
              The chances of you finding someone of the same skill level are low!
              It’s no fun getting outclassed, or having to hold back.
            </div>
          </div>

          <div className={styles.problem1}>
            <div className={styles.headline}>
              Great games are one off!
            </div>
            <img
              className={styles.mdicalendarIcon}
              alt=""
              src="/mdicalendar.svg"
            />
            <div className={styles.paragraph1}>
              You just had a fun game with a great opponent! But scheduling future matches
              can be a hassle. Between exchanging contacts and figuring out each others schedules,
              it’s hard to coordinate with someone you just met.
            </div>
          </div>

          <div className={styles.problem1}>
            <div className={styles.headline}>
              Difficult to Track Progress
            </div>
            <img
              className={styles.mdicalendarIcon}
              alt=""
              src="/mdichart.svg"
            />
            <div className={styles.paragraph2}>
              Every opponent plays differently! It’s hard to track your own growth, strengths,
              and weaknesses with inconsistent opponents.
            </div>
          </div>

        </section>

      </div>
    </div>
  );
};

export default ProblemContainer;
