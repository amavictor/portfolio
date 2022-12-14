import styled from "styled-components"
import {motion} from "framer-motion";
import Background from "../../Assest/images/background.jpg"


export  const Main = styled(motion.main)`
  overflow-x: hidden;
  cursor: none;
`
export const Mark=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vh;
  width: 110%;
  margin-top: 10%;
  margin-left: -30px;
  position: relative;
  /*transform: rotate(350deg);*/
  &::before{
    content: "";
    width: 50%;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    background-color: var(--green);
    mix-blend-mode: difference;
    pointer-events: none;
    z-index: 2;
  }
  &::after{
    content: "";
    width: 50%;
    height: 100%;
    position: absolute;
    top:0;
    right:0;
    background-color: var(--black);
    pointer-events: painted;
    z-index: -1;
  }
  marquee{
    font-size: 4rem;
    font-weight: 700;
    color: black;
    
  }
`
export const Intro = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  text-align: center;
  div{
    width: 67.2%;
  }
  h1{
    font-size: 7rem;
    font-weight: 700;
    margin-left: 16%;
    width: 100%;
  }
  h2{
    font-size: 3rem;
    font-weight: 400;
  }
`
export const Black = styled.div`
  background-color: var(--black);
  height: 100vh;
  width: 100%;
`
export const Intro2 = styled(motion.h3)`
  color: white;
  transition: all .8s ease-in-out;
  font-size: 4rem;
  font-weight: 400;
  line-height: 1.2;
  width: 80%;
  text-transform: uppercase;
  text-align: justify;
  text-justify: inter-word;
  span{
    img{
      width: 100px;
      height: 50px;
      border-radius: 10px;
      object-fit: cover;
    }
  }
  
`
export const SecondIntro =styled.section`
  width: 100%;
  padding: 5% 5%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  background-color: var(--black);

  div {
    width: 100%;
    height: 100vh;
    background-color: #262626;
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
  }

`
export const Projects = styled.section`
  height: fit-content;
  h4{
    font-size: 10rem;
    font-weight: 600;
    color: white;
  }
  
`
export const Cursor = styled(motion.aside)`
  background-color: #111;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  `
export const ProjectIntro = styled.div`
  background-image: url("${Background}");
  min-height: 50vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 !important;
  padding: 10% 5%;

  &>div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 200px;
  }
  p{
    color: gray;
    font-size: 2rem;
  }
  
  
  h3{
    color: white;
    font-size: 7rem;
  }
  
  span{
    width: 50px;
    height: 50px;
    background-color: var(--green);
    border-radius: 50%;
    margin-left: 30px;
    margin-top: 40px;
  }
`
export const Project1 = styled.div`
  width: 60%;
  height: 600px;
  float: right;
  margin-right: 5%;
  margin-top: 20%;
  div:first-child{
    img{
      width: 50%;
      height: 350px;
      object-fit: cover;
      object-position: left;
    }
  }
  
`
export const Selection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5%;

  div {
    margin-right: 30px;
    border-radius: 15px;
    padding: 10px 10px;
    border: 1.5px solid #c0bfbf;

    &:hover {
      border: 1.5px solid white;
      p{
        color: white;
      }
    }

    p {
      color: #c0bfbf;
      font-size: 1.2rem;
      font-weight: 300;
    }
  }
`

export const ProjectGrid = styled.div`
  background-color: var(--black);
  padding: 0 5%;
  
`
export const ScrollZoom = styled.div`
  width: 100vw;
  height: 300vh;
  background-color: #020e02;
`