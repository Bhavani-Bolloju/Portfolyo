import { useState } from "react";

import classes from "./Video.module.scss";

const VideoOverlay = ({ onClose, link }) => {
  return (
    <div className={classes["overlay"]}>
      <div className={classes["video-container"]}>
        <button className={classes["close-button"]} onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
        <iframe
          className={classes["video-frame"]}
          width="100%"
          height="100%"
          src={link}
          title="YouTube video player"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

function Video() {
  const [showOverlay, setShowOverlay] = useState(false);

  const openOverlay = () => {
    setShowOverlay(true);
  };

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <section className={classes["video"]}>
      <div className={classes["vide__background"]}>
        <div
          className={classes["video__image"]}
          data-speed="0"
          data-img-url="img/hero/1.jpg"
        ></div>
      </div>
      <div className={classes["video__content"]}>
        <div className={classes["video__container"]}>
          <div className={classes["video__content_inner"]}>
            <button
              onClick={openOverlay}
              className={classes["video__rounded"]}
            ></button>

            <h3 className={classes["video__text"]} data-wow-duration="1.5s">
              I am delivering beautiful digital products for my clients
            </h3>
            <button
              className={classes["video__button"]}
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
              onClick={openOverlay}
            >
              Watch Video
            </button>
          </div>

          {showOverlay && (
            <VideoOverlay
              onClose={closeOverlay}
              link="https://www.youtube.com/watch?v=ICr_bOuM9Zo"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default Video;
