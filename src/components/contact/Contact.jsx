// import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { cursorContext } from "../cntx/cursorcontext";
import { useContext } from "react";

import classes from "./Contact.module.scss";
function Contact() {
  const position = [51.505, -0.09];

  const { handleCursor } = useContext(cursorContext);

  return (
    <section className={classes.contact} id="contact">
      <div className={classes["contact__container"]}>
        <div className={classes["contact__title"]}>
          <span>Contact</span>
          <h3>
            Feel free to contact me if any assistance is needed in the future
          </h3>
        </div>
        <div
          className={classes["contact__short_info"]}
          data-wow-duration="1.5s"
        >
          <ul>
            <li>
              <div className={classes["contact__list_item"]}>
                <div className={classes["logo"]}>
                  <svg
                    id="Layer_1"
                    enableBackground="new 0 0 512 512"
                    height="512"
                    viewBox="0 0 512 512"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                    className={classes["svg"]}
                  >
                    <g>
                      <path d="m407.579 87.677c-31.073-53.624-86.265-86.385-147.64-87.637-2.62-.054-5.257-.054-7.878 0-61.374 1.252-116.566 34.013-147.64 87.637-31.762 54.812-32.631 120.652-2.325 176.123l126.963 232.387c.057.103.114.206.173.308 5.586 9.709 15.593 15.505 26.77 15.505 11.176 0 21.183-5.797 26.768-15.505.059-.102.116-.205.173-.308l126.963-232.387c30.304-55.471 29.435-121.311-2.327-176.123zm-151.579 144.323c-39.701 0-72-32.299-72-72s32.299-72 72-72 72 32.299 72 72-32.298 72-72 72z" />
                    </g>
                  </svg>
                </div>
                <div className={classes["info"]}>
                  <h3>Location</h3>
                  <span>123 Ave street, USA</span>
                </div>
              </div>
            </li>
            <li>
              <div className={classes["contact__list_item"]}>
                <div className={classes["logo"]}>
                  <svg
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 480.56 480.56"
                    enableBackground="new 0 0 480.56 480.56"
                    xmlSpace="preserve"
                    className={classes["svg"]}
                  >
                    <g>
                      <g>
                        <path
                          d="M365.354,317.9c-15.7-15.5-35.3-15.5-50.9,0c-11.9,11.8-23.8,23.6-35.5,35.6c-3.2,3.3-5.9,4-9.8,1.8
			c-7.7-4.2-15.9-7.6-23.3-12.2c-34.5-21.7-63.4-49.6-89-81c-12.7-15.6-24-32.3-31.9-51.1c-1.6-3.8-1.3-6.3,1.8-9.4
			c11.9-11.5,23.5-23.3,35.2-35.1c16.3-16.4,16.3-35.6-0.1-52.1c-9.3-9.4-18.6-18.6-27.9-28c-9.6-9.6-19.1-19.3-28.8-28.8
			c-15.7-15.3-35.3-15.3-50.9,0.1c-12,11.8-23.5,23.9-35.7,35.5c-11.3,10.7-17,23.8-18.2,39.1c-1.9,24.9,4.2,48.4,12.8,71.3
			c17.6,47.4,44.4,89.5,76.9,128.1c43.9,52.2,96.3,93.5,157.6,123.3c27.6,13.4,56.2,23.7,87.3,25.4c21.4,1.2,40-4.2,54.9-20.9
			c10.2-11.4,21.7-21.8,32.5-32.7c16-16.2,16.1-35.8,0.2-51.8C403.554,355.9,384.454,336.9,365.354,317.9z"
                        />
                        <path
                          d="M346.254,238.2l36.9-6.3c-5.8-33.9-21.8-64.6-46.1-89c-25.7-25.7-58.2-41.9-94-46.9l-5.2,37.1
			c27.7,3.9,52.9,16.4,72.8,36.3C329.454,188.2,341.754,212,346.254,238.2z"
                        />
                        <path
                          d="M403.954,77.8c-42.6-42.6-96.5-69.5-156-77.8l-5.2,37.1c51.4,7.2,98,30.5,134.8,67.2c34.9,34.9,57.8,79,66.1,127.5
			l36.9-6.3C470.854,169.3,444.354,118.3,403.954,77.8z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className={classes["info"]}>
                  <h3>Phone</h3>
                  <span>+77 022 155 02 02</span>
                </div>
              </div>
            </li>
            <li>
              <div className={classes["contact__list_item"]}>
                <div className={classes["logo"]}>
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    enableBackground="new 0 0 512 512"
                    xmlSpace="preserve"
                    className={classes["svg"]}
                  >
                    <g>
                      <g>
                        <polygon points="339.392,258.624 512,367.744 512,144.896 		" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <polygon points="0,144.896 0,367.744 172.608,258.624 		" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M480,80H32C16.032,80,3.36,91.904,0.96,107.232L256,275.264l255.04-168.032C508.64,91.904,495.968,80,480,80z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M310.08,277.952l-45.28,29.824c-2.688,1.76-5.728,2.624-8.8,2.624c-3.072,0-6.112-0.864-8.8-2.624l-45.28-29.856
			L1.024,404.992C3.488,420.192,16.096,432,32,432h448c15.904,0,28.512-11.808,30.976-27.008L310.08,277.952z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <div className={classes["info"]}>
                  <h3>Mail</h3>
                  <span>ryker@gmail.com</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className={classes["contact__wrapper"]}>
          <div className={classes["contact__left"]} data-wow-duration="1.5s">
            <div className={classes["contact__fields"]}>
              <form
                action="/"
                method="post"
                className={classes["contact__form"]}
                id="contact_form"
              >
                <div
                  className={classes["contact__returnmessage"]}
                  data-success="Your message has been received, We will contact you soon."
                ></div>
                <div className={classes["contact__empty_notice"]}>
                  <span>Please Fill Required Fields</span>
                </div>
                <div className={classes["contact__first"]}>
                  <ul>
                    <li>
                      <input
                        id="name"
                        type="text"
                        placeholder="Name"
                        autoComplete="off"
                      />
                    </li>
                    <li>
                      <input
                        id="email"
                        type="text"
                        placeholder="Email"
                        autoComplete="off"
                      />
                    </li>
                  </ul>
                </div>
                <div className={classes["contact__last"]}>
                  <textarea id="message" placeholder="Message"></textarea>
                </div>
                <div
                  className={classes["contact__button"]}
                  data-color="dark"
                  onMouseEnter={handleCursor}
                  onMouseLeave={handleCursor}
                >
                  <a id="send_message" href="#">
                    Send Message
                  </a>
                </div>

                {/* <!-- If you want change mail address to yours, just open "modal" folder >> contact.php and go to line 4 and change detail to yours.  --> */}
              </form>
            </div>
          </div>
          <div
            className={classes["contact__right"]}
            data-wow-duration="1.5s"
            data-wow-delay="0.2s"
          >
            <div className={classes["contact__map_wrap"]}>
              <div className={classes["contact__map"]} id="ieatmaps">
                <MapContainer zoom={10}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
