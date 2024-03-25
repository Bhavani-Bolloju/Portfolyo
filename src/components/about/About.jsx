/* eslint-disable react/prop-types */
// import React from 'react'

import { useContext } from "react";
import classes from "./About.module.scss";
import thumbs from "../../assets/img/thumbs/1-1.jpg";
import { cursorContext } from "../cntx/cursorcontext";
// import signature from "../../assets/img/signature.png";

function About({ avatar, address, description, title, experience }) {
  // console.log(avatar, address, description, title);
  const { handleCursor } = useContext(cursorContext);

  return (
    <section className={classes["about"]} id="about">
      <div className={classes["about__container"]}>
        <div className={classes["about__inner"]}>
          <div className={classes["about__left"]}>
            <div className={classes["about__image"]}>
              <img src={thumbs} alt="" />
              <div
                className={classes["about__main"]}
                data-img-url="../../assets/img/about/2.jpg"
              >
                <img src={avatar} alt="user" />
              </div>
              <div className={classes["about__experience"]}>
                <h3
                  className={classes["about__year"]}
                  data-img-url="../../assets/img/about/2.jpg"
                >
                  {/* 7 */}
                  {experience}
                </h3>
                <div className={classes.circle}>
                  <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="300px"
                    height="300px"
                    viewBox="0 0 300 300"
                    enableBackground="new 0 0 300 300"
                    xmlSpace="preserve"
                  >
                    <defs>
                      <path
                        id="circlePath"
                        d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                      />
                    </defs>
                    <circle cx="150" cy="150" r="75" fill="none" />
                    <g>
                      <path xlinkHref="#circlePath" fill="none" />
                      <text>
                        <textPath xlinkHref="#circlePath">
                          Years of best and successful work experience
                        </textPath>
                      </text>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className={classes["about__right"]}>
            <div className={classes["about__title"]}>
              <span>About Me</span>
              <h3>
                A passionate {title} based In {address}
                {/* A passionate Senior Designer and Front-End Developer based In
                NYC, USA */}
              </h3>
            </div>
            <div className={classes["about__text"]}>
              <p>
                {/* I am passionate Senior Designer, and I'm very passionate and
                dedicated to my work. With 7 years experience as a professional
                Web developer, I have acquired the skills and knowledge
                necessary to make your project a success. */}
                {description}
              </p>
            </div>
            <div className={classes["about__signature"]}>
              {/* <img src={signature} alt="" /> */}
            </div>
            <div
              className={classes["about__button"]}
              onMouseEnter={handleCursor}
              onMouseLeave={handleCursor}
            >
              <a href="#">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
