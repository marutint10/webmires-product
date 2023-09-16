import React from "react";
import styled from "styled-components";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";
export default function Footer() {
  return (
    <FooterContainer>
      <span>&copy; 2023 webmires. All rights reserved!</span>
      <ul className="links">
        <li>
          <a href="#recommend">Home</a>
        </li>
        <li>
          <a href="#recommend">Services</a>
        </li>
        <li>
          <a href="#testimonials">AboutUs</a>
        </li>
      </ul>
      <ul className="social__links">
        <li>
          <a
            href="https://www.linkedin.com/company/webmires/about/"
            target="https://www.linkedin.com/company/webmires/about/"
          >
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/webmires"
            target="https://twitter.com/webmires"
          >
            <AiFillTwitterCircle />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/webmiresindia/?igshid=NzZhOTFlYzFmZQ%3D%3D"
            target="https://www.instagram.com/webmiresindia/?igshid=NzZhOTFlYzFmZQ%3D%3D"
          >
            <AiFillInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/webmires?mibextid=2JQ9oc"
            target="https://www.facebook.com/webmires?mibextid=2JQ9oc"
          >
            <BsFacebook />
          </a>
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  border-radius: 0.5rem;
  padding: 2.5rem;

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
    }
  }
`;
