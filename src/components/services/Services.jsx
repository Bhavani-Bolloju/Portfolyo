// import React from 'react'
import classes from "./Services.module.scss";
// import design from "../../assets/img/svg/design.svg";
// import code from "../../assets/img/svg/code.svg";
// import award from "../../assets/img/svg/award.svg";
// import tools from "../../assets/img/svg/tools.svg";

const ServiceProgress = function ({ skillName, percent }) {
  return (
    <div className={classes["services__progress-inner"]} data-value="95">
      <span>
        <span className={classes["services__progress-label"]}>
          {/* HTML &amp; CSS */}
          {skillName}
        </span>
        <span className={classes["services__progress-number"]}>{percent}%</span>
      </span>
      <div className={classes["services__progress-background"]}>
        <div
          className={classes["services__progress-bar"]}
          style={{ width: `${percent}%` }}
        >
          <div className={classes["services__progress-bar-in"]}></div>
        </div>
      </div>
    </div>
  );
};

const ServiceItem = function ({ ServiceUrl, serviceName }) {
  return (
    <li className={classes["services__grid-item"]} data-wow-duration="1.5s">
      <div className={classes["services__list-inner"]}>
        {/* <svg version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512 512">
          <g>
            <g>
              <path d="M432,100c-5.52,0-10,4.48-10,10s4.48,10,10,10c5.52,0,10-4.48,10-10S437.52,100,432,100z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M80,100c-5.52,0-10,4.48-10,10s4.48,10,10,10s10-4.48,10-10S85.52,100,80,100z" />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M502,220h-11.96c-3.738-28.804-12.77-56.253-26.944-81.705c-2.687-4.824-8.776-6.559-13.602-3.872
c-4.825,2.687-6.559,8.777-3.872,13.602c12.508,22.463,20.646,46.628,24.252,71.975H462c-5.523,0-10,4.477-10,10v40
c0,5.523,4.477,10,10,10h40c5.523,0,10-4.477,10-10v-40C512,224.477,507.523,220,502,220z M492,260h-20v-20h9.078
c0.003,0,0.007,0,0.01,0c0.004,0,0.007,0,0.011,0H492V260z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M365.981,292.621c-0.006-0.155-0.01-0.31-0.023-0.465c-0.018-0.212-0.047-0.421-0.078-0.629
c-0.019-0.128-0.034-0.256-0.059-0.384c-0.046-0.245-0.106-0.485-0.169-0.724c-0.024-0.091-0.043-0.182-0.07-0.272
c-0.089-0.299-0.193-0.592-0.309-0.879c-0.013-0.031-0.022-0.064-0.035-0.095c-0.138-0.334-0.293-0.659-0.465-0.973
l-99.998-182.996C263.022,101.996,259.657,100,256,100c-3.657,0-7.022,1.996-8.775,5.205l-99.998,182.996
c-0.172,0.314-0.327,0.639-0.465,0.973c-0.013,0.031-0.022,0.063-0.035,0.095c-0.116,0.287-0.22,0.58-0.309,0.879
c-0.027,0.09-0.046,0.181-0.07,0.272c-0.064,0.239-0.123,0.478-0.169,0.724c-0.024,0.127-0.039,0.255-0.059,0.384
c-0.031,0.208-0.06,0.417-0.078,0.629c-0.013,0.155-0.018,0.31-0.023,0.465c-0.005,0.126-0.019,0.25-0.019,0.378
c0,0.066,0.009,0.129,0.01,0.195c0.003,0.157,0.013,0.313,0.024,0.47c0.013,0.199,0.029,0.397,0.054,0.593
c0.018,0.138,0.04,0.275,0.063,0.413c0.036,0.216,0.079,0.43,0.129,0.641c0.028,0.119,0.059,0.238,0.092,0.356
c0.063,0.228,0.135,0.452,0.213,0.673c0.022,0.063,0.036,0.127,0.06,0.19l36.064,95.569c-2.893,1.434-5.569,3.339-7.92,5.689
C169.121,403.457,166,410.99,166,419c0,13.036,8.361,24.152,20,28.28V502c0,5.523,4.477,10,10,10h120c5.523,0,10-4.477,10-10
v-54.703c4.169-1.471,7.992-3.866,11.212-7.086C342.879,434.543,346,427.01,346,419c0-11.773-6.819-21.978-16.713-26.887
l36.069-95.582c0.024-0.063,0.038-0.127,0.06-0.19c0.078-0.221,0.15-0.445,0.213-0.673c0.033-0.118,0.063-0.237,0.092-0.356
c0.05-0.211,0.092-0.425,0.129-0.641c0.023-0.138,0.046-0.275,0.063-0.413c0.025-0.196,0.041-0.394,0.054-0.593
c0.01-0.157,0.021-0.313,0.024-0.47c0.001-0.065,0.01-0.129,0.01-0.195C366,292.872,365.986,292.748,365.981,292.621z M256,283
c5.514,0,10,4.486,10,10c0,5.514-4.486,10-10,10c-5.514,0-10-4.486-10-10C246,287.486,250.486,283,256,283z M306,492H206v-43h100
V492z M323.069,426.068c-1.89,1.891-4.401,2.932-7.069,2.932H196c-5.514,0-10-4.486-10-10c0-2.668,1.041-5.179,2.931-7.068
c1.891-1.891,4.401-2.932,7.069-2.932h119.933c0.022,0,0.044,0.003,0.066,0.003c0.011,0,0.023-0.001,0.034-0.001
c5.499,0.018,9.968,4.495,9.968,9.998C326,421.668,324.959,424.179,323.069,426.068z M309.085,389h-106.17l-32.453-86H196
c5.523,0,10-4.477,10-10s-4.477-10-10-10h-23.14L246,149.154V264.72c-11.639,4.128-20,15.243-20,28.28c0,16.542,13.458,30,30,30
s30-13.458,30-30c0-13.036-8.361-24.152-20-28.28V149.154L339.14,283H316c-5.523,0-10,4.477-10,10s4.477,10,10,10h25.538
L309.085,389z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M62.505,134.423c-4.826-2.688-10.916-0.954-13.602,3.872C34.73,163.747,25.697,191.196,21.96,220H10
c-5.523,0-10,4.477-10,10v40c0,5.523,4.477,10,10,10h40c5.523,0,10-4.477,10-10v-40c0-5.523-4.477-10-10-10h-7.875
c3.607-25.347,11.744-49.512,24.252-71.975C69.064,143.2,67.331,137.11,62.505,134.423z M40,260H20v-20h10.901
c0.004,0,0.007,0,0.011,0c0.003,0,0.007,0,0.01,0H40V260z"
              />
            </g>
          </g>
          <g>
            <g>
              <path
                d="M482,0c-13.036,0-24.152,8.361-28.28,20H286V10c0-5.523-4.477-10-10-10h-40c-5.523,0-10,4.477-10,10v10H58.28
C54.152,8.361,43.036,0,30,0C13.458,0,0,13.458,0,30s13.458,30,30,30c13.036,0,24.152-8.361,28.28-20h100.534
c-21.329,8.925-40.889,20.511-56.989,34.084c-4.223,3.56-4.76,9.869-1.2,14.091c1.978,2.347,4.805,3.555,7.65,3.555
c2.276,0,4.564-0.772,6.44-2.354C143.407,65.188,184.353,47.913,226,42.119V50c0,5.523,4.477,10,10,10h40c5.523,0,10-4.477,10-10
v-7.881c41.647,5.794,82.593,23.069,111.285,47.256c1.876,1.582,4.164,2.355,6.44,2.354c2.846,0,5.673-1.208,7.65-3.555
c3.561-4.221,3.023-10.53-1.2-14.09c-16.1-13.573-35.66-25.159-56.989-34.084H453.72c4.128,11.639,15.243,20,28.28,20
c16.542,0,30-13.458,30-30S498.542,0,482,0z M30,40c-5.514,0-10-4.486-10-10s4.486-10,10-10s10,4.486,10,10S35.514,40,30,40z
M266,30v0.9V40h-20v-9.1V30V20h20V30z M482,40c-5.514,0-10-4.486-10-10s4.486-10,10-10c5.514,0,10,4.486,10,10S487.514,40,482,40
z"
              />
            </g>
          </g>
        </svg> */}
        <img src={ServiceUrl} alt={serviceName} />
        <h3>{serviceName}</h3>
      </div>
    </li>
  );
};

function Services({ skills, services }) {
  return (
    <section className={classes.services}>
      <div className={classes["services__container"]}>
        <div className={classes["services__inner"]}>
          <div className={classes["services__left"]}>
            <div className={classes["services__title"]}>
              <span>Services</span>
              <h3>I offer a Full-cycle of Web Development Services</h3>
            </div>
            <p className={classes["services__text"]}>
              For more than 20 years our experts have been accomplishing enough
              with modern Web Development, new generation programming language,
              and Full Stack developers to deliver cost-effective solutions.
            </p>
            <div className={["services__progress"]}>
              {/* <>
                <div
                className={classes["services__progress-inner"]}
                data-value="95"
              >
                <span>
                  <span className={classes["services__progress-label"]}>
                    HTML &amp; CSS
                  </span>
                  <span className={classes["services__progress-number"]}>
                    95%
                  </span>
                </span>
                <div className={classes["services__progress-background"]}>
                  <div
                    className={classes["services__progress-bar"]}
                    style={{ width: "90%" }}
                  >
                    <div className={classes["services__progress-bar-in"]}></div>
                  </div>
                </div>
              </div>
              <div
                className={classes["services__progress-inner"]}
                data-value="80"
              >
                <span>
                  <span className={classes["services__progress-label"]}>
                    JavaScript
                  </span>
                  <span className={classes["services__progress-number"]}>
                    80%
                  </span>
                </span>
                <div className={classes["services__progress-background"]}>
                  <div
                    className={classes["services__progress-bar"]}
                    style={{ width: "80%" }}
                  >
                    <div className={classes["services__progress-bar-in"]}></div>
                  </div>
                </div>
              </div>
              <div
                className={classes["services__progress-inner"]}
                data-value="90"
              >
                <span>
                  <span className={classes["services__progress-label"]}>
                    wordPress
                  </span>
                  <span className={classes["services__progress-number"]}>
                    85%
                  </span>
                </span>
                <div className={classes["services__progress-background"]}>
                  <div
                    className={classes["services__progress-bar"]}
                    style={{ width: "90%" }}
                  >
                    <div className={classes["services__progress-bar-in"]}></div>
                  </div>
                </div>
              </div>
              </> */}
              {skills.map((skill) => (
                <ServiceProgress
                  key={skill.image["_id"]}
                  percent={skill.percentage}
                  skillName={skill.name}
                />
              ))}
            </div>
          </div>
          <div className={classes["services__right"]}>
            <ul className={classes["services__grid"]}>
              {/* <li
                className={classes["services__grid-item"]}
                data-wow-duration="1.5s"
              >
                <div className={classes["services__list-inner"]}>
                  <svg
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <g>
                        <path d="M432,100c-5.52,0-10,4.48-10,10s4.48,10,10,10c5.52,0,10-4.48,10-10S437.52,100,432,100z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M80,100c-5.52,0-10,4.48-10,10s4.48,10,10,10s10-4.48,10-10S85.52,100,80,100z" />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M502,220h-11.96c-3.738-28.804-12.77-56.253-26.944-81.705c-2.687-4.824-8.776-6.559-13.602-3.872
					c-4.825,2.687-6.559,8.777-3.872,13.602c12.508,22.463,20.646,46.628,24.252,71.975H462c-5.523,0-10,4.477-10,10v40
					c0,5.523,4.477,10,10,10h40c5.523,0,10-4.477,10-10v-40C512,224.477,507.523,220,502,220z M492,260h-20v-20h9.078
					c0.003,0,0.007,0,0.01,0c0.004,0,0.007,0,0.011,0H492V260z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M365.981,292.621c-0.006-0.155-0.01-0.31-0.023-0.465c-0.018-0.212-0.047-0.421-0.078-0.629
					c-0.019-0.128-0.034-0.256-0.059-0.384c-0.046-0.245-0.106-0.485-0.169-0.724c-0.024-0.091-0.043-0.182-0.07-0.272
					c-0.089-0.299-0.193-0.592-0.309-0.879c-0.013-0.031-0.022-0.064-0.035-0.095c-0.138-0.334-0.293-0.659-0.465-0.973
					l-99.998-182.996C263.022,101.996,259.657,100,256,100c-3.657,0-7.022,1.996-8.775,5.205l-99.998,182.996
					c-0.172,0.314-0.327,0.639-0.465,0.973c-0.013,0.031-0.022,0.063-0.035,0.095c-0.116,0.287-0.22,0.58-0.309,0.879
					c-0.027,0.09-0.046,0.181-0.07,0.272c-0.064,0.239-0.123,0.478-0.169,0.724c-0.024,0.127-0.039,0.255-0.059,0.384
					c-0.031,0.208-0.06,0.417-0.078,0.629c-0.013,0.155-0.018,0.31-0.023,0.465c-0.005,0.126-0.019,0.25-0.019,0.378
					c0,0.066,0.009,0.129,0.01,0.195c0.003,0.157,0.013,0.313,0.024,0.47c0.013,0.199,0.029,0.397,0.054,0.593
					c0.018,0.138,0.04,0.275,0.063,0.413c0.036,0.216,0.079,0.43,0.129,0.641c0.028,0.119,0.059,0.238,0.092,0.356
					c0.063,0.228,0.135,0.452,0.213,0.673c0.022,0.063,0.036,0.127,0.06,0.19l36.064,95.569c-2.893,1.434-5.569,3.339-7.92,5.689
					C169.121,403.457,166,410.99,166,419c0,13.036,8.361,24.152,20,28.28V502c0,5.523,4.477,10,10,10h120c5.523,0,10-4.477,10-10
					v-54.703c4.169-1.471,7.992-3.866,11.212-7.086C342.879,434.543,346,427.01,346,419c0-11.773-6.819-21.978-16.713-26.887
					l36.069-95.582c0.024-0.063,0.038-0.127,0.06-0.19c0.078-0.221,0.15-0.445,0.213-0.673c0.033-0.118,0.063-0.237,0.092-0.356
					c0.05-0.211,0.092-0.425,0.129-0.641c0.023-0.138,0.046-0.275,0.063-0.413c0.025-0.196,0.041-0.394,0.054-0.593
					c0.01-0.157,0.021-0.313,0.024-0.47c0.001-0.065,0.01-0.129,0.01-0.195C366,292.872,365.986,292.748,365.981,292.621z M256,283
					c5.514,0,10,4.486,10,10c0,5.514-4.486,10-10,10c-5.514,0-10-4.486-10-10C246,287.486,250.486,283,256,283z M306,492H206v-43h100
					V492z M323.069,426.068c-1.89,1.891-4.401,2.932-7.069,2.932H196c-5.514,0-10-4.486-10-10c0-2.668,1.041-5.179,2.931-7.068
					c1.891-1.891,4.401-2.932,7.069-2.932h119.933c0.022,0,0.044,0.003,0.066,0.003c0.011,0,0.023-0.001,0.034-0.001
					c5.499,0.018,9.968,4.495,9.968,9.998C326,421.668,324.959,424.179,323.069,426.068z M309.085,389h-106.17l-32.453-86H196
					c5.523,0,10-4.477,10-10s-4.477-10-10-10h-23.14L246,149.154V264.72c-11.639,4.128-20,15.243-20,28.28c0,16.542,13.458,30,30,30
					s30-13.458,30-30c0-13.036-8.361-24.152-20-28.28V149.154L339.14,283H316c-5.523,0-10,4.477-10,10s4.477,10,10,10h25.538
					L309.085,389z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M62.505,134.423c-4.826-2.688-10.916-0.954-13.602,3.872C34.73,163.747,25.697,191.196,21.96,220H10
					c-5.523,0-10,4.477-10,10v40c0,5.523,4.477,10,10,10h40c5.523,0,10-4.477,10-10v-40c0-5.523-4.477-10-10-10h-7.875
					c3.607-25.347,11.744-49.512,24.252-71.975C69.064,143.2,67.331,137.11,62.505,134.423z M40,260H20v-20h10.901
					c0.004,0,0.007,0,0.011,0c0.003,0,0.007,0,0.01,0H40V260z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M482,0c-13.036,0-24.152,8.361-28.28,20H286V10c0-5.523-4.477-10-10-10h-40c-5.523,0-10,4.477-10,10v10H58.28
					C54.152,8.361,43.036,0,30,0C13.458,0,0,13.458,0,30s13.458,30,30,30c13.036,0,24.152-8.361,28.28-20h100.534
					c-21.329,8.925-40.889,20.511-56.989,34.084c-4.223,3.56-4.76,9.869-1.2,14.091c1.978,2.347,4.805,3.555,7.65,3.555
					c2.276,0,4.564-0.772,6.44-2.354C143.407,65.188,184.353,47.913,226,42.119V50c0,5.523,4.477,10,10,10h40c5.523,0,10-4.477,10-10
					v-7.881c41.647,5.794,82.593,23.069,111.285,47.256c1.876,1.582,4.164,2.355,6.44,2.354c2.846,0,5.673-1.208,7.65-3.555
					c3.561-4.221,3.023-10.53-1.2-14.09c-16.1-13.573-35.66-25.159-56.989-34.084H453.72c4.128,11.639,15.243,20,28.28,20
					c16.542,0,30-13.458,30-30S498.542,0,482,0z M30,40c-5.514,0-10-4.486-10-10s4.486-10,10-10s10,4.486,10,10S35.514,40,30,40z
					M266,30v0.9V40h-20v-9.1V30V20h20V30z M482,40c-5.514,0-10-4.486-10-10s4.486-10,10-10c5.514,0,10,4.486,10,10S487.514,40,482,40
					z"
                        />
                      </g>
                    </g>
                  </svg>

                  <h3>Design</h3>
                </div>
              </li>
              <li
                className={classes["services__grid-item"]}
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className={classes["services__list-inner"]}>
                  <svg
                    height="424pt"
                    viewBox="0 -25 424 424"
                    width="424pt"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m167.289062 272.132812c-1.601562 0-3.214843-.550781-4.53125-1.671874l-45.296874-38.570313c-1.5625-1.332031-2.460938-3.277344-2.460938-5.332031 0-2.050782.902344-3.996094 2.460938-5.328125l45.296874-38.570313c2.941407-2.507812 7.359376-2.152344 9.867188.789063 2.503906 2.945312 2.152344 7.363281-.792969 9.867187l-39.035156 33.242188 39.035156 33.242187c2.945313 2.507813 3.296875 6.925781.792969 9.867188-1.386719 1.628906-3.355469 2.464843-5.335938 2.464843zm0 0" />
                    <path d="m256.710938 272.132812c-1.980469 0-3.949219-.835937-5.332032-2.464843-2.507812-2.941407-2.152344-7.359375.789063-9.867188l39.035156-33.242187-39.035156-33.242188c-2.941407-2.503906-3.296875-6.921875-.789063-9.867187 2.503906-2.941407 6.925782-3.296875 9.863282-.789063l45.296874 38.570313c1.5625 1.332031 2.460938 3.277343 2.460938 5.328125 0 2.054687-.898438 4-2.460938 5.332031l-45.296874 38.570313c-1.316407 1.121093-2.929688 1.671874-4.53125 1.671874zm0 0" />
                    <path d="m195.964844 301.0625c-.480469 0-.964844-.050781-1.453125-.152344-3.78125-.796875-6.203125-4.511718-5.40625-8.292968l28.230469-134.035157c.796874-3.78125 4.507812-6.203125 8.292968-5.40625 3.78125.796875 6.203125 4.507813 5.40625 8.292969l-28.230468 134.035156c-.695313 3.296875-3.601563 5.558594-6.839844 5.558594zm0 0" />
                    <path d="m377 374.085938h-330c-25.914062 0-47-21.082032-47-47v-280.085938c0-25.914062 21.085938-47 47-47h330c25.914062 0 47 21.085938 47 47v280.085938c0 25.917968-21.085938 47-47 47zm-330-360.085938c-18.195312 0-33 14.804688-33 33v280.085938c0 18.195312 14.804688 33 33 33h330c18.195312 0 33-14.804688 33-33v-280.085938c0-18.195312-14.804688-33-33-33zm0 0" />
                    <path d="m417 112.089844h-410c-3.867188 0-7-3.132813-7-7 0-3.863282 3.132812-7 7-7h410c3.867188 0 7 3.136718 7 7 0 3.867187-3.132812 7-7 7zm0 0" />
                    <path d="m119.601562 78.59375c-12.210937 0-22.152343-9.941406-22.152343-22.152344 0-12.214844 9.941406-22.152344 22.152343-22.152344 12.214844 0 22.152344 9.9375 22.152344 22.152344 0 12.210938-9.9375 22.152344-22.152344 22.152344zm0-30.304688c-4.492187 0-8.152343 3.65625-8.152343 8.152344s3.660156 8.152344 8.152343 8.152344c4.496094 0 8.152344-3.65625 8.152344-8.152344s-3.65625-8.152344-8.152344-8.152344zm0 0" />
                    <path d="m51.539062 78.378906c-12.214843 0-22.152343-9.9375-22.152343-22.152344 0-12.214843 9.9375-22.152343 22.152343-22.152343 12.214844 0 22.152344 9.9375 22.152344 22.152343 0 12.214844-9.9375 22.152344-22.152344 22.152344zm0-30.304687c-4.492187 0-8.152343 3.660156-8.152343 8.152343 0 4.496094 3.660156 8.152344 8.152343 8.152344 4.496094 0 8.152344-3.65625 8.152344-8.152344 0-4.492187-3.65625-8.152343-8.152344-8.152343zm0 0" />
                    <path d="m187.664062 78.804688c-12.210937 0-22.148437-9.9375-22.148437-22.152344 0-12.210938 9.9375-22.148438 22.148437-22.148438 12.214844 0 22.152344 9.9375 22.152344 22.148438 0 12.214844-9.9375 22.152344-22.152344 22.152344zm0-30.304688c-4.492187 0-8.148437 3.65625-8.148437 8.152344s3.65625 8.152344 8.148437 8.152344c4.496094 0 8.152344-3.65625 8.152344-8.152344s-3.65625-8.152344-8.152344-8.152344zm0 0" />
                  </svg>
                  <h3>Development</h3>
                </div>
              </li>
              <li
                className={classes["services__grid-item"]}
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <div className={classes["services__list-inner"]}>
                  <svg
                    version="1.1"
                    id="Capa_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 464 464"
                  >
                    <g>
                      <g>
                        <path
                          d="M422.32,403.096l-48.68-62.584c15.774-4.713,29.4-14.801,38.512-28.512c11.464-19.816,6.28-44,1.264-67.36
				c-3.033-12-4.848-24.276-5.416-36.64c0.566-12.375,2.38-24.662,5.416-36.672c4.984-23.376,10.2-47.544-1.264-67.328
				c-11.872-20.512-35.776-28.104-58.896-35.432c-11.509-3.171-22.655-7.536-33.256-13.024c-9.62-6.24-18.552-13.48-26.648-21.6
				C276.2,18.024,256.752,0,232,0s-44.2,18.024-61.36,33.936c-8.093,8.122-17.023,15.365-26.64,21.608
				c-10.6,5.477-21.743,9.831-33.248,12.992c-23.12,7.328-47.024,14.92-58.896,35.432c-11.464,19.816-6.28,44-1.264,67.36
				C53.625,183.339,55.437,195.625,56,208c-0.566,12.375-2.38,24.662-5.416,36.672c-4.984,23.376-10.2,47.544,1.264,67.328
				c9.124,13.716,22.765,23.801,38.552,28.504l-48.72,62.584c-2.712,3.488-2.083,8.514,1.406,11.226
				c1.676,1.303,3.8,1.886,5.906,1.622l57.2-7.144l14.12,49.408c0.827,2.896,3.211,5.082,6.168,5.656
				c0.501,0.095,1.01,0.144,1.52,0.144c2.47,0.002,4.803-1.138,6.32-3.088l51.088-65.712c12.572,12.239,29.086,19.612,46.592,20.8
				c17.506-1.188,34.02-8.561,46.592-20.8l51.088,65.688c1.512,1.959,3.845,3.108,6.32,3.112c0.51,0,1.019-0.049,1.52-0.144
				c2.957-0.574,5.341-2.76,6.168-5.656l14.12-49.4l57.2,7.144c4.384,0.55,8.384-2.558,8.934-6.942
				C424.206,406.896,423.623,404.772,422.32,403.096z M131.36,438.648L119.688,397.8c-1.085-3.789-4.769-6.223-8.68-5.736l-44.8,5.6
				l40.152-51.616l4.424,1.416c11.494,3.163,22.626,7.517,33.216,12.992c9.62,6.24,18.552,13.48,26.648,21.6l2.752,2.544
				L131.36,438.648z M232,400c-18.48,0-34.024-14.4-50.488-29.664c-8.957-8.949-18.851-16.906-29.512-23.736
				c-11.599-6.072-23.809-10.899-36.424-14.4c-21.144-6.712-41.12-13.048-49.888-28.2c-8.368-14.472-4.048-34.64,0.536-56
				c3.299-13.099,5.235-26.503,5.776-40c-0.538-13.497-2.471-26.901-5.768-40c-4.584-21.352-8.904-41.52-0.536-56
				c8.8-15.152,28.744-21.488,49.888-28.2c12.613-3.502,24.819-8.329,36.416-14.4c10.658-6.83,20.55-14.788,29.504-23.736
				C197.976,30.4,213.52,16,232,16s34.024,14.4,50.488,29.664C291.445,54.613,301.339,62.57,312,69.4
				c11.599,6.072,23.809,10.899,36.424,14.4c21.144,6.712,41.12,13.048,49.888,28.2c8.368,14.472,4.048,34.64-0.536,56
				c-3.299,13.099-5.235,26.503-5.776,40c0.538,13.497,2.471,26.901,5.768,40c4.584,21.352,8.904,41.52,0.536,56
				c-8.8,15.152-28.744,21.488-49.888,28.2c-12.613,3.502-24.819,8.329-36.416,14.4c-10.658,6.83-20.55,14.788-29.504,23.736
				C266.024,385.6,250.48,400,232,400z M353.032,392.064c-3.911-0.487-7.595,1.947-8.68,5.736l-11.712,40.848l-42.032-54.04
				l2.752-2.544c8.093-8.122,17.023-15.365,26.64-21.608c10.6-5.477,21.743-9.831,33.248-12.992l4.424-1.416l40.16,51.616
				L353.032,392.064z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M232,64c-79.529,0-144,64.471-144,144s64.471,144,144,144s144-64.471,144-144C375.908,128.509,311.491,64.093,232,64z
				M232,336c-70.692,0-128-57.308-128-128S161.308,80,232,80s128,57.308,128,128C359.916,278.658,302.658,335.916,232,336z"
                        />
                      </g>
                    </g>
                    <g>
                      <g>
                        <path
                          d="M324.304,174.584c-3.01-4.135-7.814-6.582-12.928-6.584H262.4l-15.2-46.616c-2.759-8.395-11.801-12.963-20.196-10.204
				c-4.829,1.587-8.617,5.375-10.204,10.204L201.64,168h-49.016c-8.837-0.004-16.004,7.155-16.008,15.992
				c-0.003,5.12,2.445,9.931,6.584,12.944l39.648,28.8l-15.144,46.616c-2.732,8.404,1.867,17.431,10.27,20.162
				c4.873,1.584,10.209,0.738,14.354-2.274L232,261.448l39.656,28.8c5.586,4.15,13.23,4.15,18.816,0
				c5.669-4.029,8.029-11.297,5.808-17.888l-15.144-46.624l39.648-28.8C327.929,191.736,329.505,181.728,324.304,174.584z
				M267.024,216.216c-2.806,2.039-3.979,5.654-2.904,8.952l16.944,52.144l-44.36-32.224c-2.803-2.035-6.597-2.035-9.4,0
				l-44.36,32.224l16.936-52.144c1.071-3.296-0.101-6.906-2.904-8.944L152.624,184h54.824c3.466,0,6.537-2.232,7.608-5.528
				L232,126.328l16.944,52.136c1.071,3.296,4.142,5.528,7.608,5.528L311.376,184L267.024,216.216z"
                        />
                      </g>
                    </g>
                  </svg>
                  <h3>Quality</h3>
                </div>
              </li>
              <li
                className={classes["services__grid-item"]}
                data-wow-duration="1.5s"
              >
                <div className={classes["services__list-inner"]}>
                  <svg
                    viewBox="0 0 511 511.99968"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m347.339844 155.148438c-5.519532 0-10 4.46875-10 9.996093 0 5.523438 4.480468 10 10 10 5.53125 0 10-4.476562 10-10 0-5.527343-4.46875-9.996093-10-9.996093zm0 0" />
                    <path d="m165.644531 336.839844c-5.53125 0-10 4.480468-10 10 0 5.53125 4.46875 10 10 10 5.519531 0 10-4.46875 10-10 0-5.519532-4.480469-10-10-10zm0 0" />
                    <path d="m500.058594 61.519531c-3.375-.785156-6.921875.234375-9.359375 2.695313l-41.457031 41.785156h-19.875l-21.878907-22.667969v-20.152343l40.863281-41.472657c2.417969-2.453125 3.402344-5.980469 2.601563-9.335937-.796875-3.351563-3.265625-6.054688-6.53125-7.15625-10.265625-3.460938-21.007813-5.214844-31.933594-5.214844-32.570312 0-62.160156 15.1875-81.183593 41.667969-17.804688 24.789062-23.292969 55.167969-15.429688 84.242187l-73.660156 73.660156-122.71875-123v-24.140624c0-3.511719-1.84375-6.769532-4.855469-8.574219l-70.707031-42.429688c-3.9375-2.363281-8.972656-1.742187-12.214844 1.503907l-28.28125 28.277343c-3.242188 3.246094-3.863281 8.28125-1.503906 12.21875l42.421875 70.707031c1.804687 3.011719 5.058593 4.851563 8.570312 4.855469l24.132813.007813 122.730468 123-73.378906 73.378906c-29.074218-7.859375-59.46875-2.363281-84.269531 15.453125-26.464844 19.011719-41.640625 48.59375-41.640625 81.164063 0 10.921874 1.753906 21.667968 5.214844 31.929687 1.105468 3.285156 3.835937 5.765625 7.210937 6.546875 3.378907.785156 6.921875-.234375 9.363281-2.695312l41.453126-41.78125h19.984374l22.769532 22.769531v19.984375l-41.78125 41.453125c-2.460938 2.441406-3.480469 5.984375-2.695313 9.363281.78125 3.375 3.261719 6.105469 6.546875 7.210938 10.261719 3.460937 21.007813 5.214843 31.929688 5.214843 32.570312 0 62.148437-15.179687 81.164062-41.644531 17.816406-24.800781 23.3125-55.191406 15.453125-84.265625l58.933594-58.933594 13.5 14.664063-6.195313 6.191406c-3.90625 3.90625-3.90625 10.238281 0 14.144531 3.90625 3.902344 10.234376 3.902344 14.144532 0l5.609375-5.609375 126.664062 137.585938c.09375.101562.191407.199218.289063.296875 23.4375 23.4375 61.410156 23.445312 84.859375-.003907 23.382812-23.394531 23.382812-61.460937 0-84.855468-.101563-.101563-.207031-.199219-.3125-.296875l-137.800781-126.421875 5.546874-5.546875c3.90625-3.902344 3.90625-10.234375 0-14.140625s-10.234374-3.90625-14.144531 0l-6.152343 6.15625-14.691407-13.484375 59.21875-59.21875c8.417969 2.25 17.105469 3.390625 25.90625 3.390625 55.140625 0 99.996094-44.859375 99.996094-99.996094 0-10.925781-1.753906-21.667969-5.214844-31.933594-1.105469-3.285156-3.835937-5.765625-7.210937-6.546875zm-411.773438 40.414063c-1.875-1.878906-4.417968-2.835938-7.074218-2.835938l-22.617188-.007812-35.492188-59.257813 17.238282-17.238281 59.15625 35.5v22.617188c0 2.648437 1.050781 5.1875 2.921875 7.0625l125.65625 125.941406-14.144531 14.140625zm254.363282 195.0625 138.269531 126.847656c15.445312 15.609375 15.398437 40.882812-.144531 56.433594-15.578126 15.578125-40.796876 15.625-56.4375.136718l-127.078126-138.035156zm-14.75-13.535156-44.199219 44.191406-13.5-14.664063 43.007812-43.011719zm84.589843-103.464844c-8.746093 0-17.347656-1.402344-25.558593-4.167969-3.597657-1.207031-7.574219-.277344-10.261719 2.40625-50.132813 50.132813-158.15625 158.152344-197.933594 197.933594-2.6875 2.6875-3.621094 6.664062-2.40625 10.265625 8.3125 24.683594 4.335937 51.011718-10.914063 72.242187-15.207031 21.167969-38.871093 33.3125-64.917968 33.3125-2.925782 0-5.835938-.160156-8.71875-.46875l31.761718-31.515625c1.890626-1.875 2.957032-4.429687 2.957032-7.097656v-28.289062c0-2.652344-1.054688-5.195313-2.929688-7.070313l-28.628906-28.628906c-1.875-1.875-4.417969-2.929688-7.070312-2.929688h-28.289063c-2.667969 0-5.222656 1.066407-7.101563 2.957031l-31.511718 31.761719c-.3125-2.882812-.46875-5.792969-.46875-8.71875 0-26.050781 12.140625-49.710937 33.3125-64.917969 21.226562-15.25 47.558594-19.230468 72.246094-10.914062 3.597656 1.214844 7.574218.28125 10.261718-2.40625.550782-.546875 197.792969-197.792969 197.933594-197.933594 2.6875-2.6875 3.617188-6.660156 2.40625-10.261718-8.316406-24.683594-4.347656-51.003907 10.890625-72.21875 15.21875-21.1875 38.886719-33.335938 64.9375-33.335938 3.015625 0 6.011719.167969 8.980469.496094l-31.101563 31.566406c-1.84375 1.871094-2.875 4.390625-2.875 7.015625v28.289063c0 2.59375 1.003907 5.082031 2.804688 6.945312l27.628906 28.628906c1.882813 1.953125 4.480469 3.054688 7.195313 3.054688h28.289062c2.664062 0 5.21875-1.0625 7.097656-2.957032l31.511719-31.757812c.3125 2.882812.46875 5.792969.46875 8.71875 0 44.109375-35.886719 79.996094-79.996094 79.996094zm0 0" />
                    <path d="m311.988281 186.355469-125.136719 125.136719c-3.902343 3.902343-3.902343 10.234374 0 14.140624 3.90625 3.90625 10.238282 3.90625 14.144532 0l125.136718-125.136718c3.90625-3.902344 3.90625-10.234375 0-14.140625s-10.238281-3.90625-14.144531 0zm0 0" />
                    <path d="m438.355469 452c3.90625 3.894531 10.238281 3.894531 14.144531-.023438 3.898438-3.910156 3.886719-10.242187-.023438-14.140624l-90.136718-89.847657c-3.910156-3.898437-10.246094-3.886719-14.140625.023438-3.902344 3.914062-3.890625 10.242187.019531 14.140625zm0 0" />
                  </svg>
                  <h3>Maintain</h3>
                </div>
              </li> */}

              {services.map((service) => (
                <ServiceItem
                  key={service.image["_id"]}
                  ServiceUrl={service.image.url}
                  serviceName={service.name}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
