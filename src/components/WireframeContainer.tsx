import { FunctionComponent } from "react";
import styles from "./WireframeContainer.module.css";
const WireframeContainer: FunctionComponent = () => {
  return (
    <section className={styles.wireframeSection}>
      <div className={styles.wireframes}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderText}>Wireframes</div>
        </div>
        <section className={styles.wireframeGroup}>
          <img
            className={styles.wireframeIcon}
            alt=""
            src="/wireframe6@2x.png"
          />
          <img
            className={styles.wireframeIcon}
            alt=""
            src="/wireframe7@2x.png"
          />
          <img
            className={styles.wireframeIcon}
            alt=""
            src="/wireframe8@2x.png"
          />
          <img
            className={styles.wireframeIcon}
            alt=""
            src="/wireframe9@2x.png"
          />
          <img
            className={styles.wireframeIcon}
            alt=""
            src="/wireframe10@2x.png"
          />
          <img
            className={styles.wireframeIcon}
            alt=""
            src="/wireframe11@2x.png"
          />
        </section>
      </div>
    </section>
  );
};

export default WireframeContainer;
