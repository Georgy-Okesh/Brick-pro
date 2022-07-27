import React, { useRef, useState } from "react";
import Facebook from "../../assets/facebook.svg";
import LinkedId from "../../assets/linkedin.svg";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { GoThumbsup } from "react-icons/go";
import validator from "validator";

const ContactSection = styled.section`
  width: 100vw;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #0a0b10;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: whitesmoke;
  display: inline-block;
  font-size: 2rem;
  margin-bottom: 3rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    /* or 100px */
    border-bottom: 2px solid #f49f45;
  }
`;

const Icons = styled.div`
  display: flex;
  margin-bottom: 3rem;
  a {
    &:hover {
      img {
        filter: invert(20%) sepia(100%) saturate(500%) hue-rotate(300deg)
          brightness(100%) contrast(97%);
      }
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
    img {
      width: 3rem;
      height: 3rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  input {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: #4e4f56;
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    &:active,
    &:focus {
      border: none;
      outline: none;
      background-color: #111;
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
    &[name="name"] {
      margin-right: 2rem;
    }
  }
  span {
    padding: 1rem calc(0.5rem + 0.5vw);
    align-items: center;
    text-align: center;
    margin-bottom: 1rem;
    color: #eff7f8;
  }
  textarea {
    padding: 1rem calc(0.5rem + 1vw);
    margin-bottom: 1rem;
    background-color: #4e4f56;
    border: none;
    border-radius: 4px;
    color: #eff7f8;
    margin-bottom: 2rem;
    &:focus,
    &:active {
      background-color: #111;
    }
    &::placeholder {
      color: #eff7f8;
      opacity: 0.6;
    }
  }
  button {
    padding: 0.8rem 2rem;
    background-color: whitesmoke;
    border-radius: 20px;
    font-size: 1.2rem;
    color: #0a0b10;
    cursor: pointer;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;

const Row = styled.div`
  @media only Screen and (max-width: 40em) {
    display: flex;
    flex-direction: column;
    input {
      &[name="name"] {
        margin-right: 0;
      }
    }
  }
`;
const Contact = () => {
  const form = useRef();

  const [done, setDone] = useState(false);
  const [name, setName] = useState("");
  const handleNameChange = (evt) => {
    const newName = evt.target.value.replace(/[^a-zA-Z\s]/g, "");
    setName(newName);
  };

  const [emailError, setEmailError] = useState("");
  const validateEmail = (e) => {
    var email = e.target.value;
    if (validator.isEmail(email)) {
      setEmailError("Valid Email :)");
    } else {
      setEmailError("Enter valid Email!");
    }
  };

  const sendEmail = (e) => {
    let x = 0;
    Array.from(document.querySelectorAll("input", "textarea")).forEach(
      (input) => {
        if (input.value === "") {
          x = x + 1;
          return;
        }
      }
    );
    e.preventDefault();
    if (x > 0) {
      alert("fill in all the blanks");
    } else {
      emailjs
        .sendForm(
          "service_zxf8pk5",
          "template_0lqmh6f",
          form.current,
          "_CP5X8Tv2w5VQQuWy"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <ContactSection className="contact" id="contact" data-scroll-section>
      <Title>Get in touch</Title>
      {/* <Text>Lorem ipsum dolor sit amet, consectetur adipisicing.</Text> */}
      <Icons>
        <a href="https://www.facebook.com/">
          {" "}
          <img src={Facebook} alt="Facebook" />
        </a>
        <a href="https://www.linkedin.com//">
          <img src={LinkedId} alt="LinkedId" />
        </a>
        <a href="https://twitter.com/">
          <img src={Twitter} alt="Twitter" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={Instagram} alt="Instagram" />
        </a>
      </Icons>
      <Form ref={form}>
        <Row>
          <input
            name="name"
            type="text"
            placeholder="your name"
            onChange={handleNameChange}
            value={name}
          />
          <input
            name="email"
            type="email"
            placeholder="enter working email id"
            onChange={(e) => validateEmail(e)}
          />
        </Row>
        <span className="text-danger">{emailError}</span>
        <textarea
          name="message"
          id=""
          cols="30"
          rows="2"
          placeholder="your message"
        ></textarea>
        {done ? (
          <span className="Done">
            Thank you for contacting me &nbsp;
            <GoThumbsup color="#fff" size={20} className="Thumbsup" />
          </span>
        ) : (
          <div style={{ margin: "0 auto" }}>
            <button type="submit" onClick={sendEmail} value="Send">
              Submit
            </button>
          </div>
        )}
      </Form>
    </ContactSection>
  );
};

export default Contact;
