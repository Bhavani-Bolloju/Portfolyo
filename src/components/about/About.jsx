/* eslint-disable react/prop-types */
// import React from 'react'

import { useContext } from "react";
import classes from "./About.module.scss";
import thumbs from "../../assets/img/thumbs/1-1.jpg";
import { cursorContext } from "../cntx/cursorcontext";
import TitleSlider from "../UI/TitleSlider";
// import signature from "../../assets/img/signature.png";

function About({
  avatar,
  address,
  description,
  title,
  experience,
  quote,
  phone,
  email
}) {
  // console.log(avatar, address, description, title);
  const { handleCursor } = useContext(cursorContext);

  return (
    <section className={classes["about"]} id="about">
      <div className={classes["about__container"]}>
        <div className={classes["about__title-slider"]}>
          <TitleSlider title={quote}></TitleSlider>
        </div>
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
            <div className={classes["about__contact-details"]}>
              <a href={`mailto:${email}`} className={classes.svg}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </a>
              <a href={`tel:${phone}`} className={classes.svg}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </a>
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
