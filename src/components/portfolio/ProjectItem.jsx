/* eslint-disable react/prop-types */
import { useContext } from "react";
import classes from "./ProjectItem.module.scss";
import thumbs from "../../assets/img/thumbs/1-1.jpg";
import { cursorContext } from "../cntx/cursorcontext";

const ProjectItem = function ({ onOpen, imageUrl, title }) {
  const { handleCursor } = useContext(cursorContext);

  return (
    <li
      onClick={onOpen}
      className={classes["project__item"]}
      data-wow-duration="1.5s"
      onMouseEnter={handleCursor}
      onMouseLeave={handleCursor}
    >
      <div className={classes["project__item-inner"]}>
        <div className={classes["project__item-image"]}>
          <img src={thumbs} alt="thumbnail" />
          <div
            className={classes["project__item-main"]}
            data-img-url="img/portfolio/1.jpg"
          >
            <img src={imageUrl} alt="" />
          </div>
        </div>
        <div className={classes["project__item-overlay"]}></div>
        <div className={classes["project__item-details"]}>
          <h3>{title}</h3>
          {/* <span>Vimeo</span> */}
        </div>
      </div>
    </li>
  );
};

export default ProjectItem;
