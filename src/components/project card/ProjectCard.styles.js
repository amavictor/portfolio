import styled from "styled-components";
import {motion} from "framer-motion";


export const CardBody = styled.div`
  height: 300vh;
  width:100%;
  background-color:var(--black);
  padding-top: 20%;
  @media only screen and (max-width: 800px) {
    height: 100vh;
  }
`
export const Item = styled(motion.div)`
  height: 100vh;
  display: flex;
  position: sticky;
  top: 0;
  @media only screen and (max-width: 800px) {
    flex-wrap: wrap;
  }

  div:first-child {
    width: 50%;
    padding-left: 5%;

    h3 {
      font-size: 4rem;
      color: var(--green);
      margin-bottom: 3%;
      text-align: justify;
      text-justify: inter-word;
      @media only screen and (max-width: 800px) {
        font-size: 2.5rem;
          width: 100vw ;
      }
    }

    p {
      color: white;
      font-size: 2rem;
      line-height: 1.3;
      font-weight: 400;
      width: 80%;
      @media only screen and (max-width: 800px) {
        font-size: 1.5rem;
        width: 100vw;
      }
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
    @media only screen and (max-width: 800px) {
      width: 100%;
      background-color: transparent;
    }
   

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
      @media only screen and (max-width: 800px) {
        width: 90%;
        height: 250px;
        object-fit: cover;
        margin: 0 auto;
        object-position: left;
      }
      
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
      @media only screen and (max-width: 800px) {
        display: none;
      }
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
      @media only screen and (max-width: 800px) {
        display: none;
      }
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
      @media only screen and (max-width: 800px) {
        display: none;
      }
    }
  }
`
