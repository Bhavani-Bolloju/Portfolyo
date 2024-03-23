import { useEffect, useState } from "react";
import "./App.scss";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Video from "./components/video/Video";
import Testimonials from "./components/testimonials/Testimonials";
import News from "./components/news/News";
import Contact from "./components/contact/Contact";
import Copyrights from "./components/copyrights/Copyrights";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [userInfo, setUserInfo] = useState({
    error: null,
    isLoading: false,
    data: null,
  });

  // const [preloading, setPreloading] = useState(true);

  useEffect(() => {
    const fetchData = async function () {
      setUserInfo((prev) => ({ ...prev, isLoading: true }));
      try {
        const req = await fetch(
          `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`
        );

        if (!req.ok) throw new Error("Failed to fetch requested data");
        const res = await req.json();

        setUserInfo((prev) => ({ ...prev, data: res.user }));
      } catch (error) {
        setUserInfo((prev) => ({ ...prev, error: error.message }));
      }

      setUserInfo((prev) => ({ ...prev, isLoading: false }));
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Simulate content loading delay
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // console.log(classes);
  console.log(loaded);

  return (
    <div className={`${loaded ? "preloaded" : ""}`}>
      {loaded && (
        <>
          <Header />
          {userInfo.data && (
            <Hero
              title={userInfo.data.about.title}
              subtitle={userInfo.data.about.subTitle}
              name={userInfo.data.about.name}
              avatar={userInfo.data.about.avatar.url}
              skills={userInfo.data.skills.slice(0, 4)}
            />
          )}
          {userInfo.data && (
            <About
              avatar={userInfo.data.about.avatar.url}
              address={userInfo.data.about.address}
              description={userInfo.data.about.description}
              title={userInfo.data.about.title}
              experience={userInfo.data.about["exp_year"]}
            />
          )}
          {userInfo.data && (
            <Services
              skills={userInfo.data.skills.slice(0, 3)}
              services={userInfo.data.services.slice(0, 4)}
            />
          )}
          {userInfo.data && (
            <Portfolio projects={userInfo.data.projects.slice(0, 6)} />
          )}
          <Video />
          {userInfo.data && (
            <Testimonials testimonials={userInfo.data.testimonials} />
          )}
          <News />
          <Contact />
          <Copyrights />
        </>
      )}

      <div className={`preloader ${loaded ? "preloaded__inactive" : ""}`}>
        <div className="loader_line">loading</div>
      </div>
    </div>
  );
}

export default App;
