import { FunctionComponent } from "react";
import styles from "./Page.module.css";
const Page: FunctionComponent = () => {
  return (
    <div className={styles.page}>
      <div className={styles.headerSection}>
        <section className={styles.section}>
          <div className={styles.headline}>
            <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
            <div className={styles.text}>
              <div className={styles.text1}>
                <div className={styles.header}>Badminton made competitiVe</div>
                <div className={styles.para}>
                  <span
                    className={styles.playRankGames}
                  >{`Play rank games in real life. Challenge others, log your scores, and see who’s king in your neighborhood or city. Transform your game play today with `}</span>
                  <b>RankIT</b>
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.text2}>JOIN WAITLIST</div>
              </div>
            </div>
          </div>
          <img
            className={styles.backgroundIcon}
            alt=""
            src="/background-blur@2x.png"
          />
        </section>
      </div>
      <div className={styles.problemSection}>
        <div className={styles.section1}>
          <div className={styles.header1}>
            <div className={styles.sectionHeaderText}>the Problem</div>
          </div>
          <section className={styles.details}>
            <div className={styles.problem1}>
              <div className={styles.headline1}>LACK OF COMPETITIVENESS</div>
              <img
                className={styles.mdiswordCrossIcon}
                alt=""
                src="/mdiswordcross.svg"
              />
              <div className={styles.paragram}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
            <div className={styles.problem2}>
              <div className={styles.headline1}>no consistent play</div>
              <img
                className={styles.mdiswordCrossIcon}
                alt=""
                src="/mdicalendar.svg"
              />
              <div className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
            <div className={styles.problem2}>
              <div className={styles.headline1}>cannot track progress</div>
              <img
                className={styles.mdiswordCrossIcon}
                alt=""
                src="/mdichart.svg"
              />
              <div className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
          </section>
        </div>
      </div>
      <section className={styles.solutionSection}>
        <div className={styles.solution}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionHeaderText}>OUR Solution</div>
          </div>
          <section className={styles.solution1Group}>
            <div className={styles.group}>
              <div className={styles.headline4}>Bayesian Ranking system</div>
              <div className={styles.paragraph2}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
            <div className={styles.wireframes}>
              <img
                className={styles.wireframeIcon}
                alt=""
                src="/wireframe@2x.png"
              />
              <img
                className={styles.wireframeIcon1}
                alt=""
                src="/wireframe1@2x.png"
              />
            </div>
          </section>
          <section className={styles.solution1Group}>
            <div className={styles.group}>
              <div className={styles.headline4}>Skill-based matchmaking</div>
              <div className={styles.paragraph2}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
            <div className={styles.wireframes1}>
              <img
                className={styles.wireframeIcon1}
                alt=""
                src="/wireframe2@2x.png"
              />
              <img
                className={styles.wireframeIcon1}
                alt=""
                src="/wireframe3@2x.png"
              />
            </div>
          </section>
          <section className={styles.solution1Group}>
            <div className={styles.group}>
              <div className={styles.headline4}>performance analytics</div>
              <div className={styles.paragraph2}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
            <div className={styles.wireframes1}>
              <img
                className={styles.wireframeIcon1}
                alt=""
                src="/wireframe4@2x.png"
              />
              <img
                className={styles.wireframeIcon1}
                alt=""
                src="/wireframe5@2x.png"
              />
            </div>
          </section>
        </div>
      </section>
      <section className={styles.wireframeSection}>
        <div className={styles.wireframes3}>
          <div className={styles.sectionHeader1}>
            <div className={styles.sectionHeaderText2}>Wireframes</div>
          </div>
          <section className={styles.wireframeGroup}>
            <img
              className={styles.wireframeIcon6}
              alt=""
              src="/wireframe6@2x.png"
            />
            <img
              className={styles.wireframeIcon6}
              alt=""
              src="/wireframe7@2x.png"
            />
            <img
              className={styles.wireframeIcon6}
              alt=""
              src="/wireframe8@2x.png"
            />
            <img
              className={styles.wireframeIcon6}
              alt=""
              src="/wireframe9@2x.png"
            />
            <img
              className={styles.wireframeIcon6}
              alt=""
              src="/wireframe10@2x.png"
            />
            <img
              className={styles.wireframeIcon6}
              alt=""
              src="/wireframe11@2x.png"
            />
          </section>
        </div>
      </section>
      <div className={styles.betaSection}>
        <div className={styles.section2}>
          <div className={styles.header2}>
            <div className={styles.sectionHeaderText}>beta</div>
          </div>
          <section className={styles.pilots}>
            <div className={styles.pilot1}>
              <div className={styles.headline1}>Hyderabad, india 🇮🇳</div>
              <div className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
            <div className={styles.pilot1}>
              <div className={styles.headline1}>Tokyo, Japan 🇯🇵</div>
              <div className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur. In ultrices vm ibendum
                dignissim imperdiet augue amet nisi adipiscing
              </div>
            </div>
          </section>
          <div className={styles.join}>
            <div className={styles.headline9}>Join us</div>
            <div className={styles.paragraph5}>
              We are currently looking for users to use our app. To this and do
              that. Click below.
            </div>
          </div>
          <div className={styles.button1}>
            <div className={styles.button2}>JOIN WAITLIST</div>
          </div>
        </div>
      </div>
      <div className={styles.footerSection}>
        <section className={styles.footer}>
          <img className={styles.logoIcon1} alt="" src="/logo1@2x.png" />
          <div className={styles.contact}>
            <p className={styles.contactUs}>Contact us</p>
            <p className={styles.christopherfkkuniminervaedu}>
              christopherfkk@uni.minerva.edu
            </p>
            <p className={styles.christopherfkkuniminervaedu}>
              hugosyh@uni.minerva.edu
            </p>
            <p className={styles.christopherfkkuniminervaedu}>
              bentley@uni.minerva.edu
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
