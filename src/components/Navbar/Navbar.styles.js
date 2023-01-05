import styled, {css} from "styled-components"
import {motion} from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';
export const Navigation = styled(motion.nav)`
  padding: 0 5%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  flex-wrap:wrap;
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
    flex-wrap: wrap;
   
    section{
    
     display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }

    div:first-child{
      display: none;
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

export const Menu= styled(MenuIcon)`
    width: 4rem;
    height: 4rem;
  display: none !important;
  @media only screen and (max-width: 912px){
    display: inline-block !important;
  }
`
export const Links = styled.div`

      display: flex;
      align-items: center;
      gap: 20px;
      
      ${
            props=>props.mobile==="true" && css`
                  display: block !important;
                  width: 100vw;
                  height: 40vh;
                  text-align: center;
                  padding: 40% 0;
                  position: relative;
                  margin-top: 40px;
                  z-index: 100;
                  background: rgba(255, 255, 255, 0.18);
                  border-radius: 16px;
                  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                  backdrop-filter: blur(4.3px);
                  -webkit-backdrop-filter: blur(4.3px);
                  border: 1px solid rgba(255, 255, 255, 0.2);
            `
      }

      li {
            font-size: 1.2rem;
            font-weight: 700;
            @media only screen and (max-width: 912px){
                  margin-bottom: 40px;
            }
      }

      @media only screen and (max-width: 912px) {
            display: none;
      }

`