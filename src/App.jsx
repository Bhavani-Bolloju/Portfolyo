import { useEffect, useState } from "react";

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
  const [userInfo, setUserInfo] = useState({
    error: null,
    isLoading: false,
    data: null,
  });

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

  // console.log(userInfo);

  return (
    <div>
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
      <About skills={userInfo.data.skills} />
      <Services />
      <Portfolio />
      <Video />
      <Testimonials />
      <News />
      <Contact />
      <Copyrights />
    </div>
  );
}

export default App;
