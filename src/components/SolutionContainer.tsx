import { FunctionComponent } from "react";
import Solution from "./Solution";
import styles from "./SolutionContainer.module.css";
const SolutionContainer: FunctionComponent = () => {
  return (
    <section className={styles.solutionSection}>
      <div className={styles.solution}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderText}>OUR Solution</div>
        </div>
        <Solution
          solutionHeadline="Bayesian Ranking system"
          firstWireframe="/wireframe@2x.png"
          secondWireframe="/wireframe1@2x.png"
          solutionText="See exactly how you stack up against your peers on a local or city level! Helps you play against opponents of similar skill level, and know the exact level of competitiveness to expect!"
          propAlignSelf="stretch"
          propAspectRatio="0.4983"
        />
        <Solution
          solutionHeadline="Matchmaking Made Simple"
          firstWireframe="/wireframe2@2x.png"
          secondWireframe="/wireframe3@2x.png"
          solutionText="RankIT keeps track of both you and your opponent’s busy schedules and availability, so finding a time that works for both parties is made easy!"
          propAlignSelf="unset"
          propAspectRatio="unset"
        />
        <Solution
          solutionHeadline="Performance Analytics"
          firstWireframe="/wireframe4@2x.png"
          secondWireframe="/wireframe5@2x.png"
          solutionText="Get to know your greatest strengths and biggest weaknesses using opponent feedback!"
          propAlignSelf="unset"
          propAspectRatio="unset"
        />
      </div>
    </section>
  );
};

export default SolutionContainer;
