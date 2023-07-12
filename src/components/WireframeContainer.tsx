import { FunctionComponent } from "react";
import styles from "./WireframeContainer.module.css";
const WireframeContainer: FunctionComponent = () => {
  return (
    <div className={styles.wireframeSection}>

        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderText}>Wireframes</div>
        </div>

        <div className={styles.wireframes}>
          <img
            className={styles.wireframe}
            alt=""
            src="/wireframe6@2x.png"
          />
          <img
            className={styles.wireframe}
            alt=""
            src="/wireframe7@2x.png"
          />
          <img
            className={styles.wireframe}
            alt=""
            src="/wireframe8@2x.png"
          />
          <img
            className={styles.wireframe}
            alt=""
            src="/wireframe9@2x.png"
          />
          <img
            className={styles.wireframe}
            alt=""
            src="/wireframe10@2x.png"
          />
          <img
            className={styles.wireframe}
            alt=""
            src="/wireframe11@2x.png"
          />
        </div>
    </div>
  );
};

export default WireframeContainer;
