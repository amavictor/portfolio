import styled, {keyframes} from "styled-components"
import {motion} from "framer-motion";
import {waitForElementToBeRemoved} from "@testing-library/react";

export const HomeBackground=styled(motion.div)`
  background-color: aliceblue;
  height: 100vh;
  width: 100vw;
  color:black ;
  
`
export const Landing = styled(motion.div)`
  padding: 0 5%;
  width: 100%;
  height: 100vh;
  position: relative;
  img{
    height:120%;
    position: relative;
    z-index: 3;
  }
  h1{
    font-size: 3rem;
    font-weight: 500;
  }
  
`
export const Landing2 = styled(motion.div)`
  height: 90vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`


const jelly = keyframes`
  0%{
    border-radius: 55% 45% 66% 34% / 53% 64% 36% 47%;
  }
  20%{
    border-radius: 55% 45% 60% 40% / 53% 62% 38% 47%;
  }
  40%{
    border-radius: 55% 45% 60% 40% / 57% 62% 38% 43%;
  }
  60%{
    border-radius: 39% 61% 75% 25% / 53% 59% 41% 47%;
  }
  80%{
    border-radius: 59% 41% 49% 51% / 35% 59% 41% 65%;
  }
  85% {
    border-radius: 64% 36% 66% 34% / 47% 48% 52% 53%;
  }
  100%{
    border-radius: 47% 53% 60% 40% / 57% 62% 38% 43%;
  }

`

export const WaterBall = styled(motion.div)`
  z-index: 4;
  top: 0;
  left: 40%;
  position:absolute;
  width:100px;
  height: 100px;
  background: #f3f3f3;
  border-radius: 55% 45% 66% 34% / 53% 59% 41% 47%;
  box-shadow: inset 17px 30px 26px 0px #c3c3c3,
              inset 1px 4px 32px 4px #ffffff,
              15px 20px 25px 1px #c7c7c7;
  animation: ${jelly} 5s 0.2s ease infinite alternate;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 50px;
    height: 50px;
  }
  
  &::before{
    content: "";
    position: absolute;
    top:25px;
    left: 40px;
    height: 10px;
    width: 15px;
    border-radius: 50%;
    background-color: white;
    z-index: 10;
  }
  
  &::after{
    content: "";
    position: absolute;
    top: 16px;
    left: 71px;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: white;
    z-index: 10;
  } 
`
export const WaterBall2 = styled(WaterBall)`
  top:20%;
  left: 60%;
`
export const WaterBall3 = styled(WaterBall)`
  top:73%;
  left: 55%;
  z-index: 0;
  img{
    filter: blur(3px);
  }
`
export const WaterBall4 = styled(WaterBall)`
  top:61%;
  left: 44%;
  z-index: 5;
  box-shadow: inset 17px 30px 26px 0px #c3c3c3,
  inset 1px 4px 32px 4px #ffffff;
`
export const WaterBall5 = styled(WaterBall)`
  top:47%;
  left: 30%;
  z-index: 0;
  
`

export const WaterBall6 = styled(WaterBall)`
  top:47%;
  left: 60%;
  z-index: 0;
  img{
    object-fit: cover;
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
  
`
export const WaterBall7 = styled(WaterBall)`
  top:30%;
  left: 40%;
  z-index: 0;
  img{
    filter: blur(1px);
  }
`
export const WaterBall8 = styled(WaterBall)`
  top:20%;
  left: 30%;
  z-index: 0;
  img{
    filter: blur(1px);
  }
`