import { useState, useRef } from "react";
import classes from "./Header.module.scss";
import logo from "../../assets/img/logo/dark.png";
import audio1 from "../../assets/audio/1.mp3";
import audio2 from "../../assets/audio/2.mp3";

function Header() {
  const [isopen, setIsopen] = useState(false);
  const audioRef1 = useRef();
  const audioRef2 = useRef();

  const handleHamburger = function () {
    setIsopen((prev) => !prev);

    if (isopen) {
      audioRef1.current.play();
    } else {
      audioRef2.current.play();
    }
  };

  const hamburgerClass = isopen
    ? `${classes["hamburger__button"]} ${classes.active}`
    : `${classes["hamburger__button"]}`;

  const navClass = isopen
    ? `${classes["nav"]} ${classes.active}`
    : `${classes["nav"]}`;

  return (
    <header className={classes.header}>
      <div className={classes["header__container"]}>
        <div className={classes["header__logo"]}>
          <img src={logo} />
        </div>
        <nav className={navClass}>
          <ul className={classes["nav__list"]}>
            <li className={classes["nav__item"]}>
              <a href="#">home</a>
            </li>
            <li className={classes["nav__item"]}>
              <a href="#">about</a>
            </li>
            <li className={classes["nav__item"]}>
              <a href="#">services</a>
            </li>
            <li className={classes["nav__item"]}>
              <a href="#">portfolio</a>
            </li>
            <li className={classes["nav__item"]}>
              <a href="#">news</a>
            </li>
            <li className={classes["nav__item"]}>
              <a href="#">contact</a>
            </li>
          </ul>
        </nav>

        <button onClick={handleHamburger} className={classes.hamburger}>
          <audio ref={audioRef1} src={audio1}></audio>
          <audio ref={audioRef2} src={audio2}></audio>
          <div className={hamburgerClass}></div>
        </button>
      </div>
    </header>
  );
}

export default Header;
