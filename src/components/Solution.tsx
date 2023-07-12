import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./Solution.module.css";

type SolutionType = {
  solutionHeadline?: string;
  firstWireframe?: string;
  secondWireframe?: string;
  solutionText?: string;


  /** Style props */
  propAlignSelf?: Property.AlignSelf;
  propAspectRatio?: Property.AspectRatio;
};

const Solution: FunctionComponent<
  SolutionType
> = ({
  solutionHeadline,
  firstWireframe,
  secondWireframe,
  solutionText,
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
        <div className={styles.headline}>{solutionHeadline}</div>
        <div className={styles.paragraph}>
          {solutionText}
        </div>
      </div>
      <div className={styles.wireframes} style={wireframesStyle}>
        <img
          className={styles.wireframeIcon}
          alt=""
          src={firstWireframe}
          style={wireframeIconStyle}
        />
        <img className={styles.wireframeIcon1} alt="" src={secondWireframe} />
      </div>
    </section>
  );
};

export default Solution;
