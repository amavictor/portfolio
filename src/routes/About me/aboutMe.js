import {motion} from "framer-motion";
import {
    AboutSection, ButtonCase,
    HomeBackground,
    Landing,
    Landing2, Skill, Stack,
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
import 'react-circular-progressbar/dist/styles.css';
import {buildStyles, CircularProgressbarWithChildren} from "react-circular-progressbar";


export const AboutMe =()=>{

    const variant = {
        bounce:{
            y: [10, 5, -10,5, 10],
            transition:{
                delay:2,
                ease:"linear",
                type:"spring",
                duration: 3,
                repeat: Infinity
            }
        },
        bounce2:{
            y: [10, 5, -10,5, 10],
            transition:{
                delay:3,
                ease:"linear",
                type:"spring",
                duration: 4,
                repeat: Infinity
            }
        },
        bounce3:{
            y: [10, 5, -10,5, 10],
            transition:{
                delay:4,
                ease:"linear",
                type:"spring",
                duration: 2,
                repeat: Infinity
            }
        },
        bounce4:{
            y: [10, 5, -10,5, 10],
            transition:{
                delay:5,
                ease:"linear",
                type:"spring",
                duration: 5,
                repeat: Infinity
            }
        },
        bounce5:{
            y: [10, 5, -10,5, 10],
            transition:{
                delay:6,
                ease:"linear",
                type:"spring",
                duration: 4,
                repeat: Infinity
            }
        },
        bounce6:{
            y: [10, 5, -10,5, 10],
            transition:{
                delay:3,
                ease:"linear",
                type:"spring",
                duration: 2,
                repeat: Infinity
            }
        },
        bounce7:{
            y: [10, 5, -10,5, 10],
            transition:{
                delay:2,
                ease:"linear",
                type:"spring",
                duration: 2,
                repeat: Infinity
            }
        },
    }


    const downloadResume = () => {
        fetch('Victor-Ama.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Victor-Ama.pdf';
                alink.click();
            })
        })
    }


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
                        <Navbar/>
                        <Landing>
                            <Landing2>
                                <img src={Me} alt={"me"} draggable={"false"}/>
                            </Landing2>
                            <WaterBall
                                layout
                                variants={variant}
                                animate={{
                                    y: -20,
                                }}
                                animate="bounce4"
                                transition={{
                                    delay:2,
                                    ease:"linear",
                                    type:"spring",
                                    duration: 3
                                }}
                            >
                                <img alt={"javaScript"} src={Javascript}/>
                            </WaterBall>
                            <WaterBall2
                                layout
                                variants={variant}
                                animate={{
                                    x:[10,20,30,20,10,0]
                                }}
                                animate="bounce1"
                                transition={{
                                    delay:2,
                                    ease:"linear",
                                    type:"spring",
                                    duration: 3
                                }}
                            >
                                <img alt={"HTML"} src={Html}/>
                            </WaterBall2>
                            <WaterBall3
                                layout
                                variants={variant}
                                animate={{
                                    x:[10,20,30,40,0],
                                    y:[10,20,30,40,0],
                                }}
                                animate="bounce2"
                                transition={{
                                    delay:2,
                                    ease:"linear",
                                    type:"spring",
                                    duration: 3
                                }}

                            >
                                <img src={Html}/>
                            </WaterBall3>
                            <WaterBall4
                                layout
                                variants={variant}
                                animate={{
                                    x:[-5,-10,-50,-60,-50,-10,0],
                                    y:[-5,-10,-50,-60,-50,-10,0],
                                }}
                                animate="bounce3"
                                transition={{
                                    delay:2,
                                    ease:"linear",
                                    type:"spring",
                                    duration: 3
                                }}
                            >
                                <img src={Css}/>
                            </WaterBall4>
                            <WaterBall5
                                layout
                                variants={variant}
                                animate={{
                                    x:[-5,-10,-50,-60,-50,-10,0],
                                }}
                                animate="bounce4"
                                transition={{
                                    delay:2,
                                    ease:"linear",
                                    type:"spring",
                                    duration: 3
                                }}
                            >
                                <img src={React}/>
                            </WaterBall5>
                            <WaterBall6
                                layout
                                variants={variant}
                                animate={{
                                    scale:[1, 1.25, 1],
                                }}
                                animate="bounce5"
                                transition={{
                                    delay:2,
                                    ease:"linear",
                                    type:"spring",
                                    duration: 3
                                }}
                            >
                                <img src={Framer}/>
                            </WaterBall6>
                            <WaterBall7
                                layout
                                variants={variant}
                                animate={{
                                    scale:[1, 0.75, 1],
                                }}
                                animate="bounce6"
                                transition={{
                                    delay:2,
                                    ease:"linear",
                                    type:"spring",
                                    duration: 3
                                }}
                            >
                                <img src={Styled}/>
                            </WaterBall7>

                            <WaterBall8
                                layout
                                variants={variant}
                                animate={{
                                    x:[-5,-10,-50,-80,-50,-10,0],
                                }}
                                animate="bounce7"
                                transition={{
                                    delay:2,
                                    ease:"linear",
                                    type:"spring",
                                    duration: 3
                                }}
                            >
                                <img src={Firebase}/>
                            </WaterBall8>
                        </Landing>

                    </>
                </HomeBackground>
                <AboutSection>
                    <h5>About me</h5>
                    <aside>
                        <p>
                            Hi, my name is Victor Ama and I enjoy creating things that live on the internet.
                            It's been a while since I had an interest in web development, but I had to go through
                            the hassle of being a self thought developer. It took a while but I'm, here and I'm grateful.
                        </p>
                        <p>
                            I have the privilege of working as a frontend developer both professionally and aas a freelancer.
                            I am currently building Codetivite. A platform for newbies in tech to learn and collaborate with
                            other learners to build software products.
                        </p>
                    </aside>
                    <h5>Technologies I work with</h5>
                    <Stack>
                        <Skill>
                            <CircularProgressbarWithChildren
                                value={85}
                                styles={buildStyles({
                                    textColor: "red",
                                    pathColor: "var(--green)",
                                    trailColor: "gray"
                                })}
                            >
                                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                <img style={{ width: "50%", marginTop: -5 }} src={Javascript} alt="javaScript" />
                            </CircularProgressbarWithChildren>
                        </Skill>
                        <Skill>
                            <CircularProgressbarWithChildren
                                value={80}
                                styles={buildStyles({
                                    textColor: "red",
                                    pathColor: "var(--green)",
                                    trailColor: "gray"
                                })}
                            >
                                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                <img style={{ width: "50%", marginTop: -5 }} src={React} alt="React" />
                            </CircularProgressbarWithChildren>
                        </Skill>
                        <Skill>
                            <CircularProgressbarWithChildren
                                value={60}
                                styles={buildStyles({
                                    textColor: "red",
                                    pathColor: "var(--green)",
                                    trailColor: "gray"
                                })}
                            >
                                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                <img style={{ width: "50%", marginTop: -5 }} src={Firebase} alt="firebase" />
                            </CircularProgressbarWithChildren>
                        </Skill>
                        <Skill>
                            <CircularProgressbarWithChildren
                                value={40}
                                styles={buildStyles({
                                    textColor: "red",
                                    pathColor: "var(--green)",
                                    trailColor: "gray"
                                })}
                            >
                                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                <img style={{ width: "70%", marginTop: -5, borderRadius: "70%" }} src={"https://icts.io/wp-content/uploads/2020/04/react-native.png"} alt="react native" />
                            </CircularProgressbarWithChildren>
                        </Skill>
                        <Skill>
                            <CircularProgressbarWithChildren
                                value={80}
                                styles={buildStyles({
                                    textColor: "red",
                                    pathColor: "var(--green)",
                                    trailColor: "gray"
                                })}
                            >
                                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                <img style={{ width: "70%", marginTop: -5 }} src="https://i.pinimg.com/originals/71/f0/a4/71f0a4c41735f951f9823725ee42cf8a.png" alt="Redux" />
                            </CircularProgressbarWithChildren>
                        </Skill>
                        <Skill>
                            <CircularProgressbarWithChildren
                                value={40}
                                styles={buildStyles({
                                    textColor: "red",
                                    pathColor: "var(--green)",
                                    trailColor: "gray"
                                })}
                            >
                                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                <img style={{ width: "70%", marginTop: -5 }} src="https://everyday.codes/wp-content/uploads/2019/12/og_image.png" alt="Graphql" />
                            </CircularProgressbarWithChildren>
                        </Skill>
                        <Skill>
                            <CircularProgressbarWithChildren
                                value={90}
                                styles={buildStyles({
                                    textColor: "red",
                                    pathColor: "var(--green)",
                                    trailColor: "gray"
                                })}
                            >
                                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                                <img style={{ width: "70%", marginTop: -5,  borderRadius: "70%" }} src={Styled} alt="Styled components" />
                            </CircularProgressbarWithChildren>
                        </Skill>
                    </Stack>
                    <h6>Check out my resume</h6>
                </AboutSection>

                <ButtonCase>
                    <button onClick={downloadResume}>Download</button>
                </ButtonCase>
            </motion.div>
        </>
    )
}