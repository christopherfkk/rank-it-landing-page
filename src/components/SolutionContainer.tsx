import { FunctionComponent } from "react";
import BayesianRankingContainer from "./BayesianRankingContainer";
import styles from "./SolutionContainer.module.css";
const SolutionContainer: FunctionComponent = () => {
  return (
    <section className={styles.solutionSection}>
      <div className={styles.solution}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderText}>OUR Solution</div>
        </div>
        <BayesianRankingContainer
          rankingSystemText="Bayesian Ranking system"
          matchmakingText="/wireframe@2x.png"
          rankingSystemId="/wireframe1@2x.png"
          propAlignSelf="stretch"
          propAspectRatio="0.4983"
        />
        <BayesianRankingContainer
          rankingSystemText="Skill-based matchmaking"
          matchmakingText="/wireframe2@2x.png"
          rankingSystemId="/wireframe3@2x.png"
          propAlignSelf="unset"
          propAspectRatio="unset"
        />
        <BayesianRankingContainer
          rankingSystemText="performance analytics"
          matchmakingText="/wireframe4@2x.png"
          rankingSystemId="/wireframe5@2x.png"
          propAlignSelf="unset"
          propAspectRatio="unset"
        />
      </div>
    </section>
  );
};

export default SolutionContainer;
