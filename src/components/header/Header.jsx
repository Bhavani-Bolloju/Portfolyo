import { useState, useRef, useEffect } from "react";
import classes from "./Header.module.scss";
import logo from "../../assets/img/logo/dark.png";
import audio1 from "../../assets/audio/1.mp3";
import audio2 from "../../assets/audio/2.mp3";

import { Link } from "react-scroll";

function Header() {
  const [isopen, setIsopen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
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

  useEffect(() => {
    const handleScroll = function () {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const hamburgerClass = isopen
    ? `${classes["hamburger__button"]} ${classes.active}`
    : `${classes["hamburger__button"]}`;

  const navClass = isopen
    ? `${classes["nav"]} ${classes.active}`
    : `${classes["nav"]}`;

  const navStyle =
    scrollPosition > 100
      ? `${classes.header} ${classes.active}`
      : `${classes.header}`;

  return (
    <header className={navStyle}>
      <div className={classes["header__container"]}>
        <div className={classes["header__logo"]}>
          <img src={logo} />
        </div>
        <nav className={navClass}>
          <ul className={classes["nav__list"]}>
            <li className={classes["nav__item"]}>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={800}
                activeClass={classes.active}
              >
                home
              </Link>
            </li>
            <li className={classes["nav__item"]}>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={800}
                activeClass={classes.active}
              >
                about
              </Link>
            </li>
            <li className={classes["nav__item"]}>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={50}
                duration={800}
                activeClass={classes.active}
              >
                services
              </Link>
            </li>
            <li className={classes["nav__item"]}>
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={50}
                duration={800}
                activeClass={classes.active}
              >
                portfolio
              </Link>
            </li>
            <li className={classes["nav__item"]}>
              <Link
                to="news"
                spy={true}
                smooth={true}
                offset={50}
                duration={800}
                activeClass={classes.active}
              >
                news
              </Link>
            </li>
            <li className={classes["nav__item"]}>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={800}
                activeClass={classes.active}
              >
                contact
              </Link>
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
