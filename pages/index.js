import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Select } from "antd";
import styles from "./index.module.css";
const FrameComponent = () => {
  const onHowToGetClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='howToGet']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onHistoryClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='historyText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onDidYouKnow1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='didYouKnow']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onWhatsHotClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='whatsHotText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onPopularAttractionNearbyClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='popularExperiencesContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onQuickFactsClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='quickFactsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.nav}>
        <div className={styles.frameParent}>
          <a
            className={styles.vectorWrapper}
            href="https://www.siciliamia.com/"
          >
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          </a>
          <a className={styles.frameItem} href="https://www.siciliamia.com/" />
          <div className={styles.ellipseParent}>
            <div className={styles.frameInner} />
            <img className={styles.lineIcon} alt="" src="/line-1.svg" />
          </div>
          <div className={styles.frameGroup}>
            <a className={styles.frame} href="https://www.siciliamia.com/">
              <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            </a>
            <a className={styles.frame1} href="https://www.siciliamia.com/">
              <img className={styles.vectorIcon} alt="" src="/group.svg" />
            </a>
            <a className={styles.frame2} href="https://www.siciliamia.com/">
              <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
            </a>
          </div>
          <Select
            className={styles.itaParent}
            style={{ width: "52px" }}
            size="middle"
            placeholder="Eng"
            bordered={false}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            virtual={true}
            showArrow={false}
          >
            <Select.Option value="Ita">Ita</Select.Option>
            <Select.Option value="Esp">Esp</Select.Option>
          </Select>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangle} />
          <div className={styles.rectangle1} />
          <div className={styles.rectangle2} />
          <div className={styles.rectangle3} />
          <div className={styles.rectangle4} />
        </div>
        <div className={styles.link4Parent}>
          <a className={styles.link4}>Get a vacation</a>
          <a className={styles.link4}>Book your tours</a>
          <a className={styles.link4}>Rent a car</a>
          <a className={styles.link4}>Best Selection</a>
        </div>
        <a className={styles.image13} href="https://www.siciliamia.com/" />
      </div>
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleContainer}>
        <div className={styles.frameChild1} />
        <div className={styles.typeParent}>
          <div className={styles.type}>Type</div>
          <div className={styles.experience}>Experience</div>
        </div>
        <div className={styles.destinationParent}>
          <div className={styles.destination}>Destination</div>
          <div className={styles.favignana}>Favignana</div>
        </div>
        <div className={styles.averageRatingParent}>
          <div className={styles.averageRating}>Average rating</div>
          <div className={styles.div}>4.8</div>
        </div>
        <div className={styles.numberOfReviewsParent}>
          <div className={styles.numberOfReviews}>Number of reviews</div>
          <div className={styles.div}>2698</div>
        </div>
        <div className={styles.familyFriendlyParent}>
          <div className={styles.familyFriendly}>Family Friendly</div>
          <div className={styles.no}>No</div>
        </div>
        <div className={styles.highSeasonParent}>
          <div className={styles.destination}>High Season</div>
          <div className={styles.div}>Spring</div>
        </div>
      </div>
      <div className={styles.jumpToChapter}>Jump to chapter</div>
      <div className={styles.relatedStory}>Related story</div>
      <div className={styles.uniqueExperiences}>Unique experiences</div>
      <div className={styles.seeMore}>See more...</div>
      <a className={styles.howToGetContainer} onClick={onHowToGetClick}>
        How to get there
        <div className={styles.anchorHowToGetThere} data-scroll-to="howToGet" />
      </a>
      <a className={styles.history} onClick={onHistoryClick}>
        History
      </a>
      <a className={styles.didYouKnow} onClick={onDidYouKnow1Click}>
        Did you know?
      </a>
      <a className={styles.whatsHot} onClick={onWhatsHotClick}>
        What’s hot
      </a>
      <a
        className={styles.popularAttractionNearbyContainer}
        onClick={onPopularAttractionNearbyClick}
      >
        <span className={styles.popularAttractionNearbyContainer1}>
          <p className={styles.popularAttraction}>Popular attraction</p>
          <p className={styles.popularAttraction}>nearby</p>
        </span>
      </a>
      <a className={styles.quickFacts} onClick={onQuickFactsClick}>
        Quick facts
      </a>
      <a className={styles.tripadvisorReviews}>TripAdvisor reviews</a>
      <a className={styles.googleReviews}>Google reviews</a>
      <div
        className={styles.loremIpsumDolor}
      >{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `}</div>
      <div className={styles.howToGet}>How to get there</div>
      <div
        className={styles.loremIpsumDolor1}
      >{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `}</div>
      <div
        className={styles.loremIpsumDolor2}
      >{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `}</div>
      <div className={styles.seeAlsoTheContainer}>
        <span className={styles.popularAttractionNearbyContainer1}>
          <span>{`See also: `}</span>
          <span className={styles.theBestTuna}>
            The best Tuna Restaurants in Sicily
          </span>
        </span>
      </div>
      <div className={styles.didYouKnow1} data-scroll-to="didYouKnow">
        Did you know?
      </div>
      <div className={styles.loremIpsumDolorContainer}>
        <span className={styles.popularAttractionNearbyContainer1}>
          <p className={styles.popularAttraction}>
            <span>{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. `}</span>
            <span className={styles.theBestTuna}>Excepteur</span>
            <span>{` sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `}</span>
          </p>
          <p className={styles.popularAttraction}>&nbsp;</p>
          <p className={styles.popularAttraction}>
            <span>{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam `}</span>
            <span className={styles.theBestTuna}>corporis suscipit</span>
            <span
              className={styles.laboriosamNisiUt}
            >{` laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `}</span>
          </p>
        </span>
      </div>
      <div className={styles.history1} data-scroll-to="historyText">
        History
      </div>
      <div
        className={styles.loremIpsumDolor3}
      >{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `}</div>
      <div className={styles.whatsHot1} data-scroll-to="whatsHotText">
        What’s hot
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameChild2} />
        <div className={styles.authentic}>Authentic</div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.frameChild3} />
        <div className={styles.sailing}>Sailing</div>
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.frameChild4} />
        <div className={styles.connectWithLocals}>Connect with locals</div>
      </div>
      <div className={styles.tags}>Tags</div>
      <div className={styles.rectangleParent3}>
        <div className={styles.frameChild5} />
        <div className={styles.history2}>History</div>
      </div>
      <div className={styles.rectangleParent4}>
        <div className={styles.frameChild6} />
        <div className={styles.spring1}>Spring</div>
      </div>
      <div className={styles.rectangleParent5}>
        <div className={styles.frameChild7} />
        <div className={styles.outdoors}>Outdoors</div>
      </div>
      <div className={styles.rectangleParent6}>
        <div className={styles.frameChild8} />
        <div className={styles.lowBudget}>Low budget</div>
      </div>
      <a className={styles.genericTitleParent}>
        <div className={styles.genericTitle}>Generic Title</div>
        <div
          className={styles.loremIpsumDolor4}
        >{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut  `}</div>
        <img className={styles.icon} alt="" src="/1373573255@2x.png" />
      </a>
      <a className={styles.genericTitleGroup}>
        <div className={styles.genericTitle}>Generic Title</div>
        <div
          className={styles.loremIpsumDolor4}
        >{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut  `}</div>
        <img className={styles.icon} alt="" src="/download-1@2x.png" />
      </a>
      <a className={styles.genericTitleContainer}>
        <div className={styles.genericTitle}>Generic Title</div>
        <div
          className={styles.loremIpsumDolor4}
        >{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut  `}</div>
        <img className={styles.icon} alt="" src="/download@2x.png" />
      </a>
      <div className={styles.lineDiv} />
      <div className={styles.frameChild9} />
      <a className={styles.frameA} target="_blank">
        <div className={styles.genericTitle}>Generic Title</div>
        <div
          className={styles.loremIpsumDolor4}
        >{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut  `}</div>
        <img
          className={styles.icon}
          alt=""
          src="/20190602-112300-copy-1152x8631080x675-1@2x.png"
        />
      </a>
      <a className={styles.genericTitleParent1} target="_blank">
        <div className={styles.genericTitle}>Generic Title</div>
        <div
          className={styles.loremIpsumDolor4}
        >{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut  `}</div>
        <img className={styles.icon} alt="" src="/unnamed-1@2x.png" />
      </a>
      <div className={styles.frameChild10} />
      <div className={styles.frameChild11} />
      <a className={styles.cardBest}>
        <div className={styles.hotel}>
          <div className={styles.rectangleParent7}>
            <div className={styles.rectangle5} />
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/rectangle-273@2x.png"
            />
            <b className={styles.templeOfValley}>Temple of Valley</b>
          </div>
          <div className={styles.fourOptions}>
            <div className={styles.fourOptionsChild} />
            <div className={styles.startingTimeFlexible}>
              <p className={styles.startingTime}>Starting time</p>
              <p className={styles.flexible}>Flexible</p>
            </div>
            <div className={styles.duration5To15Container}>
              <p className={styles.startingTime}>Duration</p>
              <p className={styles.flexible}>5 to 15 days</p>
            </div>
            <div className={styles.availabilityWholeYear}>
              <p className={styles.startingTime}>Availability</p>
              <p className={styles.flexible}>Whole year</p>
            </div>
            <div className={styles.personalGuideYes}>
              <p className={styles.startingTime}>Personal Guide</p>
              <p className={styles.flexible}>Yes</p>
            </div>
            <img className={styles.infoIcon} alt="" src="/info.svg" />
            <img className={styles.clockIcon} alt="" src="/clock.svg" />
            <img className={styles.calendarIcon} alt="" src="/calendar.svg" />
            <img className={styles.usersIcon} alt="" src="/users.svg" />
          </div>
        </div>
        <div className={styles.fromParent}>
          <div className={styles.from}>From</div>
          <div className={styles.div2}>$349</div>
        </div>
        <div className={styles.review}>
          <div className={styles.reviewChild} />
          <div className={styles.div3}>4.8</div>
          <div className={styles.reviews}>100 reviews</div>
          <img className={styles.starsIcon} alt="" src="/stars.svg" />
        </div>
      </a>
      <a className={styles.cardBest1}>
        <div className={styles.hotel}>
          <div className={styles.rectangleParent7}>
            <div className={styles.rectangle5} />
            <b className={styles.naxosArcheologicalPark}>
              Naxos Archeological Park
            </b>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/taorminateatro-1@2x.png"
            />
          </div>
          <div className={styles.fourOptions}>
            <div className={styles.fourOptionsChild} />
            <div className={styles.startingTimeFlexible}>
              <p className={styles.startingTime}>Starting time</p>
              <p className={styles.flexible}>Flexible</p>
            </div>
            <div className={styles.duration5To15Container}>
              <p className={styles.startingTime}>Duration</p>
              <p className={styles.flexible}>5 to 15 days</p>
            </div>
            <div className={styles.availabilityWholeYear}>
              <p className={styles.startingTime}>Availability</p>
              <p className={styles.flexible}>Whole year</p>
            </div>
            <div className={styles.personalGuideYes}>
              <p className={styles.startingTime}>Personal Guide</p>
              <p className={styles.flexible}>Yes</p>
            </div>
            <img className={styles.infoIcon} alt="" src="/info.svg" />
            <img className={styles.clockIcon} alt="" src="/clock.svg" />
            <img className={styles.calendarIcon} alt="" src="/calendar.svg" />
            <img className={styles.usersIcon} alt="" src="/users.svg" />
          </div>
        </div>
        <div className={styles.fromParent}>
          <div className={styles.from}>From</div>
          <div className={styles.div2}>$349</div>
        </div>
        <div className={styles.review}>
          <div className={styles.reviewChild} />
          <div className={styles.div3}>4.8</div>
          <div className={styles.reviews}>100 reviews</div>
          <img className={styles.starsIcon} alt="" src="/stars.svg" />
        </div>
      </a>
      <a className={styles.cardBest2}>
        <div className={styles.hotel}>
          <div className={styles.rectangleParent7}>
            <div className={styles.rectangle5} />
            <b className={styles.teatroGrecoDi}>Teatro greco di Siracusa</b>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="/teatrogrecosiracusahd-1@2x.png"
            />
          </div>
          <div className={styles.fourOptions}>
            <div className={styles.fourOptionsChild} />
            <div className={styles.startingTimeFlexible}>
              <p className={styles.startingTime}>Starting time</p>
              <p className={styles.flexible}>Flexible</p>
            </div>
            <div className={styles.duration5To15Container}>
              <p className={styles.startingTime}>Duration</p>
              <p className={styles.flexible}>5 to 15 days</p>
            </div>
            <div className={styles.availabilityWholeYear}>
              <p className={styles.startingTime}>Availability</p>
              <p className={styles.flexible}>Whole year</p>
            </div>
            <div className={styles.personalGuideYes}>
              <p className={styles.startingTime}>Personal Guide</p>
              <p className={styles.flexible}>Yes</p>
            </div>
            <img className={styles.infoIcon} alt="" src="/info.svg" />
            <img className={styles.clockIcon} alt="" src="/clock.svg" />
            <img className={styles.calendarIcon} alt="" src="/calendar.svg" />
            <img className={styles.usersIcon} alt="" src="/users.svg" />
          </div>
        </div>
        <div className={styles.fromParent}>
          <div className={styles.from}>From</div>
          <div className={styles.div2}>$349</div>
        </div>
        <div className={styles.review}>
          <div className={styles.reviewChild} />
          <div className={styles.div3}>4.8</div>
          <div className={styles.reviews}>100 reviews</div>
          <img className={styles.starsIcon} alt="" src="/stars.svg" />
        </div>
      </a>
      <img className={styles.faSolidfireIcon} alt="" src="/fasolidfire.svg" />
      <iframe
        className={styles.frameIframe}
        src={`https://www.youtube.com/embed/R5KWbc_iXCQ?rel=0&controls=0`}
        frameBorder="0"
        allowFullScreen
      />
      <a className={styles.viewAllParent}>
        <div className={styles.viewAll}>View all</div>
        <img
          className={styles.clarityangleLineIcon}
          alt=""
          src="/clarityangleline.svg"
        />
      </a>
      <div className={styles.imageParent}>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        <div className={styles.byNameSurname}>By Name Surname</div>
        <div className={styles.sicilysTunaFishingContainer}>
          <p
            className={styles.popularAttraction}
          >{`Sicily’s Tuna Fishing Tradition `}</p>
          <p className={styles.popularAttraction}>
            on Display at the Tonnara di Favignana
          </p>
        </div>
      </div>
      <img
        className={styles.tonnarotiMattanzaFavignanaTIcon}
        alt=""
        src="/tonnarotimattanzafavignanatonnaraquotetonno720x444-1@2x.png"
      />
      <div className={styles.frameChild12} />
      <div className={styles.frameChild13} />
      <div className={styles.frameChild14} />
      <div className={styles.frameChild15} />
      <div className={styles.hotel3}>
        <div className={styles.rectangleParent10}>
          <div className={styles.rectangle8} />
          <b className={styles.favignanaTunaFishing}>Favignana tuna fishing</b>
        </div>
      </div>
      <div className={styles.rectangleParent11}>
        <div className={styles.frameChild16} />
        <div className={styles.search}>Plan your trip</div>
        <img className={styles.mattanza2Icon} alt="" src="/mattanza-2@2x.png" />
      </div>
      <div className={styles.tripadvisorReviews1}>TripAdvisor reviews</div>
      <div className={styles.clarityangleLineParent}>
        <img
          className={styles.clarityangleLineIcon1}
          alt=""
          src="/clarityangleline1.svg"
        />
        <div className={styles.vectorParent}>
          <img
            className={styles.frameChild17}
            alt=""
            src="/rectangle-322.svg"
          />
          <img
            className={styles.frameChild17}
            alt=""
            src="/rectangle-322.svg"
          />
          <div className={styles.giulioBaccoAugust30Container}>
            <p className={styles.giulioBacco}>Giulio Bacco</p>
            <p className={styles.popularAttraction}>
              <span className={styles.august3020201}>
                <span className={styles.august3020202}>August 30, 2020.</span>
              </span>
            </p>
          </div>
          <div
            className={styles.loremIpsumDolor9}
          >{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut. `}</div>
          <img className={styles.frameIcon} alt="" src="/frame-504.svg" />
          <img className={styles.intersectIcon} alt="" src="/intersect.svg" />
          <div className={styles.frameChild19} />
          <div className={styles.frameChild20} />
        </div>
        <div className={styles.vectorGroup}>
          <img
            className={styles.frameChild17}
            alt=""
            src="/rectangle-322.svg"
          />
          <img
            className={styles.frameChild17}
            alt=""
            src="/rectangle-322.svg"
          />
          <div className={styles.giulioBaccoAugust30Container}>
            <p className={styles.giulioBacco}>Nina Handerson</p>
            <p className={styles.popularAttraction}>
              <span className={styles.august3020201}>
                <span className={styles.august3020202}>August 30, 2020.</span>
              </span>
            </p>
          </div>
          <div
            className={styles.loremIpsumDolor9}
          >{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut. `}</div>
          <img className={styles.frameIcon} alt="" src="/frame-504.svg" />
          <div className={styles.frameChild19} />
          <div className={styles.frameChild20} />
        </div>
        <div className={styles.vectorContainer}>
          <img
            className={styles.frameChild17}
            alt=""
            src="/rectangle-322.svg"
          />
          <img
            className={styles.frameChild17}
            alt=""
            src="/rectangle-322.svg"
          />
          <div className={styles.giulioBaccoAugust30Container}>
            <p className={styles.giulioBacco}>Daniela Xavier</p>
            <p className={styles.popularAttraction}>
              <span className={styles.august3020201}>
                <span className={styles.august3020202}>August 30, 2020.</span>
              </span>
            </p>
          </div>
          <div
            className={styles.loremIpsumDolor9}
          >{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut. `}</div>
          <img className={styles.frameIcon} alt="" src="/frame-504.svg" />
          <div className={styles.frameChild19} />
          <div className={styles.frameChild20} />
        </div>
        <img
          className={styles.clarityangleLineIcon2}
          alt=""
          src="/clarityangleline2.svg"
        />
        <img className={styles.intersectIcon1} alt="" src="/intersect1.svg" />
        <img className={styles.intersectIcon1} alt="" src="/intersect2.svg" />
      </div>
      <div className={styles.footer}>
        <div className={styles.rectangle9} />
        <div className={styles.logoAbout}>
          <div className={styles.loremIpsumDolor12}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <img className={styles.image13Icon} alt="" src="/image-131@2x.png" />
        </div>
        <a className={styles.termsConditions}>{`Terms & Conditions`}</a>
        <div className={styles.copyright2020}>
          Copyright © 2020. LogoIpsum. All rights reserved.
        </div>
        <a className={styles.privacyPolicy}>Privacy Policy</a>
        <div className={styles.services}>
          <div className={styles.services1}>Services</div>
          <a className={styles.emailMarketing}>Accomodation</a>
          <a className={styles.campaigns}>Campaigns</a>
          <a className={styles.branding}>{`Tours & Travel`}</a>
          <a className={styles.offline}>Event Management</a>
        </div>
        <div className={styles.about}>
          <div className={styles.about1}>About</div>
          <a className={styles.ourStory}>Our Story</a>
          <a className={styles.ourStory}>Benefits</a>
          <a className={styles.ourStory}>Team</a>
          <a className={styles.ourStory}>Careers</a>
        </div>
        <div className={styles.followUs}>
          <div className={styles.followUs1}>Follow Us</div>
          <a
            className={styles.facebookParent}
            href="https://www.siciliamia.com/"
          >
            <div className={styles.facebook}>Facebook</div>
            <img className={styles.pathIcon} alt="" src="/path.svg" />
          </a>
          <a
            className={styles.twitterParent}
            href="https://www.siciliamia.com/"
          >
            <div className={styles.twitter}>Twitter</div>
            <img className={styles.pathIcon1} alt="" src="/path1.svg" />
          </a>
          <a className={styles.instagramParent}>
            <div className={styles.instagram}>Instagram</div>
            <img
              className={styles.instagramIcon}
              alt=""
              src="/004instagram.svg"
            />
          </a>
        </div>
      </div>
      <div className={styles.googleReviews1}>Google reviews</div>
      <div className={styles.clarityangleLineGroup}>
        <img
          className={styles.clarityangleLineIcon3}
          alt=""
          src="/clarityangleline2.svg"
        />
        <img
          className={styles.clarityangleLineIcon4}
          alt=""
          src="/clarityangleline1.svg"
        />
        <div className={styles.vectorParent1}>
          <img
            className={styles.frameChild17}
            alt=""
            src="/rectangle-322.svg"
          />
          <img
            className={styles.frameChild32}
            alt=""
            src="/rectangle-325.svg"
          />
          <div className={styles.giulioBaccoAugust30Container}>
            <p className={styles.giulioBacco}>Giulio Bacco</p>
            <p className={styles.popularAttraction}>
              <span className={styles.august3020201}>
                <span className={styles.august3020202}>August 30, 2020.</span>
              </span>
            </p>
          </div>
          <div
            className={styles.loremIpsumDolor9}
          >{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut. `}</div>
          <img className={styles.intersectIcon} alt="" src="/intersect3.svg" />
          <div className={styles.frameChild19} />
          <div className={styles.frameChild20} />
        </div>
        <div className={styles.vectorGroup}>
          <img
            className={styles.frameChild17}
            alt=""
            src="/rectangle-322.svg"
          />
          <img
            className={styles.frameChild32}
            alt=""
            src="/rectangle-325.svg"
          />
          <div className={styles.giulioBaccoAugust30Container}>
            <p className={styles.giulioBacco}>Giulio Bacco</p>
            <p className={styles.popularAttraction}>
              <span className={styles.august3020201}>
                <span className={styles.august3020202}>August 30, 2020.</span>
              </span>
            </p>
          </div>
          <div
            className={styles.loremIpsumDolor9}
          >{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut. `}</div>
          <img className={styles.intersectIcon} alt="" src="/intersect4.svg" />
          <div className={styles.frameChild19} />
          <div className={styles.frameChild20} />
        </div>
        <div className={styles.vectorGroup}>
          <img
            className={styles.frameChild17}
            alt=""
            src="/rectangle-322.svg"
          />
          <img
            className={styles.frameChild32}
            alt=""
            src="/rectangle-325.svg"
          />
          <div className={styles.giulioBaccoAugust30Container}>
            <p className={styles.giulioBacco}>Giulio Bacco</p>
            <p className={styles.popularAttraction}>
              <span className={styles.august3020201}>
                <span className={styles.august3020202}>August 30, 2020.</span>
              </span>
            </p>
          </div>
          <div
            className={styles.loremIpsumDolor9}
          >{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut. `}</div>
          <img className={styles.intersectIcon} alt="" src="/intersect5.svg" />
          <div className={styles.frameChild19} />
          <div className={styles.frameChild20} />
        </div>
        <div className={styles.vectorParent4}>
          <img
            className={styles.frameChild17}
            alt=""
            src="/rectangle-322.svg"
          />
          <img
            className={styles.frameChild32}
            alt=""
            src="/rectangle-325.svg"
          />
          <div className={styles.giulioBaccoAugust30Container}>
            <p className={styles.giulioBacco}>Giulio Bacco</p>
            <p className={styles.popularAttraction}>
              <span className={styles.august3020201}>
                <span className={styles.august3020202}>August 30, 2020.</span>
              </span>
            </p>
          </div>
          <div
            className={styles.loremIpsumDolor9}
          >{`Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut. `}</div>
          <div className={styles.frameChild19} />
          <div className={styles.frameChild20} />
        </div>
        <img className={styles.intersectIcon1} alt="" src="/intersect6.svg" />
        <img className={styles.intersectIcon1} alt="" src="/intersect7.svg" />
      </div>
      <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
      <img className={styles.vectorIcon4} alt="" src="/vector3.svg" />
      <img className={styles.vectorIcon5} alt="" src="/vector3.svg" />
      <img className={styles.vectorIcon6} alt="" src="/vector3.svg" />
      <img className={styles.vectorIcon7} alt="" src="/vector4.svg" />
      <img className={styles.vectorIcon8} alt="" src="/vector3.svg" />
      <img className={styles.vectorIcon9} alt="" src="/vector3.svg" />
      <img className={styles.vectorIcon10} alt="" src="/vector3.svg" />
      <img className={styles.vectorIcon11} alt="" src="/vector4.svg" />
      <img className={styles.vectorIcon12} alt="" src="/vector3.svg" />
      <img className={styles.vectorIcon13} alt="" src="/vector3.svg" />
      <img className={styles.vectorIcon14} alt="" src="/vector3.svg" />
      <img className={styles.vectorIcon15} alt="" src="/vector4.svg" />
      <img className={styles.vectorIcon16} alt="" src="/vector3.svg" />
      <img className={styles.vectorIcon17} alt="" src="/vector3.svg" />
      <img className={styles.frameChild47} alt="" src="/group-487.svg" />
      <img className={styles.frameChild48} alt="" src="/group-489.svg" />
      <img className={styles.frameChild49} alt="" src="/group-487.svg" />
      <div className={styles.otherInterestingArticles}>
        <b className={styles.otherInterestingArticles1}>
          Other interesting articles
        </b>
        <img className={styles.dividerIcon} alt="" src="/divider.svg" />
        <a className={styles.blog01}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group@2x.png"
          />
          <b className={styles.whatToDoContainer}>
            <p
              className={styles.popularAttraction}
            >{`What to do and where to go `}</p>
            <p className={styles.popularAttraction}>Sicily during covid 19?</p>
          </b>
          <div
            className={styles.findOutWhat}
          >{`Find out what to do and where to go in Sicily. See the list of the top spots and activities. `}</div>
          <div className={styles.readMore}>Read more</div>
        </a>
        <a className={styles.blog011}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group1@2x.png"
          />
          <b className={styles.theManyBenefitsContainer}>
            <p
              className={styles.popularAttraction}
            >{`The many benefits of  `}</p>
            <p className={styles.popularAttraction}>taking a healing holiday</p>
          </b>
          <div className={styles.findOutWhat}>
            <p
              className={styles.popularAttraction}
            >{`‘Helaing holidays’ are on the rise `}</p>
            <p className={styles.popularAttraction}>
              tohelp maximise your health and happines...
            </p>
          </div>
          <div className={styles.readMore}>Read more</div>
        </a>
        <a className={styles.blog012}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group2@2x.png"
          />
          <b className={styles.whatToDoContainer}>
            <p className={styles.popularAttraction}>
              Travelling italy without spea
            </p>
            <p className={styles.popularAttraction}>king any Italian</p>
          </b>
          <div className={styles.findOutWhat}>
            <p
              className={styles.popularAttraction}
            >{`‘Helaing holidays’ are on the rise `}</p>
            <p className={styles.popularAttraction}>
              tohelp maximise your health and happines...
            </p>
          </div>
          <div className={styles.readMore}>Read more</div>
        </a>
        <a className={styles.blog013}>
          <img
            className={styles.maskGroupIcon}
            alt=""
            src="/mask-group3@2x.png"
          />
          <b className={styles.whatToDoContainer}>
            <p className={styles.popularAttraction}>
              Getting a perfect sun tan in
            </p>
            <p className={styles.popularAttraction}>
              wonderful italian beaches
            </p>
          </b>
          <div className={styles.findOutWhat}>
            <p
              className={styles.popularAttraction}
            >{`‘Helaing holidays’ are on the rise `}</p>
            <p className={styles.popularAttraction}>
              tohelp maximise your health and happines...
            </p>
          </div>
          <div className={styles.readMore}>Read more</div>
        </a>
      </div>
      <div className={styles.topAttra}>
        <b className={styles.topAttractionIn}>Top Attraction in Sicily</b>
        <a className={styles.deal}>
          <img className={styles.imageIcon1} alt="" src="/image1@2x.png" />
          <b className={styles.losAngeles}>Mount Etna</b>
        </a>
        <img className={styles.vectorIcon18} alt="" src="/vector5.svg" />
        <div className={styles.topAttraChild} />
        <div className={styles.startingTomorrow}>Starting tomorrow</div>
        <a className={styles.deal1}>
          <img className={styles.imageIcon1} alt="" src="/image2@2x.png" />
          <b className={styles.losAngeles1}>The Cathedral of Monreale</b>
        </a>
        <a className={styles.deal2}>
          <img className={styles.imageIcon1} alt="" src="/image3@2x.png" />
          <b className={styles.losAngeles2}>
            The Valley of Temples in Agrigento
          </b>
        </a>
        <a className={styles.deal3}>
          <img className={styles.imageIcon1} alt="" src="/image4@2x.png" />
          <b className={styles.losAngeles3}>Church Mosaics in Palermo</b>
        </a>
        <a className={styles.deal4}>
          <img className={styles.imageIcon1} alt="" src="/image4@2x.png" />
          <b className={styles.losAngeles3}>Church Mosaics in Palermo</b>
        </a>
        <div className={styles.viewAll1}>
          <a className={styles.viewAll2}>
            <div className={styles.viewAll3}>View all</div>
            <img className={styles.viewAllChild} alt="" src="/vector-1.svg" />
          </a>
        </div>
        <img className={styles.dividerIcon1} alt="" src="/divider1.svg" />
      </div>
      <div className={styles.quickFacts1} data-scroll-to="quickFactsContainer">
        <div className={styles.quickFacts2}>Quick facts</div>
        <div className={styles.quickFactsChild} />
        <a className={styles.segestatourcom} href="https://www.siciliamia.com/">
          segestatour.com
        </a>
        <a className={styles.a}>+39 0924 952356</a>
        <img
          className={styles.icoutlinePlaceIcon}
          alt=""
          src="/icoutlineplace.svg"
        />
        <a
          className={styles.contradaBarbaroSnc}
          href={`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.5069006958875!2d12.833481675891397!3d37.941948571943726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x131a2bd4a53c35ed%3A0x559d91900e24430a!2sParco%20Archeologico%20di%20Segesta!5e0!3m2!1sen!2sbr!4v1691415028141!5m2!1sen!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
        >
          Contrada Barbaro SNC, 91013 Calatafimi-Segesta, Sicilia Italia
        </a>
        <img className={styles.vectorIcon19} alt="" src="/vector6.svg" />
        <img className={styles.vectorIcon20} alt="" src="/vector7.svg" />
      </div>
      <div className={styles.somethingIncorrectIn}>
        Something incorrect in this review?
      </div>
      <div className={styles.suggestAnEdit}>Suggest an edit!</div>
      <div className={styles.seeAlsoDiscoveringContainer}>
        <span className={styles.popularAttractionNearbyContainer1}>
          <span>{`See also: `}</span>
          <span className={styles.theBestTuna}>Discovering Favignana</span>
        </span>
      </div>
      <div
        className={styles.popularExperiences}
        data-scroll-to="popularExperiencesContainer"
      >
        <div className={styles.popularExperiencesIn}>
          Popular experiences in Sicily
        </div>
        <div className={styles.bestPlaceTo}>Best place to eat nearby</div>
        <a className={styles.deal5}>
          <img className={styles.imageIcon6} alt="" src="/image5@2x.png" />
          <b className={styles.losAngeles5}>Viri Ku C’e</b>
          <b className={styles.losAngeles6}>
            {" "}
            Via Riviera Lanterna, 29, Scoglitti, Vittoria RG
          </b>
          <b className={styles.losAngeles7}> +39 0932 980016</b>
          <img className={styles.mapPinIcon} alt="" src="/mappin.svg" />
          <img className={styles.phoneCallIcon} alt="" src="/phonecall.svg" />
        </a>
        <a className={styles.deal6}>
          <img className={styles.imageIcon6} alt="" src="/image6@2x.png" />
          <b className={styles.losAngeles8}>Trattoria Piccolo Napoli</b>
          <b className={styles.losAngeles6}>
            {" "}
            Piazzetta Mulino a Vento, 4, 90139 Palermo
          </b>
          <b className={styles.losAngeles7}>+39 091 320431</b>
          <img className={styles.mapPinIcon1} alt="" src="/mappin1.svg" />
          <img className={styles.phoneCallIcon} alt="" src="/phonecall1.svg" />
        </a>
        <a className={styles.deal7}>
          <img className={styles.imageIcon8} alt="" src="/image7@2x.png" />
          <b className={styles.losAngeles11}>Da Vittorio</b>
          <b className={styles.losAngeles12}>
            Via Friuli Venezia Giulia, 9, 92013 Menfi AG
          </b>
          <b className={styles.losAngeles13}>+39 0925 78381</b>
          <img className={styles.mapPinIcon2} alt="" src="/mappin2.svg" />
          <img className={styles.phoneCallIcon2} alt="" src="/phonecall2.svg" />
        </a>
        <div className={styles.viewAll4}>
          <div className={styles.viewAll5}>View all</div>
          <img className={styles.viewAllChild} alt="" src="/vector-1.svg" />
        </div>
        <iframe
          className={styles.popularExperiencesChild}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1628680.2024463795!2d11.290085486603738!3d37.12853388165145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13106268d05359b3%3A0x10b042967b67d50!2sSicily%2C%20Italy!5e0!3m2!1sen!2sbr!4v1691414527681!5m2!1sen!2sbr"
        />
      </div>
      <div className={styles.whatDoYou}>
        What do you think about the article?
      </div>
      <button className={styles.rate1}>
        <div className={styles.rate1Child} />
        <b className={styles.loveIt}>Love it</b>
      </button>
      <button className={styles.rate2}>
        <div className={styles.rate2Child} />
        <b className={styles.loveIt}>Useful</b>
      </button>
      <button className={styles.rate3}>
        <div className={styles.rate3Child} />
        <b className={styles.loveIt}>Want to find out more</b>
      </button>
      <button className={styles.rate4}>
        <div className={styles.rate4Child} />
        <b className={styles.loveIt}>Not my cup of tea</b>
      </button>
      <button className={styles.rate41}>
        <div className={styles.rate4Item} />
        <b className={styles.loveIt}>Didn’t get it</b>
      </button>
      <img className={styles.icon1} alt="" src="/20210304-4-1@2x.png" />
      <div className={styles.illustrationsLikeThese}>
        Illustrations like these
      </div>
      <img className={styles.frameChild50} alt="" src="/vector-3.svg" />
    </div>
  );
};

export default FrameComponent;
