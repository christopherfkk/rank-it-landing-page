import {FunctionComponent, useMemo} from "react";
import styles from "./SolutionContainer.module.css";
import CSS, {Property} from 'csstype';

type SolutionType = {
  solutionHeadline?: string;
  firstWireframe?: string;
  secondWireframe?: string;
  solutionText?: string;
};

const Solution: FunctionComponent<
  SolutionType
> = ({
  solutionHeadline,
  firstWireframe,
  secondWireframe,
  solutionText,
}) => {

  return (
    <div className={styles.solution}>

      <div className={styles.solutionBlob}>
        <div className={styles.headline}>
          {solutionHeadline}
        </div>
        <div className={styles.paragraph}>
          {solutionText}
        </div>
      </div>

      <div className={styles.wireframes}>
        <img
            className={styles.wireframe}
            alt=""
            src={firstWireframe}
        />
        <img
            className={styles.wireframe}
            alt=""
            src={secondWireframe}
        />
      </div>

    </div>
  );
};
const SolutionContainer: FunctionComponent = () => {
  return (

    <div className={styles.solutionSection}>

      <div className={styles.sectionHeader}>
        <div className={styles.sectionHeaderText}>OUR Solution</div>
      </div>

      <Solution
        solutionHeadline="Bayesian Ranking system"
        firstWireframe="/wireframe@2x.png"
        secondWireframe="/wireframe1@2x.png"
        solutionText="See exactly how you stack up against your peers on a local or city level! Helps you play against opponents of similar skill level, and know the exact level of competitiveness to expect!"
      />
      <Solution
        solutionHeadline="Matchmaking Made Simple"
        firstWireframe="/wireframe2@2x.png"
        secondWireframe="/wireframe3@2x.png"
        solutionText="RankIT keeps track of both you and your opponent’s busy schedules and availability, so finding a time that works for both parties is made easy!"
      />
      <Solution
        solutionHeadline="Performance Analytics"
        firstWireframe="/wireframe4@2x.png"
        secondWireframe="/wireframe5@2x.png"
        solutionText="Get to know your greatest strengths and biggest weaknesses using opponent feedback!"
      />

    </div>
  );
};

export default SolutionContainer;
