import { useState } from "react";

import thumbs from "../../assets/img/thumbs/1-1.jpg";
import thumbs2 from "../../assets/img/thumbs/4-2.jpg";
import portfolio6 from "../../assets/img/portfolio/6.jpg";
import portfolio7 from "../../assets/img/portfolio/7.jpg";
import portfolio8 from "../../assets/img/portfolio/8.jpg";
import portfolio9 from "../../assets/img/portfolio/9.jpg";

import facebook from "../../assets/img/svg/social/facebook.svg";
import instagram from "../../assets/img/svg/social/instagram.svg";
import twitter from "../../assets/img/svg/social/twitter.svg";
import dribble from "../../assets/img/svg/social/dribble.svg";
import tiktok from "../../assets/img/svg/social/tik-tok.svg";
import classes from "./Portfolio.module.scss";

function Portfolio() {
  const [isopen, setIsopen] = useState(false);

  const hiddenPortfolioClass = isopen
    ? `${classes["project__hidden"]} ${classes.active}`
    : `${classes["project__hidden"]}`;

  return (
    <section className={classes.portfolio}>
      <div className={classes["portfolio__container"]}>
        <div className={classes["portfolio__inner"]}>
          <div className={classes["portfolio__title"]}>
            <span>Portfolio</span>
            <h3>Each project is a unique piece of development</h3>
          </div>
          <div className={classes["project__list"]}>
            <ul className={classes["gallery_zoom"]}>
              <li
                onClick={() => setIsopen(true)}
                className={classes["project__item"]}
                data-wow-duration="1.5s"
              >
                <div className={classes["project__item-inner"]}>
                  <div className={classes["project__item-image"]}>
                    <img src={thumbs} alt="thumbnail" />
                    <div
                      className={classes["project__item-main"]}
                      data-img-url="img/portfolio/1.jpg"
                    ></div>
                  </div>
                  <div className={classes["project__item-overlay"]}></div>
                  <div className={classes["project__item-details"]}>
                    <h3>Water Drops</h3>
                    <span>Vimeo</span>
                  </div>
                </div>
              </li>
              <li className={classes["project__item"]} data-wow-duration="1.5s">
                <div className={classes["project__item-inner"]}>
                  <div className={classes["project__item-image"]}>
                    <img src={thumbs} alt="thumbnail" />
                    <div
                      className={classes["project__item-main"]}
                      data-img-url="img/portfolio/2.jpg"
                    ></div>
                  </div>
                  <div className={classes["project__item-overlay"]}></div>
                  <div className={classes["project__item-details"]}>
                    <h3>Sweet Cherry</h3>
                    <span>Youtube</span>
                  </div>
                  <a
                    className={classes["project__item-link"]}
                    href="https://www.youtube.com/watch?v=Amq-qlqbjYA"
                  ></a>
                </div>
              </li>
              <li className={classes["project__item"]} data-wow-duration="1.5s">
                <div className={classes["project__item-inner"]}>
                  <div className={classes["project__item-image"]}>
                    <img src={thumbs} alt="thumbnail" />
                    <div
                      className={classes["project__item-main"]}
                      data-img-url="img/portfolio/3.jpg"
                    ></div>
                  </div>
                  <div className={classes["project__item-overlay"]}></div>
                  <div className={classes["project__item-details"]}>
                    <h3>Red Nike</h3>
                    <span>Soundcloud</span>
                  </div>
                  <a
                    className={classes["project__item-link"]}
                    href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/252739311&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                  ></a>
                </div>
              </li>
              <li className={classes["project__item"]} data-wow-duration="1.5s">
                <div className={classes["project__item-inner"]}>
                  <div className={classes["project__item-image"]}>
                    <img src={thumbs} alt="thumbnail" />
                    <div
                      className={classes["project__item-main"]}
                      data-img-url="img/portfolio/4.jpg"
                    ></div>
                  </div>
                  <div className={classes["project__item-overlay"]}></div>
                  <div className={classes["project__item-details"]}>
                    <h3>Blue Lemon</h3>
                    <span>Detail</span>
                  </div>
                  <a className={classes["project__item-link"]} href="#"></a>
                </div>
              </li>
              <li className={classes["project__item"]} data-wow-duration="1.5s">
                <div className={classes["project__item-inner"]}>
                  <div className={classes["project__item-image"]}>
                    <img src={thumbs} alt="thumbnail" />
                    <div
                      className={classes["project__item-main"]}
                      data-img-url="img/portfolio/5.jpg"
                    ></div>
                  </div>
                  <div className={classes["project__item-overlay"]}></div>
                  <div className={classes["project__item-details"]}>
                    <h3>Pantone</h3>
                    <span>Image</span>
                  </div>
                  <a
                    className={classes["project__item-link"]}
                    href="https://vimeo.com/312334044"
                  ></a>
                </div>
              </li>
              <li className={classes["project__item"]} data-wow-duration="1.5s">
                <div className={classes["project__item-inner"]}>
                  <div className={classes["project__item-image"]}>
                    <img src={thumbs} alt="thumbnail" />
                    <div
                      className={classes["project__item-main"]}
                      data-img-url="img/portfolio/6.jpg"
                    ></div>
                  </div>
                  <div className={classes["project__item-overlay"]}></div>
                  <div className={classes["project__item-details"]}>
                    <h3>New Telephone</h3>
                    <span>Image</span>
                  </div>
                  <a className={classes["project__item-link"]} href="#"></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* hidden information - begins */}
      <div className={hiddenPortfolioClass}>
        <div className={classes["project__hidden-overlay"]}></div>
        <div className={classes["project__hidden-details"]}>
          <div className={classes["project__hidden-top-image"]}>
            <img className={classes["thumbnail"]} src={thumbs} alt="" />
            <div className={classes["main"]}>
              <img src={portfolio6} alt="portfolio" />
            </div>
          </div>
          <div className={classes["project__hidden-title"]}>
            <h3>Blue Lemon</h3>
            <span>Details</span>
          </div>
          <div className={classes["project__hidden-main_details"]}>
            <div className={classes["project__hidden-textbox"]}>
              <p>
                The origin of the lemon is unknown, though lemons are thought to
                have first grown in Assam (a region in northeast India),
                northern Burma or China. A genomic study of the lemon indicated
                it was a hybrid between bitter orange and citron.
              </p>
              <p>
                The first substantial cultivation of lemons in Europe began in
                Genoa in the middle of the 15th century. The lemon was later
                introduced to the Americas in 1493 when Christopher Columbus
                brought lemon seeds to Hispaniola on his voyages. Spanish
                conquest throughout the New World helped spread lemon seeds.
              </p>
            </div>
            <div className={classes["project__hidden-detailbox"]}>
              <ul>
                <li>
                  <span className="first">Client</span>
                  <span>Alvaro Morata</span>
                </li>
                <li>
                  <span className="first">Category</span>
                  <span>
                    <a href="#">Detail</a>
                  </span>
                </li>
                <li>
                  <span className="first">Date</span>
                  <span>March 07, 2021</span>
                </li>
                <li>
                  <span className="first">Share</span>
                  <ul className={classes["share"]}>
                    <li>
                      <a href="#">
                        <img className="svg" src={facebook} alt="facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img className="svg" src={twitter} alt="twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img className="svg" src={instagram} alt="instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img className="svg" src={dribble} alt="dribble" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img className="svg" src={tiktok} alt="tiktok" />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes["additional_images"]}>
            <ul>
              <li>
                <div className={classes["list_inner"]}>
                  <div className={classes["my_image"]}>
                    <img
                      className={classes["thumbnail"]}
                      src={thumbs2}
                      alt="thumbnail 2"
                    />

                    <div
                      className={classes["main"]}
                      data-img-url="img/portfolio/7.jpg"
                    >
                      <img src={portfolio7} alt="portfolio" />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className={classes["list_inner"]}>
                  <div className={classes["my_image"]}>
                    <img
                      className={classes["thumbnail"]}
                      src={thumbs2}
                      alt="thumbnail 2"
                    />
                    <div
                      className={classes["main"]}
                      data-img-url="img/portfolio/8.jpg"
                    >
                      <img src={portfolio8} alt="portfolio" />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className={classes["list_inner"]}>
                  <div className={classes["my_image"]}>
                    <img
                      src={thumbs2}
                      className={classes["thumbnail"]}
                      alt="thumbnail 2"
                    />
                    <div
                      className={classes["main"]}
                      data-img-url="img/portfolio/9.jpg"
                    >
                      <img src={portfolio9} alt="portfolio" />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <button
          onClick={() => setIsopen(false)}
          className={classes["close-overlay"]}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 511.995 511.995"
            // style="enable-background:new 0 0 511.995 511.995;"
            xmlSpace="preserve"
            // class="svg replaced-svg"
          >
            <g>
              <g>
                <path d="M437.126,74.939c-99.826-99.826-262.307-99.826-362.133,0C26.637,123.314,0,187.617,0,256.005    s26.637,132.691,74.993,181.047c49.923,49.923,115.495,74.874,181.066,74.874s131.144-24.951,181.066-74.874    C536.951,337.226,536.951,174.784,437.126,74.939z M409.08,409.006c-84.375,84.375-221.667,84.375-306.042,0    c-40.858-40.858-63.37-95.204-63.37-153.001s22.512-112.143,63.37-153.021c84.375-84.375,221.667-84.355,306.042,0    C493.435,187.359,493.435,324.651,409.08,409.006z"></path>
              </g>
            </g>
            <g>
              <g>
                <path d="M341.525,310.827l-56.151-56.071l56.151-56.071c7.735-7.735,7.735-20.29,0.02-28.046    c-7.755-7.775-20.31-7.755-28.065-0.02l-56.19,56.111l-56.19-56.111c-7.755-7.735-20.31-7.755-28.065,0.02    c-7.735,7.755-7.735,20.31,0.02,28.046l56.151,56.071l-56.151,56.071c-7.755,7.735-7.755,20.29-0.02,28.046    c3.868,3.887,8.965,5.811,14.043,5.811s10.155-1.944,14.023-5.792l56.19-56.111l56.19,56.111    c3.868,3.868,8.945,5.792,14.023,5.792c5.078,0,10.175-1.944,14.043-5.811C349.28,331.117,349.28,318.562,341.525,310.827z"></path>
              </g>
            </g>
          </svg>
        </button>
      </div>

      {/* hidden information of 4th project - ends*/}
    </section>
  );
}

export default Portfolio;
