/* eslint-disable react/prop-types */
// import React from 'react'
import classes from "./TitleSlider.module.scss";

function TitleSlider({ title }) {
  return (
    <div className={classes["title"]}>
      <ul className={classes["title-slider"]}>
        <li className={classes["title-slide"]}>{title}</li>
        <li className={classes["title-slide"]}>{title}</li>
        <li className={classes["title-slide"]}>{title}</li>
        <li className={classes["title-slide"]}>{title}</li>
        <li className={classes["title-slide"]}>{title}</li>
        <li className={classes["title-slide"]}>{title}</li>
        <li className={classes["title-slide"]}>{title}</li>
        <li className={classes["title-slide"]}>{title}</li>
        <li className={classes["title-slide"]}>{title}</li>
        <li className={classes["title-slide"]}>{title}</li>
        <li className={classes["title-slide"]}>{title}</li>
        <li className={classes["title-slide"]}>{title}</li>
      </ul>
    </div>
  );
}

export default TitleSlider;
