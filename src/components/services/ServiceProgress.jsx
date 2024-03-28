// import React from "react";

import classes from "./ServiceProgress.module.scss";

function ServiceProgress({ skillName, percent, image }) {
  return (
    <div className={classes["progress-inner"]} data-value="95">
      <div className={classes["progress-text"]}>
        <div className={classes["progress-label"]}>
          {/* HTML &amp; CSS */}
          <span className={classes.image}>
            <img src={image} alt={skillName} />
          </span>
          <span className={classes.name}>{skillName}</span>
        </div>
        <div className={classes["progress-number"]}>{percent}%</div>
      </div>
      <div className={classes["progress-background"]}>
        <div
          className={classes["progress-bar"]}
          style={{ width: `${percent}%` }}
        >
          <div className={classes["progress-bar-in"]}></div>
        </div>
      </div>
    </div>
  );
}

export default ServiceProgress;
