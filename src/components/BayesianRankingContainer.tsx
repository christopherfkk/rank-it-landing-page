import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./BayesianRankingContainer.module.css";

type BayesianRankingContainerType = {
  rankingSystemText?: string;
  matchmakingText?: string;
  rankingSystemId?: string;

  /** Style props */
  propAlignSelf?: Property.AlignSelf;
  propAspectRatio?: Property.AspectRatio;
};

const BayesianRankingContainer: FunctionComponent<
  BayesianRankingContainerType
> = ({
  rankingSystemText,
  matchmakingText,
  rankingSystemId,
  propAlignSelf,
  propAspectRatio,
}) => {
  const wireframesStyle: CSS.Properties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const wireframeIconStyle: CSS.Properties = useMemo(() => {
    return {
      aspectRatio: propAspectRatio,
    };
  }, [propAspectRatio]);

  return (
    <section className={styles.solution1Group}>
      <div className={styles.group}>
        <div className={styles.headline}>{rankingSystemText}</div>
        <div className={styles.paragraph}>
          Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
          dignissim imperdiet augue amet nisi adipiscing
        </div>
      </div>
      <div className={styles.wireframes} style={wireframesStyle}>
        <img
          className={styles.wireframeIcon}
          alt=""
          src={matchmakingText}
          style={wireframeIconStyle}
        />
        <img className={styles.wireframeIcon1} alt="" src={rankingSystemId} />
      </div>
    </section>
  );
};

export default BayesianRankingContainer;
