/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Icon from "../GlobalComponents/Icon";
import Button from "../GlobalComponents/Button";

const Aboutus = () => (
  <section css={styles} className="Aboutus" id="Aboutus">
    <h2>
      About <span>Us</span>
    </h2>
    <Icon />
    <p>
      At Webmires, we are a dedicated team of technology enthusiasts committed
      to transforming businesses through innovative solutions. With our
      expertise and extensive experience in web development, Android app
      development, UI/UX design, blockchain development, smart contract
      solutions, SEO, and digital marketing, we offer comprehensive services
      tailored to meet the unique needs of our clients. Our mission is to bridge
      the gap between business requirements and technical solutions, providing
      our clients with the tools and support they need to overcome roadblocks
      and achieve their growth objectives. We take pride in our client-centric
      approach, collaborating closely with our clients to understand their
      vision, challenges, and goals. With transparency, integrity, and a focus
      on delivering exceptional quality and innovation, we strive to build
      long-term relationships and be the trusted technology partner our clients
      rely on. Partner with us and embark on a journey of transformation, where
      ideas become powerful solutions, and your business thrives in the
      ever-evolving digital landscape.
    </p>
    <Button text="Read More" />
  </section>
);

const styles = css`
  width: 100%;
  padding: 80px;
  text-align: center;

  h2 {
    color: #232d39;
    font-weight: 900;
    font-size: 36px;
    letter-spacing: 1.3px;
    line-height: 1;
    span {
      color: #ed563b;
    }
  }
  > p {
    color: #7a7a7a;
    font-size: 17.5px;
    line-height: 1.7;
    text-align: justify; /* Justify the text to align from both sides */
    margin: 0; /* Remove default margin */
    padding: 0 20px; /* Add some padding for better readability on mobile */
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 0 0;
  }
  @media (max-width: 650px) {
    > p {
      padding: 0; /* Remove padding to make the text take full width */
    }
  }
  @media (max-width: 830px) {
    .container {
      flex-direction: column;
      align-items: center;
    }
  }
  @media (min-width: 831px) and (max-width: 1226px) {
    .container {
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 780px;
    }
  }
`;

export default Aboutus;
