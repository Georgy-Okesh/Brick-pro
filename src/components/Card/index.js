import React from "react";
import styled from "styled-components";

const Cards= styled.div`
  height: calc(8rem + 12vw);
  width: calc(9rem + 12vw);
  position: relative;
  margin-top: calc(5rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.45);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Image = styled.div`
  width: 40%;
  height: 40%;
  position: absolute;
  left: 50%;
  bottom: 80%;
  transform: translate(-50%);
  border-radius: 50%;
  background-color: red;
  background: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  filter: drop-shadow(0px -3px 3px var(--nav2));
`;

const Text= styled.h4`
  color: #111;
  padding: 0 calc(1rem + 1vw);
  text-align: center;
  font-size: calc(0.6rem + 0.5vw);
`;

const Name= styled.h3`
  color: #f49f45;
  padding-top: 1rem;
  font-size: calc(0.5rem + 1vw);
`;

const Card = ({ name, text, image }) => {
  const Avatar = require(`../../assets/${image}.jpg`).default;

  return (
    <Cards>
      <Image img={Avatar} width="400" height="400" />
      <Text>{text}</Text>
      <Name>{name}</Name>
    </Cards>
  );
};

export default Card;
