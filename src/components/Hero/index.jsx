import React, { useRef, useEffect } from "react";
import ContactButton from "../ContactButton";
// import { pageData } from "../data";
import SplitText from "../../utils/Split3.mini";
import gsap from "gsap";
import MenuManager from "../Menu/MenuManager";
import Header from "../Header";
import "../../styles/home.scss";
import Scrolldown from "../Scrolldown";

const Home = () => {
  useEffect(() => {
    const split = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText("#header-text", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 3,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (
    <MenuManager className="home" id="home">
      <Header />
      <div className="main-container" id="main-container" data-scroll-section>
        <h1 id="header-text">
          <br />
          Brick <br />
          Studio
        </h1>
        <ContactButton />
        <Scrolldown />
      </div>
    </MenuManager>
  );
};
export default Home;
