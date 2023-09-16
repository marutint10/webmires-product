/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";

const Info = () => (
  <div css={styles} className="info">
    <h1>
      We Transform Business Requirements <span>into Technical Solutions!</span>
    </h1>
    <div className="container">
      <label htmlFor="">
        <span>Contact today for a free estimate:</span>
      </label>

      <h5>
        <BsFillTelephoneFill /> +91 9113150928, +91 9798225967
      </h5>
      <h5>
        <AiFillMail /> webmires@gmail.com
      </h5>
    </div>
  </div>
);

const styles = css`
  width: 100%;
  max-width: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  color: #fff;
  p {
    font-size: 17px;
    line-height: 1;
    font-weight: 900;
    letter-spacing: 1.2px;
  }
  .container {
    font-size: 30px;
    font-weight: 750;
    span {
      color: #ed563b;
    }
  }
  h1 {
    font-size: 50px;
    line-height: 1;
    font-weight: 750;
    margin: 36px 0;
    span {
      color: #ed563b;
    }
  }
  .btn {
    padding: 14px 16px;
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 42px;
    }
  }
`;

export default Info;
