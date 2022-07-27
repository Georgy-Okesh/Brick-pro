import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import SectionHeader from "../SectionHeader";

import gsap from "gsap";
import SplitText from "../../utils/Split3.mini";
import useOnScreen from "../../hooks/useOnScreen";

import "./style.scss";

export default function About() {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", { type: "lines" });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power4.out",
        // onComplete: () => split.revert(),
      });
    }
  }, [reveal]);

  return (
    <section
      className={cn("about-section", { "is-reveal": reveal })}
      data-scroll-section
    >
      <SectionHeader title="about" id="about" />
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        We help our customers to tell about themselves, to grow and standout in
        an increasingly competitive digital world, through creative projects
        that are able to attract and involve, creating strategic value.
      </p>
    </section>
  );
}
