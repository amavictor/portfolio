import styled from "styled-components";
import {motion} from "framer-motion";

export const HarkinBody = styled.div`
  margin-top: 20%;
  padding-top: 20%;
  padding-bottom: 30%;
  position: relative;
  height: 250vh;
  h6{
    font-size: 3rem;
  }

  aside{
    width: 40%;
    margin-top: 5%;
    position: sticky;
    z-index: 50;
    p{
      font-size: 2rem;
      color: gray;
      line-height: 1.2;
    }
  }
  
`

export const HarkinLaptop = styled(motion.img)`
  width: 28rem;
  height: 25rem;
  z-index: -1;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
  
`
export const HarkinPhone = styled(motion.img)`
  position: absolute;
  top: 40%;
  right: 2%;
  width: 15rem;
  height: 30rem;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
`
export const HarkinLaptopDiv = styled(motion.div)`
  position: absolute;
  top: -4%;
  right: 30%;
  perspective: 2000px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover{
    background-color: red;
  }
`
export const HarkinPad = styled(motion.img)`
  position: absolute;
  top: 80%;
  right: 40%;
  width: 18rem;
  height: 33rem;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
`

export const HarkinLaptop2 = styled(HarkinLaptop)`
  position: absolute;
  top: 15%;
  right: 5%;
  z-index: -1;
  transform: rotate(-30deg);
  width: 20rem;
  height: 17rem;
  filter: blur(2px);
`
export const HarkinPhone2 = styled(HarkinPhone)`
  top:55%;
  right: 12%;
  z-index: -1;
  filter: blur(2px);
  width: 12rem;
  height: 24rem;
  
`
export const HarkinPhone3 = styled(HarkinPhone2)`
  top: 70%;
  right: 18%;
  z-index: -2;
  filter: blur(4px);
  width: 10rem;
  height: 20rem;
`
export const HarkinPad2 = styled(HarkinPad)`
  top:90%;
  right: 27%;
  z-index: -4;
  width: 12rem;
  height: 24rem;
  filter: blur(2px);
`
