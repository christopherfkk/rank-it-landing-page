import { FunctionComponent } from "react";
import styles from "./Page1.module.css";
const Page1: FunctionComponent = () => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.background}>
          <img
            className={styles.playerImage2Icon}
            alt=""
            src="/playerimage2@2x.png"
          />
          <div className={styles.playerImage2} />
        </div>
        <img
          className={styles.background1Icon}
          alt=""
          src="/background-1@2x.png"
        />
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
            <div className={styles.joinText}>JOIN WAITLIST</div>
          </div>
        </div>
        <img className={styles.logoIcon} alt="" src="/logo2@2x.png" />
      </div>
      <div className={styles.problemSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderText}>the Problem</div>
        </div>
        <div className={styles.details}>
          <div className={styles.problem1}>
            <div className={styles.problem1Header}>
              <div className={styles.headline1}>LACK OF COMPETITIVENESS</div>
              <img
                className={styles.mdiswordCrossIcon}
                alt=""
                src="/mdiswordcross1.svg"
              />
              <div className={styles.paragram}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
          </div>
          <div className={styles.problem2}>
            <div className={styles.problem1Header}>
              <div className={styles.headline1}>no consistent play</div>
              <img
                className={styles.mdiswordCrossIcon}
                alt=""
                src="/mdicalendar1.svg"
              />
              <div className={styles.paragram}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
          </div>
          <div className={styles.problem3}>
            <div className={styles.problem1Header}>
              <div className={styles.headline1}>cannot track progress</div>
              <img
                className={styles.mdiswordCrossIcon}
                alt=""
                src="/mdichart1.svg"
              />
              <div className={styles.paragram}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.solution}>
        <div className={styles.sectionHeader1}>
          <div className={styles.sectionHeaderText}>OUR Solution</div>
        </div>
        <div className={styles.solution1Group}>
          <div className={styles.solutionSection}>
            <div className={styles.header1}>
              <div className={styles.headline1}>Bayesian Ranking system</div>
              <div className={styles.paragraph2}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
          </div>
          <div className={styles.wireframes}>
            <img
              className={styles.wireframeIcon}
              alt=""
              src="/wireframe@2x.png"
            />
            <img
              className={styles.wireframeIcon}
              alt=""
              src="/wireframe1@2x.png"
            />
          </div>
        </div>
        <div className={styles.solution2Group}>
          <div className={styles.wireframes}>
            <img
              className={styles.wireframeIcon}
              alt=""
              src="/wireframe2@2x.png"
            />
            <img
              className={styles.wireframeIcon}
              alt=""
              src="/wireframe3@2x.png"
            />
          </div>
          <div className={styles.solutionSection}>
            <div className={styles.header1}>
              <div className={styles.headline1}>Skill-based matchmaking</div>
              <div className={styles.paragraph2}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
          </div>
        </div>
        <div className={styles.solution3Group}>
          <div className={styles.solutionSection}>
            <div className={styles.header1}>
              <div className={styles.headline1}>performance analytics</div>
              <div className={styles.paragraph2}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
          </div>
          <div className={styles.wireframes}>
            <img
              className={styles.wireframeIcon}
              alt=""
              src="/wireframe4@2x.png"
            />
            <img
              className={styles.wireframeIcon}
              alt=""
              src="/wireframe5@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.wireframe}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderText}>Wireframes</div>
        </div>
        <div className={styles.wireframeGroup}>
          <img
            className={styles.wireframeIcon6}
            alt=""
            src="/wireframe61@2x.png"
          />
          <img
            className={styles.wireframeIcon6}
            alt=""
            src="/wireframe71@2x.png"
          />
          <img
            className={styles.wireframeIcon6}
            alt=""
            src="/wireframe81@2x.png"
          />
          <img
            className={styles.wireframeIcon6}
            alt=""
            src="/wireframe91@2x.png"
          />
          <img
            className={styles.wireframeIcon6}
            alt=""
            src="/wireframe101@2x.png"
          />
          <img
            className={styles.wireframeIcon6}
            alt=""
            src="/wireframe111@2x.png"
          />
        </div>
      </div>
      <div className={styles.beta}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionHeaderText}>beta</div>
        </div>
        <div className={styles.sectionDetails}>
          <div className={styles.pilot1}>
            <div className={styles.header4}>
              <div className={styles.headline1}>Hyderabad, india 🇮🇳</div>
              <div className={styles.paragram}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
          </div>
          <div className={styles.pilot1}>
            <div className={styles.header4}>
              <div className={styles.headline1}>Tokyo, Japan 🇯🇵</div>
              <div className={styles.paragram}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionDetails1}>
          <div className={styles.paragram3}>
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
          <div className={styles.joinWaitlist}>JOIN WAITLIST</div>
        </div>
      </div>
      <div className={styles.footer}>
        <img className={styles.logoIcon1} alt="" src="/logo11@2x.png" />
        <div className={styles.contact}>
          <p className={styles.contactUs}>Contact us</p>
          <p className={styles.blankLine}>christopherfkk@uni.minerva.edu</p>
          <p className={styles.blankLine}>hugosyh@uni.minerva.edu</p>
          <p className={styles.blankLine}>bentley@uni.minerva.edu</p>
        </div>
      </div>
    </div>
  );
};

export default Page1;
