// import React from 'react'
import classes from "./Hero.module.scss";
import video1 from "../../assets/video/1.mp4";
// import html from "../../assets/img/svg/html.svg";
// import css from "../../assets/img/svg/css.svg";
// import bootstrap from "../../assets/img/svg/bootstrap.svg";
// import angular from "../../assets/img/svg/angular.svg";
// import avatar from "../../assets/img/about/4.jpg";

function Hero({ title, subtitle, avatar, name, skills }) {
  return (
    <div className={classes.hero} id="home">
      <div className={classes["hero__container"]}>
        <div className={classes["hero__content"]}>
          <div className={classes["hero__texts"]}>
            <div className={classes["hero__job"]}>
              <video autoPlay loop muted width="100%" playsInline>
                <source src={video1} type="video/mp4" />
              </video>
              <h3>
                {/* Senior Designer
                <br />
                &amp; Developer */}
                {title}
              </h3>
            </div>
            <p className={classes["hero__desc"]}>
              {/* Hi, I'm Alan Walker. A passionate Senior Designer and Front-End
              Developer based In NYC, USA */}
              Hi, I'm {name}. {subtitle}
            </p>
            <div className={classes["hero__short-skills"]}>
              <div className={classes["hero__text"]}>
                <span>
                  High knowledge on
                  <br />
                  softwares
                </span>
              </div>

              <div className={classes["hero__icons"]}>
                <ul>
                  {skills?.map((skill) => (
                    <li key={skill.image["public_id"]}>
                      <img
                        className="svg"
                        src={skill.image.url}
                        alt={skill.name}
                      />
                    </li>
                  ))}
                </ul>
                {/* <ul>
                  <li>
                    <img className="svg" src={html} alt="html" />
                  </li>
                  <li>
                    <img className="svg" src={css} alt="css" />
                  </li>
                  <li>
                    <img className="svg" src={angular} alt="angular" />
                  </li>
                  <li>
                    <img className="svg" src={bootstrap} alt="bootstrap" />
                  </li>
                </ul> */}
              </div>
            </div>
          </div>
          <div className={classes["hero__avatar"]}>
            <img className={classes["hero__image"]} src={avatar}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
