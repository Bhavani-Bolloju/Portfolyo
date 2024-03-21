// import React from 'react'
import classes from "./Services.module.scss";

function Services() {
  return (
    <section className={classes.services}>
      <div className={classes["services__container"]}>
        <div className={classes["services__inner"]}>
          <div className={classes["services__left"]}>
            <div className={classes["services__title"]}>
              <span>Services</span>
              <h3>I offer a Full-cycle of Web Development Services</h3>
            </div>
            <p className={classes["services__text"]}>
              For more than 20 years our experts have been accomplishing enough
              with modern Web Development, new generation programming language,
              and Full Stack developers to deliver cost-effective solutions.
            </p>
            <div className={["services__progress"]}>
              <div
                className={classes["services__progress-inner"]}
                data-value="95"
              >
                <span>
                  <span className={classes["services__progress-label"]}>
                    HTML &amp; CSS
                  </span>
                  <span className={classes["services__progress-number"]}>
                    95%
                  </span>
                </span>
                <div className={classes["services__progress-background"]}>
                  <div className={classes["services__progress-bar"]}>
                    <div className={classes["services__progress-bar-in"]}></div>
                  </div>
                </div>
              </div>
              <div
                className={classes["services__progress-inner"]}
                data-value="80"
              >
                <span>
                  <span className={classes["services__progress-label"]}>
                    HTML &amp; CSS
                  </span>
                  <span className={classes["services__progress-number"]}>
                    80%
                  </span>
                </span>
                <div className={classes["services__progress-background"]}>
                  <div className={classes["services__progress-bar"]}>
                    <div className={classes["services__progress-bar-in"]}></div>
                  </div>
                </div>
              </div>
              <div
                className={classes["services__progress-inner"]}
                data-value="85"
              >
                <span>
                  <span className={classes["services__progress-label"]}>
                    HTML &amp; CSS
                  </span>
                  <span className={classes["services__progress-number"]}>
                    85%
                  </span>
                </span>
                <div className={classes["services__progress-background"]}>
                  <div className={classes["services__progress-bar"]}>
                    <div className={classes["services__progress-bar-in"]}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes["services__right"]}>
            <ul className={classes["services__grid"]}>
              <li
                className={classes["services__grid-item"]}
                data-wow-duration="1.5s"
              >
                <div className={classes["services__list-inner"]}>
                  <img className="svg" src="img/svg/design.svg" alt="" />
                  <h3>Design</h3>
                </div>
              </li>
              <li
                className={classes["services__grid-item"]}
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className={classes["services__list-inner"]}>
                  <img className="svg" src="img/svg/code.svg" alt="" />
                  <h3>Development</h3>
                </div>
              </li>
              <li
                className={classes["services__grid-item"]}
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className={classes["services__list-inner"]}>
                  <img className="svg" src="img/svg/award.svg" alt="" />
                  <h3>Quality</h3>
                </div>
              </li>
              <li
                className={classes["services__grid-item"]}
                data-wow-duration="1.5s"
              >
                <div className={classes["services__list-inner"]}>
                  <img className="svg" src="img/svg/tools.svg" alt="" />
                  <h3>Maintain</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
