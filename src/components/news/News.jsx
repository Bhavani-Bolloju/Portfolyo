import { useState, useContext } from "react";

import thumbs from "../../assets/img/thumbs/4-3.jpg";
import news1 from "../../assets/img/news/1.jpg";
import news2 from "../../assets/img/news/2.jpg";
import news3 from "../../assets/img/news/3.jpg";
import classes from "./News.module.scss";
import Modal from "../modal/Modal";
import { cursorContext } from "../cntx/cursorcontext";
// import thumbs3 from "../../assets/img/thumbs/4-3.jpg";

function News() {
  const [isopen, setIsopen] = useState(false);

  const { handleCursor } = useContext(cursorContext);

  const openHandler = function () {
    setIsopen(true);
  };
  const closeHandler = function () {
    setIsopen(false);
  };

  return (
    <section className={classes.news} id="news">
      <div className={classes["news__container"]}>
        <div className={classes["news__title"]}>
          <span>News</span>
          <h3>Check out the latest breaking news headlines on development</h3>
        </div>
        <div className={classes["news__list"]}>
          <ul>
            <li
              onClick={openHandler}
              className={classes["news__item"]}
              data-wow-duration="1.5s"
              onMouseEnter={handleCursor}
              onMouseLeave={handleCursor}
            >
              <div className={classes["news__item--inner"]}>
                <div className={classes["news__item--image"]}>
                  <img src={thumbs} alt="" />
                  <div
                    className={classes["news__item--main"]}
                    data-img-url="img/news/1.jpg"
                  >
                    <img src={news1} alt="" />
                  </div>
                  <a className={classes["news__item--link"]} href="#"></a>
                </div>
                <div className={classes["news__item--details"]}>
                  <span>
                    August 15, 2021 <a href="#">Branding</a>
                  </span>
                  <h3 className={classes["news__item--title"]}>
                    <a href="#">Good Travel</a>
                  </h3>
                </div>
              </div>
            </li>
            <li
              onClick={openHandler}
              className={classes["news__item"]}
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
              onMouseEnter={handleCursor}
              onMouseLeave={handleCursor}
            >
              <div className={classes["news__item--inner"]}>
                <div className={classes["news__item--image"]}>
                  <img src={thumbs} alt="" />
                  <div
                    className={classes["news__item--main"]}
                    data-img-url="img/news/2.jpg"
                  >
                    <img src={news2} alt="" />
                  </div>
                  <a className={classes["news__item--link"]} href="#"></a>
                </div>
                <div className={classes["news__item--details"]}>
                  <span>
                    July 25, 2021 <a href="#">Design</a>
                  </span>
                  <h3 className={classes["news__item--title"]}>
                    <a href="#">National Geographic</a>
                  </h3>
                </div>
              </div>
            </li>
            <li
              onClick={openHandler}
              className={classes["news__item"]}
              data-wow-duration="1.5s"
              data-wow-delay="0.4s"
              onMouseEnter={handleCursor}
              onMouseLeave={handleCursor}
            >
              <div className={classes["news__item--inner"]}>
                <div className={classes["news__item--image"]}>
                  <img src={thumbs} alt="" />
                  <div
                    className={classes["news__item--main"]}
                    data-img-url="img/news/3.jpg"
                  >
                    <img src={news3} alt="" />
                  </div>
                  <a className={classes["news__item--link"]} href="#"></a>
                </div>
                <div className={classes["news__item--details"]}>
                  <span>
                    June 02, 2021 <a href="#">Nature</a>
                  </span>
                  <h3 className={classes["news__item--title"]}>
                    <a href="#">Famous lake</a>
                  </h3>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* <Modal
        isopen={isopen}
        date="August 15, 2021"
        branding="Branding"
        title="Good Travel"
        onClose={closeHandler}
      /> */}
    </section>
  );
}

export default News;

// {
//   /* <div className="hide_content">
//                   <div className="descriptions">
//                     <p className="bigger">
//                       Just because we can't get out and about like we normally
//                       would, doesn’t mean we have to stop taking pictures.
//                       There’s still plenty you can do, provided you're prepared
//                       to use some imagination. Here are a few ideas to keep you
//                       shooting until normal life resumes.
//                     </p>
//                     <p>
//                       Most photographers love to shoot the unusual, and you
//                       don’t get much more unusual than These Unprecedented
//                       Times. Right now everything counts as out of the ordinary.
//                       There are a number of remarkable things about these
//                       lockdown days that are worth photographing now so we can
//                       remember them when it is all over.
//                     </p>
//                     <p>
//                       Streets empty that are usually busy are remarkable and can
//                       evoke the sense of historical pictures from before the
//                       invention of the motorcar. Other things that are different
//                       at the moment will be queues to get into stores and the
//                       lines marked out on the floor to show how far apart we
//                       should be.
//                     </p>
//                     <div className="quotebox">
//                       <p>
//                         Most photographers find it hard to see interesting
//                         pictures in places in which they are most familiar. A
//                         trip somewhere new seems always exactly what our
//                         photography needed, as shooting away from home
//                         consistently inspires us to new artistic heights.
//                       </p>
//                     </div>
//                     <p>
//                       Pretend everything is new and that you haven’t seen it
//                       before, and then you will be free to notice the leading
//                       lines, the places where one edge meets another in
//                       delightful geometric harmony, and how the ordinary things
//                       in the kitchen are transformed when the light is on or
//                       off.
//                     </p>
//                     <p>
//                       The trick here is to look slowly, and then look again.
//                       Take the time to look in detail and to look at the same
//                       thing from different angles, with different light, long
//                       lenses and wide lenses. Then move to the left a bit. You
//                       may never feel the need to leave the house again.
//                     </p>
//                   </div>
//                 </div> */
// }

// {
//   /* <div className={hiddenContentClass}>
//         <div className={classes.overlay}></div>
//         <div className={classes["descriptions"]}>
//           <div className={classes["image"]}>
//             <img src={thumbs3} alt="" />
//             <div className={classes["main"]} data-img-url="img/news/1.jpg">
//               <img src={news1} alt="news1" />
//             </div>
//           </div>
//           <div className={classes["details"]}>
//             <span>
//               August 15, 2021 <a href="#">Branding</a>
//             </span>
//             <h3 className={classes["title"]}>Good Travel</h3>
//           </div>
//           <div className={classes["content"]}>
//             <p className={classes["bigger"]}>
//               Just because we can't get out and about like we normally would,
//               doesn’t mean we have to stop taking pictures. There’s still plenty
//               you can do, provided you're prepared to use some imagination. Here
//               are a few ideas to keep you shooting until normal life resumes.
//             </p>
//             <p>
//               Most photographers love to shoot the unusual, and you don’t get
//               much more unusual than These Unprecedented Times. Right now
//               everything counts as out of the ordinary. There are a number of
//               remarkable things about these lockdown days that are worth
//               photographing now so we can remember them when it is all over.
//             </p>
//             <p>
//               Streets empty that are usually busy are remarkable and can evoke
//               the sense of historical pictures from before the invention of the
//               motorcar. Other things that are different at the moment will be
//               queues to get into stores and the lines marked out on the floor to
//               show how far apart we should be.
//             </p>
//             <div className={classes["quotebox"]}>
//               <p>
//                 Most photographers find it hard to see interesting pictures in
//                 places in which they are most familiar. A trip somewhere new
//                 seems always exactly what our photography needed, as shooting
//                 away from home consistently inspires us to new artistic heights.
//               </p>
//             </div>
//             <p>
//               Pretend everything is new and that you haven’t seen it before, and
//               then you will be free to notice the leading lines, the places
//               where one edge meets another in delightful geometric harmony, and
//               how the ordinary things in the kitchen are transformed when the
//               light is on or off.
//             </p>
//             <p>
//               The trick here is to look slowly, and then look again. Take the
//               time to look in detail and to look at the same thing from
//               different angles, with different light, long lenses and wide
//               lenses. Then move to the left a bit. You may never feel the need
//               to leave the house again.
//             </p>
//           </div>
//         </div>
//         <button
//           onClick={(e) => {
//             e.stopPropagation();
//             closeHandler();
//           }}
//           className={classes.close}
//         >
//           X
//         </button>
//       </div> */
// }

// {
//   /* <div className="hide_content">
//                   <div className="descriptions">
//                     <p className="bigger">
//                       Just because we can't get out and about like we normally
//                       would, doesn’t mean we have to stop taking pictures.
//                       There’s still plenty you can do, provided you're prepared
//                       to use some imagination. Here are a few ideas to keep you
//                       shooting until normal life resumes.
//                     </p>
//                     <p>
//                       Most photographers love to shoot the unusual, and you
//                       don’t get much more unusual than These Unprecedented
//                       Times. Right now everything counts as out of the ordinary.
//                       There are a number of remarkable things about these
//                       lockdown days that are worth photographing now so we can
//                       remember them when it is all over.
//                     </p>
//                     <p>
//                       Streets empty that are usually busy are remarkable and can
//                       evoke the sense of historical pictures from before the
//                       invention of the motorcar. Other things that are different
//                       at the moment will be queues to get into stores and the
//                       lines marked out on the floor to show how far apart we
//                       should be.
//                     </p>
//                     <div className="quotebox">
//                       <p>
//                         Most photographers find it hard to see interesting
//                         pictures in places in which they are most familiar. A
//                         trip somewhere new seems always exactly what our
//                         photography needed, as shooting away from home
//                         consistently inspires us to new artistic heights.
//                       </p>
//                     </div>
//                     <p>
//                       Pretend everything is new and that you haven’t seen it
//                       before, and then you will be free to notice the leading
//                       lines, the places where one edge meets another in
//                       delightful geometric harmony, and how the ordinary things
//                       in the kitchen are transformed when the light is on or
//                       off.
//                     </p>
//                     <p>
//                       The trick here is to look slowly, and then look again.
//                       Take the time to look in detail and to look at the same
//                       thing from different angles, with different light, long
//                       lenses and wide lenses. Then move to the left a bit. You
//                       may never feel the need to leave the house again.
//                     </p>
//                   </div>
//                 </div> */
// }
