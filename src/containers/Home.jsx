import React, { useRef, useEffect, useState } from "react";
import "../styles/home.scss";
import Hero from "../components/Hero";
import Preloader from "../components/Preloader";
import About from "../components/About";
import Services from "../components/Services";
import styled from "styled-components";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import useLocoScroll from "../hooks/useLocoScroll";
import CustomCursor from "../CustomCursor";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: relative; */
`;

const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);

  useLocoScroll();

  useEffect(() => {
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = React.useState(17);

  const id = React.useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }
  return (
    <>
      <CustomCursor />
      {preloader ? (
        <Preloader />
      ) : (
        <div
          className="super-container"
          id="super-container"
          data-scroll-container
          ref={ref}
        >
          <Hero className="home" id="home" />
          <div className="other-container" id="other-container">
            <About />
          </div>
          <Container>
            <Services className="services" id="services" />
            <div className="other-container" id="other-container">
              <Testimonials className="testimonial" id="testimonial" />
            </div>
            <Contact className="contact" id="contact" />
            <Footer />
            <ScrollToTop />
          </Container>
        </div>
      )}
    </>
  );
};
export default Home;
