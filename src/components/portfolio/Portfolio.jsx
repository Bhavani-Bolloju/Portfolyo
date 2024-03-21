// import React from 'react'

import classes from "./Portfolio.module.scss";
import thumbs from "../../assets/img/thumbs/1-1.jpg";
import thumbs2 from "../../assets/img/thumbs/4-2.jpg";
import portfolio7 from "../../assets/img/portfolio/7.jpg";
import portfolio8 from "../../assets/img/portfolio/8.jpg";
import portfolio9 from "../../assets/img/portfolio/9.jpg";

function Portfolio() {
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
              <li className={classes["project__item"]} data-wow-duration="1.5s">
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
      <div className={classes["project__hidden"]}>
        <div className={classes["project__overlay"]}></div>
        <div className={classes["project__hidden-details"]}>
          <div className={classes["project__hidden-image"]}></div>
          <div className={classes["project__hidden-title"]}></div>
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
                  <ul className="share">
                    <li>
                      <a href="#">
                        <img
                          className="svg"
                          src="img/svg/social/facebook.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="svg"
                          src="img/svg/social/twitter.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="svg"
                          src="img/svg/social/instagram.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="svg"
                          src="img/svg/social/dribbble.svg"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="svg"
                          src="img/svg/social/tik-tok.svg"
                          alt=""
                        />
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
                    <img src={thumbs2} alt="thumbnail 2" />
                    <div
                      className={classes["main"]}
                      data-img-url="img/portfolio/7.jpg"
                    ></div>
                  </div>
                </div>
              </li>
              <li>
                <div className={classes["list_inner"]}>
                  <div className={classes["my_image"]}>
                    <img src={thumbs2} alt="thumbnail 2" />
                    <div
                      className={classes["main"]}
                      data-img-url="img/portfolio/8.jpg"
                    ></div>
                  </div>
                </div>
              </li>
              <li>
                <div className={classes["list_inner"]}>
                  <div className={classes["my_image"]}>
                    <img src={thumbs2} alt="thumbnail 2" />
                    <div
                      className={classes["main"]}
                      data-img-url="img/portfolio/9.jpg"
                    ></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* hidden information of 4th project - ends*/}
    </section>
  );
}

export default Portfolio;
