import { useCallback, useEffect } from "react";
import styles from "./Responsive3.module.css";

const Responsive3 = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onVectorIconClick = useCallback(() => {
    window.open("https://github.com/BigBadBode");
  }, []);

  const onBrandsTwitter1Click = useCallback(() => {
    window.open("https://twitter.com/BodieCurrier");
  }, []);

  const onBrandsLinkedin1Click = useCallback(() => {
    window.open("https://www.linkedin.com/in/bodie-currier/");
  }, []);

  return (
    <div className={styles.responsive3} data-animate-on-scroll>
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <div className={styles.socials}>
        <a
          className={styles.vector}
          href="https://github.com/BigBadBode"
          target="_blank"
          data-animate-on-scroll
        >
          <img
            className={styles.vectorIcon}
            alt=""
            src="/vector@3x.png"
            onClick={onVectorIconClick}
          />
        </a>
        <a
          className={styles.brandsTwitter}
          href="https://twitter.com/BodieCurrier"
          target="_blank"
        >
          <img
            className={styles.vectorIcon}
            alt=""
            src="/brands--twitter@2x.png"
            onClick={onBrandsTwitter1Click}
          />
        </a>
        <a
          className={styles.brandsLinkedin}
          href="https://www.linkedin.com/in/bodie-currier/?scrlybrkr=015b0422"
          target="_blank"
          data-animate-on-scroll
        >
          <img
            className={styles.vectorIcon}
            alt=""
            src="/brands--linkedin@2x.png"
            onClick={onBrandsLinkedin1Click}
          />
        </a>
      </div>
      <div className={styles.forgingTheFutureOfTechParent}>
        <b className={styles.forgingTheFuture}>Forging the Future of Tech</b>
        <div className={styles.frameChild} />
        <div className={styles.tigerAiLabelParent}>
          <div className={styles.tigerAiLabel}>
            <div className={styles.aCuttingEdgeStartup}>
              A cutting-edge startup
            </div>
            <div className={styles.component1}>
              <div className={styles.component1Child} />
              <div className={styles.button}>Tiger AI</div>
            </div>
          </div>
          <div className={styles.tigerAiLabel}>
            <div className={styles.aCuttingEdgeStartup}>
              An innovative AI persona
            </div>
            <div className={styles.component1}>
              <div className={styles.component1Child} />
              <div className={styles.button}>Maxwell Turing</div>
            </div>
          </div>
          <div className={styles.hackathonLabel}>
            <div className={styles.expandingTheAi}>
              Expanding the AI ecosystem
            </div>
            <div className={styles.component1}>
              <div className={styles.component1Child} />
              <div className={styles.button}>AI Hackathons</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.title}>
        <img className={styles.frameIcon} alt="" src="/frame@2x.png" />
        <div className={styles.ironheartTechLlc}>Ironheart Tech LLC.</div>
      </div>
      <img className={styles.unionIcon} alt="" src="/union@2x.png" />
      <img className={styles.squiggleIcon} alt="" src="/squiggle@2x.png" />
      <div className={styles.theCrucibleOf}>The Crucible of Innovation</div>
      <div className={styles.developPanel}>
        <div className={styles.ironheartTechDevelops}>
          Ironheart Tech develops robust and efficient AI-driven applications,
          ensuring precision and quality from concept to execution
        </div>
        <b className={styles.develop}>Develop</b>
        <img className={styles.subtractIcon} alt="" src="/subtract@2x.png" />
        <img
          className={styles.userInterfaceLayer}
          alt=""
          src="/user-interface--layer@2x.png"
        />
      </div>
      <div className={styles.designPanel}>
        <div className={styles.ironheartTechDevelops}>
          With a focus on innovation, Ironheart Tech builds AI systems that
          inspire growth, catering to a broad spectrum of ecosystems
        </div>
        <b className={styles.design}>Design</b>
        <img className={styles.subtractIcon} alt="" src="/subtract@2x.png" />
        <img className={styles.vectorIcon1} alt="" src="/vector@2x.png" />
      </div>
      <div className={styles.discoverPanel}>
        <div className={styles.ironheartTechDevelops}>
          Ironheart Tech uncovers cutting-edge AI solutions, innovating
          technologies that drive industry transformation and business growth
        </div>
        <b className={styles.discover}>Discover</b>
        <img className={styles.subtractIcon} alt="" src="/subtract@2x.png" />
        <img
          className={styles.locationAndMapDirectionT}
          alt=""
          src="/location-and-map--direction-tool@2x.png"
        />
      </div>
      <div className={styles.responsive3Child} />
      <div className={styles.tigerAiWasAnExperimentEmpParent}>
        <div className={styles.tigerAiWasContainer}>
          <p
            className={styles.tigerAiWas}
          >{`Tiger AI was an experiment employing Dreambooth, an AI process that allowed a model to recreate human faces in any style imaginable. Tiger AI was built using React, and in the process we developed versions with several Dreambooth APIs to varying degrees of success. `}</p>
          <p className={styles.tigerAiWas}>&nbsp;</p>
          <p className={styles.tigerAiWas}>
            Ultimately the profile picture market became saturated only weeks
            after Dreambooth’s release, and Tiger AI was unsuccessful in getting
            to market. However, the concept of the product remains strong and it
            has spawned new ideas and innovations.
          </p>
        </div>
        <img
          className={styles.tigeraiGraphicsIcon}
          alt=""
          src="/tigerai-graphics@2x.png"
        />
        <b className={styles.tigerAi}>Tiger AI</b>
      </div>
      <img className={styles.responsive3Item} alt="" src="/group-4@2x.png" />
      <b className={styles.maxwellTuring}>Maxwell Turing</b>
      <div className={styles.responsive3Inner} />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.theWorldsFirstAiCandidateParent}>
            <div
              className={styles.theWorldsFirst}
            >{`The World’s First AI Candidate for Student President  `}</div>
            <div className={styles.maxwellWasBuiltContainer}>
              <p className={styles.tigerAiWas}>
                Maxwell was built entirely using AI tools. His name, his face,
                his voice, and his political platform were all generated by AI,
                informed by synthesizing student opinions.
              </p>
              <p className={styles.tigerAiWas}>&nbsp;</p>
              <p className={styles.tigerAiWas}>
                The name Maxwell Turing was determined based on a list of
                philosophers and innovators elected by the club.
              </p>
              <p className={styles.tigerAiWas}>&nbsp;</p>
              <p className={styles.tigerAiWas}>
                The face was generated by Stable Diffusion when prompted with
                detailed demographics of the school.
              </p>
              <p className={styles.tigerAiWas}>&nbsp;</p>
              <p className={styles.tigerAiWas}>
                And Maxwell's platform, his opinions on school projects and
                policy, was being informed by questionnaires sent out to the
                entire student body.
              </p>
              <p className={styles.tigerAiWas}>&nbsp;</p>
              <p className={styles.learnMoreAtWwwmaxwellturin}>
                <span className={styles.learnMoreAt}>{`Learn more at `}</span>
                <a
                  className={styles.wwwmaxwellturingforpresident}
                  href="https://www.maxwellturingforpresident.com"
                  target="_blank"
                >
                  <span className={styles.wwwmaxwellturingforpresident1}>
                    www.maxwellturingforpresident.com
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <img className={styles.image35Icon} alt="" src="/image-35@2x.png" />
      </div>
      <div className={styles.otherProjectsSection}>
        <b className={styles.otherEvents}>{`Other Events & Projects`}</b>
        <div className={styles.accelerateSf}>
          <img className={styles.image39Icon} alt="" src="/image-39@2x.png" />
          <div className={styles.accelerateSfIsContainer}>
            <p
              className={styles.tigerAiWas}
            >{`Accelerate SF is collaborating with local stakeholders to scope use cases in housing, transportation, public health and more. `}</p>
            <p className={styles.tigerAiWas}>
              Participants will build AI solutions to the most pressing
              challenges facing San Francisco with potential for city-wide
              deployment.
            </p>
          </div>
          <div className={styles.accelerateSfHackathonContainer}>
            <p className={styles.tigerAiWas}>{`Accelerate SF Hackathon `}</p>
            <p className={styles.organizerOperator}>{`Organizer & Operator`}</p>
          </div>
        </div>
        <div className={styles.outsideLlms}>
          <img className={styles.image36Icon} alt="" src="/image-36@2x.png" />
          <div className={styles.outsideLlmsHackedContainer}>
            <p className={styles.tigerAiWas}>Outside LLMS</p>
            <p className={styles.tigerAiWas}>Hacked for 3 days in SF</p>
          </div>
        </div>
        <div className={styles.cerebralValley}>
          <img className={styles.image38Icon} alt="" src="/image-38@2x.png" />
          <div className={styles.cerebralValleyAttendedContainer}>
            <p className={styles.tigerAiWas}>Cerebral Valley</p>
            <p className={styles.tigerAiWas}>
              Attended 2 hackathons as a judge and scout
            </p>
          </div>
        </div>
        <div className={styles.latitude}>
          <img className={styles.image37Icon} alt="" src="/image-37@2x.png" />
          <div className={styles.latitudeGamesCommunityContainer}>
            <p className={styles.tigerAiWas}>Latitude Games</p>
            <p className={styles.tigerAiWas}>Community growth for 2 years</p>
          </div>
        </div>
        <div className={styles.thisSiteIsContainer}>
          <p className={styles.tigerAiWas}>
            This site is a portfolio made by Bodie Currier of Ironheart Tech
            LLC.
          </p>
          <p className={styles.tigerAiWas}>
            {" "}
            Companies and logos used do not represent legal sponsorships or
            partnerships
          </p>
        </div>
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.footerLeft}>
        <div className={styles.bodieCurrier}>Bodie Currier</div>
        <a
          className={styles.linkedin}
          href="https://www.linkedin.com/in/bodie-currier/"
          target="_blank"
        >
          LinkedIn
        </a>
        <div className={styles.bodiecurriergmailcom}>
          bodiecurrier@gmail.com
        </div>
      </div>
      <div className={styles.footerRight}>
        <img className={styles.frameIcon1} alt="" src="/frame@2x.png" />
        <div className={styles.ironheartTechLlc1}>Ironheart Tech LLC. 2023</div>
      </div>
    </div>
  );
};

export default Responsive3;
