import { FunctionComponent } from "react";
import styles from "./ProblemContainer.module.css";

type ProblemType = {
  headline?: string;
  icon?: string;
  paragraph?: string;
};

const Problem: FunctionComponent<
  ProblemType
> = ({
  headline,
  icon,
  paragraph,
}) => {

  return (
      <div className={styles.problem}>
        <div className={styles.headline}>
          {headline}
        </div>
        <img
            className={styles.icon}
            alt=""
            src={icon}
        />
        <div className={styles.paragraph}>
          {paragraph}
        </div>
      </div>
  );
};

const ProblemContainer: FunctionComponent = () => {
  return (
    <div className={styles.problemSection}>

        <div className={styles.header}>
          <div className={styles.sectionHeaderText}>The Problem</div>
        </div>

        <section className={styles.details}>

          <Problem
            headline="Lack of competitiveness"
            icon="/mdiswordcross.svg"
            paragraph="
            The chances of you finding someone of the same skill level
            are low! It’s no fun getting outclassed, or having to hold back.
            "
          />

          <Problem
            headline="Great games are one off!"
            icon="/mdicalendar.svg"
            paragraph="
            You just had a fun game with a great opponent! But scheduling
            future matches can be a hassle.

            &#10;&#13;Between exchanging contacts and figuring out each others schedules,
            it’s hard to coordinatewith someone you just met.
            "
          />

          <Problem
            headline="Difficult to Track Progress"
            icon="/mdichart.svg"
            paragraph="
            Every opponent plays differently! It’s hard to track your own
            growth, strengths, and weaknesses with inconsistent opponents.
            "
          />

        </section>

    </div>
  );
};

export default ProblemContainer;
