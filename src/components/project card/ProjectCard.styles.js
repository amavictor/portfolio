import styled from "styled-components";
import {motion} from "framer-motion";


export const CardBody = styled.div`
  height: 300vh;
  width:100%;
  background-color:var(--black);
  padding-top: 20%;
`
export const Item = styled(motion.div)`
  height: 100vh;
  display: flex;
  position: sticky;
  top: 0;

  div:first-child {
    width: 50%;
    padding-left: 5%;

    h3 {
      font-size: 4rem;
      color: var(--green);
      margin-bottom: 3%;
      text-align: justify;
      text-justify: inter-word;
    }

    p {
      color: white;
      font-size: 2rem;
      line-height: 1.3;
      font-weight: 400;
      width: 80%;
    }

  }

  div:last-child {
    width: 50%;
    height: 50vh;
    background-color: #262626;
    border-radius: 40px;
    padding: 5% 5%;
    position: relative;
    transition: all 0.5s;

    &:hover {
      filter: brightness(80%);
      cursor: pointer;
      background-color: #5b5b5b;
    }

    img:nth-child(1) {
      position: absolute;
      top: 10%;
      left: 5%;
      width: 70%;
      height: 70%;
      object-fit: cover;
      border-radius: 10px;
      box-shadow: -11px 13px 11px -7px rgba(0, 0, 0, 0.4);
      -webkit-box-shadow: -11px 13px 11px -7px rgba(0, 0, 0, 0.4);
      -moz-box-shadow: -11px 13px 11px -7px rgba(0, 0, 0, 0.4);
    }

    img:nth-child(2) {
      position: absolute;
      top: 50%;
      left: 35%;
      height: 45%;
      object-fit: contain;
      border-radius: 10px;
      box-shadow: -11px 13px 11px -7px rgba(0, 0, 0, 0.4);
      -webkit-box-shadow: -11px 13px 11px -7px rgba(0, 0, 0, 0.4);
      -moz-box-shadow: -11px 13px 11px -7px rgba(0, 0, 0, 0.4);
    }

    img:nth-child(3) {
      position: absolute;
      top: 20%;
      right: 2%;
      height: 45%;
      object-fit: contain;
      border-radius: 10px;
      box-shadow: -11px 13px 11px -7px rgba(0, 0, 0, 0.4);
      -webkit-box-shadow: -11px 13px 11px -7px rgba(0, 0, 0, 0.4);
      -moz-box-shadow: -11px 13px 11px -7px rgba(0, 0, 0, 0.4);
    }

    img:nth-child(4) {
      position: absolute;
      top: 30%;
      left: 1%;
      width: 80px;
      height: 220px;
      box-shadow: -11px 13px 11px -7px rgba(0, 0, 0, 0.4);
      -webkit-box-shadow: -11px 13px 11px -7px rgba(0, 0, 0, 0.4);
      -moz-box-shadow: -11px 13px 11px -7px rgba(0, 0, 0, 0.4);
    }
  }
`
