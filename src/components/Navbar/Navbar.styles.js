import styled from "styled-components"
import {motion} from "framer-motion";
export const Navigation = styled(motion.nav)`
  padding: 0 5%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  h1{
    font-size: 1.5rem;
    font-weight: 600;
 
  }
  ul{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    list-style: none;
   
    
    div{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      
      li{
        font-size: 1.2rem;
        font-weight: 700;
      }
    }
  }
  
`
export const Circle =styled(motion.div)`
  width: 13px;
  height: 13px;
  background-color: var(--green);
  border-radius: 50%;
  margin-left: -15px;
  margin-top: 5px;
`