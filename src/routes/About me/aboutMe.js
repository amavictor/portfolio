import {motion} from "framer-motion";
import {
    HomeBackground,
    Landing,
    Landing2,
    WaterBall,
    WaterBall2,
    WaterBall3,
    WaterBall4,
    WaterBall5, WaterBall6, WaterBall7, WaterBall8
} from "./aboutMe.styles";
import {Navbar} from "../../components/Navbar/Navbar";
import Me from "../../Assest/images/me.png";
import Javascript from "../../Assest/images/javaScript.png";
import Html from "../../Assest/images/html.png";
import Css from "../../Assest/images/css.png";
import React from "../../Assest/images/react.png";
import Framer from "../../Assest/images/motion.png";
import Styled from "../../Assest/images/styled.png";
import Firebase from "../../Assest/images/firebase.png";

export const AboutMe =()=>{
    return(
        <>
            <motion.div
                layout
            >

                <HomeBackground
                    /*initial={{width:0}}*/
                    /*animate={{width:"100%"}}*/
                    exit={{x: window.innerWidth,
                        transition:{duration:1}
                    }}

                >
                    <>

                        <Landing>
                            <Landing2>
                                <img src={Me}/>
                            </Landing2>
                            <WaterBall
                                layout
                            >
                                <img src={Javascript}/>
                            </WaterBall>
                            <WaterBall2
                                layout
                            >
                                <img src={Html}/>
                            </WaterBall2>
                            <WaterBall3
                                layout
                            >
                                <img src={Html}/>
                            </WaterBall3>
                            <WaterBall4
                                layout
                            >
                                <img src={Css}/>
                            </WaterBall4>
                            <WaterBall5
                                layout
                            >
                                <img src={React}/>
                            </WaterBall5>
                            <WaterBall6
                                layout
                            >
                                <img src={Framer}/>
                            </WaterBall6>
                            <WaterBall7
                                layout
                            >
                                <img src={Styled}/>
                            </WaterBall7>

                            <WaterBall8
                                layout
                            >
                                <img src={Firebase}/>
                            </WaterBall8>
                        </Landing>

                    </>

                </HomeBackground>
            </motion.div>
        </>
    )
}