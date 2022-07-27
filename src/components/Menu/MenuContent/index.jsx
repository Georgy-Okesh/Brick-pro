import React, { useContext } from "react";
import { MenuContext } from "../MenuManager";
import { Facebook, Instagram, Youtube, Dribbble, Twitch } from "react-feather";
import cn from "classnames";

import "./style.scss";

import scrollTo from "gatsby-plugin-smoothscroll";

const internalLinks = [
  {
    url: "#home",
    component: <span>Welcome</span>,
    img: "https://images.unsplash.com/photo-1615713170963-2595d2c721bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  },
  {
    url: "#services",
    component: <span>Services</span>,
    img: "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2148&q=80",
  },
  {
    url: "#testimonial",
    component: <span>Recognition</span>,
    img: "https://images.unsplash.com/photo-1554941829-202a0b2403b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  },
  {
    url: "#contact",
    component: <span>Talk to us</span>,
    img: "https://images.unsplash.com/photo-1593697821028-7cc59cfd7399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80",
  },
  // {
  //   url: "#5",
  //   component: <span>Career</span>,
  //   img: "https://images.unsplash.com/photo-1588200618450-3a5b1d3b9aa5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  // },
];

const externalLinks = [
  {
    url: "www.facebook.com",
    component: <Facebook />,
  },
  {
    url: "www.instagram.com",
    component: <Instagram />,
  },
  {
    url: "www.youtube.com",
    component: <Youtube />,
  },
  {
    url: "www.dribbble.com",
    component: <Dribbble />,
  },
  {
    url: "www.twitch.com",
    component: <Twitch />,
  },
];

export default function MenuContent() {
  const { setOpen, open } = useContext(MenuContext);
  return (
    <div className="menu-holder">
      <div className={cn("menu-inside", { open })}>
        <div className="menu-nav-container">
          <ul className="internal-nav-links">
            {internalLinks.map((link) => (
              <li key={link.url}>
                <a
                  onClick={() => (setOpen(!open), scrollTo(link.url))}
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                >
                  {link.component}
                </a>
                <img src={link.img} />
              </li>
            ))}
          </ul>
          <ul className="external-nav-links">
            {externalLinks.map((link) => (
              <li key={link.url}>
                <a href={link.url}>{link.component}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
