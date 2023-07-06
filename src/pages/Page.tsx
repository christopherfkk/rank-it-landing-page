import { FunctionComponent } from "react";
import styles from "./Page.module.css";
const Page: FunctionComponent = () => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.h1Copy}>
          <div className={styles.headline}>
            <div className={styles.pageHeader}>Badminton made competitive</div>
            <div className={styles.pageHeaderP}>
              <span
                className={styles.playRankGames}
              >{`Play rank games in real life. Challenge others, log your scores, and see who’s king in your neighborhood or city. Transform your game play today with `}</span>
              <b>RankIT</b>
            </div>
          </div>
          <div className={styles.joinWaitlistButton}>
            <div className={styles.joinWaitlist}>JOIN WAITLIST</div>
          </div>
        </div>
      </div>
      <div className={styles.problemSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderText}>the Problem</div>
        </div>
        <div className={styles.details}>
          <div className={styles.description}>
            <div className={styles.problem1Header}>
              <div className={styles.headline1}>LACK OF COMPETITIVENESS</div>
              <div className={styles.paragram}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.problem1Header}>
              <div className={styles.headline1}>cannot track progress</div>
              <div className={styles.paragram}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.problem1Header}>
              <div className={styles.headline1}>no consistent play</div>
              <div className={styles.paragram}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.solution}>
        <div className={styles.solution3Group}>
          <div className={styles.description}>
            <div className={styles.problem1Header}>
              <div className={styles.headline1}>Bayesian Ranking system</div>
              <div className={styles.paragram}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
          </div>
          <img
            className={styles.wireframeIcon}
            alt=""
            src={process.env.PUBLIC_URL + "/wireframe@2x.png"}
          />
        </div>
        <div className={styles.solution2Group}>
          <img
            className={styles.wireframeIcon}
            alt=""
            src={process.env.PUBLIC_URL + "/wireframe@2x.png"}
          />
          <div className={styles.description}>
            <div className={styles.problem1Header}>
              <div className={styles.headline1}>Bayesian Ranking system</div>
              <div className={styles.paragram}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
          </div>
        </div>
        <div className={styles.solution1Group}>
          <div className={styles.description}>
            <div className={styles.problem1Header}>
              <div className={styles.headline1}>Bayesian Ranking system</div>
              <div className={styles.paragram}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
          </div>
          <img
            className={styles.wireframeIcon}
            alt=""
            src={process.env.PUBLIC_URL + "/wireframe@2x.png"}
          />
        </div>
        <div className={styles.sectionHeader1}>
          <div className={styles.sectionHeaderText}>OUR Solution</div>
        </div>
      </div>
      <div className={styles.wireframe}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderText}>Wireframes</div>
        </div>
        <div className={styles.wireframeGroup}>
          <img
            className={styles.wireframeIcon3}
            alt=""
            src={process.env.PUBLIC_URL + "/wireframe1@2x.png"}
          />
          <img
            className={styles.wireframeIcon3}
            alt=""
            src={process.env.PUBLIC_URL + "/wireframe2@2x.png"}
          />
          <img
            className={styles.wireframeIcon3}
            alt=""
            src={process.env.PUBLIC_URL + "/wireframe3@2x.png"}
          />
          <img
            className={styles.wireframeIcon3}
            alt=""
            src={process.env.PUBLIC_URL + "/wireframe4@2x.png"}
          />
          <img
            className={styles.wireframeIcon3}
            alt=""
            src={process.env.PUBLIC_URL + "/wireframe1@2x.png"}
          />
          <img
            className={styles.wireframeIcon3}
            alt=""
            src={process.env.PUBLIC_URL + "/wireframe2@2x.png"}
          />
        </div>
      </div>
      <div className={styles.beta}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderText}>beta</div>
        </div>
        <div className={styles.sectionDetails}>
          <div className={styles.pilot1}>
            <div className={styles.problem1Header}>
              <div className={styles.headline1}>Hyderabad, india 🇮🇳</div>
              <div className={styles.paragram}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
          </div>
          <div className={styles.pilot2}>
            <div className={styles.problem1Header}>
              <div className={styles.headline1}>
                <p className={styles.tokyoJapan}>Tokyo, japan 🇯🇵</p>
              </div>
              <div className={styles.paragram}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionDetails1}>
          <div className={styles.paragram2}>
            <span className={styles.paragramTxt}>
              <p className={styles.joinUs}>Join us</p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine}>
                We are currently looking for users to use our app. To this and
                do that. Click below.
              </p>
            </span>
          </div>
        </div>
        <div className={styles.joinWaitlistButton1}>
          <div className={styles.joinWaitlist1}>JOIN WAITLIST</div>
        </div>
      </div>
      <div className={styles.footer} />
    </div>
  );
};

export default Page;
