// import React from 'react'

import classes from "./Video.module.scss";

function Video() {
  return (
    <section className={classes["video"]}>
      <div className={classes["vide__background"]}>
        <div
          className={classes["video__image"]}
          data-speed="0"
          data-img-url="img/hero/1.jpg"
        >
          {/* <img src="" alt="" /> */}
        </div>
        <div className={classes["video__overlay"]}></div>
      </div>
      <div className={classes["video__content"]}>
        <div className={classes["video__container"]}>
          <div className={classes["video__content_inner"]}>
            <span className={classes["video__rounded"]}>
              <a
                className="vvideo__popup-youtube"
                href="https://www.youtube.com/watch?v=ICr_bOuM9Zo"
              ></a>
            </span>
            <h3 className={classes["video__text"]} data-wow-duration="1.5s">
              I am delivering beautiful digital products for my clients
            </h3>
            <div
              className={classes["video__button"]}
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <a
                className={classes["video__popup-youtube"]}
                href="https://www.youtube.com/watch?v=ICr_bOuM9Zo"
              >
                Watch Video
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Video;
