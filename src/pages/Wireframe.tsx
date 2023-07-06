import { FunctionComponent } from "react";
import styles from "./Wireframe.module.css";
const Wireframe: FunctionComponent = () => {
  return (
    <div className={styles.wireframe}>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionHeaderText}>Wireframes</div>
      </div>
      <div className={styles.wireframeGroup}>
        <img className={styles.wireframeIcon} alt="" src="/wireframe2@2x.png" />
        <img className={styles.wireframeIcon} alt="" src="/wireframe2@2x.png" />
        <img className={styles.wireframeIcon} alt="" src="/wireframe3@2x.png" />
        <img className={styles.wireframeIcon} alt="" src="/wireframe4@2x.png" />
        <img className={styles.wireframeIcon} alt="" src="/wireframe1@2x.png" />
        <img className={styles.wireframeIcon} alt="" src="/wireframe2@2x.png" />
      </div>
    </div>
  );
};

export default Wireframe;
