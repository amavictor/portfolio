import {motion, useMotionValue, useScroll, useTransform, useViewportScroll} from "framer-motion";
import {
    Black,
    Cursor,
    Intro,
    Intro2,
    Main,
    Mark, Project1, ProjectGrid, ProjectIntro,
    Projects, ScrollZoom,
    SecondIntro, Selection,

} from "./Home.styles";
import {Navbar} from "../../components/Navbar/Navbar";
import React from "../../Assest/images/react.png";
import Typewriter from "typewriter-effect";
import Screen1 from "../../Assest/images/Harkins/screen1.png"
import Screen2 from "../../Assest/images/Harkins/screen2.png"
import Screen3 from "../../Assest/images/Harkins/screen3.png"
import Cartoon1 from "../../Assest/images/cartoon.jpg"
import Cartoon2 from "../../Assest/images/Cartoon2.jpg"
import Ui from "../../Assest/images/ui.jpg"
import {useEffect, useRef, useState} from "react"
import {ProjectCard} from "../../components/project card/ProjectCard";




export const Home =()=>{
    const intoRef=useRef(null)
    const {scrollY} = useViewportScroll()
    const scaleRight = useTransform(scrollY, [0, 500], [2, 1]);
    const yRight = useTransform(scrollY, [0, 500], ["25vh", "0vh"]);
    const xRight = useTransform(scrollY, [0, 500], ["-25vw", "0vw"]);
    const {scrollYProgress} = useScroll({
        target:intoRef,
        offset:["start end", "end center"]
    })
    const x = useTransform(scrollYProgress,[0,1],["0%","15%"])
    const [mousePosition, setMousePosition] = useState({
        x:0,
        y:0
    })
    const [cursorVariant, setCursorVariant] = useState("default")

    useEffect(()=>{
        const mouseMove=(e)=>{
            setMousePosition({
                x:e.clientX,
                y:e.clientY
            })
        }
        window.addEventListener("mousemove", mouseMove)

        //IMAGE CHANGE
        /*const image_animate = new hoverEffect({

        })*/

        return ()=>{
            window.removeEventListener("mousemove", mouseMove)
        }
    },[])

    const variants = {
        default:{
            x:mousePosition.x - 16,
            y:mousePosition.y -16
        },
        text:{
            height:150,
            width: 150,
            x:mousePosition.x - 75,
            y:mousePosition.y -75,
            backgroundColor: "var(--green)",
            mixBlendMode:"difference",
        },
        color:{
            height:150,
            width: 150,
            x:mousePosition.x - 75,
            y:mousePosition.y -75,
            backgroundColor: "white",
            mixBlendMode:"difference",
        },
        textWith:{
            x:mousePosition.x - 16,
            y:mousePosition.y -16,
            backgroundColor: "var(--green)",
            zIndex:10
        },
        textWhite:{
            x:mousePosition.x - 16,
            y:mousePosition.y -16,
            backgroundColor: "white",
            mixBlendMode:"difference",
            zIndex:10
        }
    }
    const projects=[
        {
            img:`${Screen1}`,
            title: "Harkins movie app"
        },
        {
            img:`${Screen2}`,
            title: "Harkins movie app"
        },
        {
            img:`${Screen2}`,
            title: "Harkins movie app"
        },
        {
            img:`${Screen2}`,
            title: "Harkins movie app"
        },
    ]

    const textEnter=()=>{
        setCursorVariant("text")
    }
    const textColor=()=>{
        setCursorVariant("color")
    }
    const textLeave=()=>{
        setCursorVariant("default")
    }
    const textWithout=()=>{setCursorVariant("textWith")}
    const textWhite=()=>{setCursorVariant("textWhite")}
    //card parallax scroll
    return(
        <Main
            layout
            /*initial={{width:0}}*/
            /*animate={{width:"100%"}}*/
            exit={{x: window.innerWidth,
                transition:{duration:1}
            }}
        >
            <Navbar/>
           <Intro>
               <div>
                   <h1
                    onMouseEnter={textEnter} onMouseLeave={textLeave}
                   >
                       <Typewriter

                           onInit={(typewriter)=> {
                               typewriter
                                   .typeString("Hi,")
                                   .pauseFor(1500)
                                   .typeString("I'm Victor Ama")
                                   .start();
                           }}
                       />
                   </h1>
                   <Cursor
                    variants={variants}
                    animate={cursorVariant}
                   />
               </div>
           </Intro>

            <Mark>
                <marquee behavior={"scroll"} direction={"left"} scrollamount={"12"}>
                    FRONT END DEVELOPER | GRAPHICS DESIGNER | VIDEOGRAPHY | SEARCH ENGINE OPTIMIZATION
                </marquee>
            </Mark>
            <SecondIntro ref={intoRef}  onMouseEnter={textWithout} onMouseLeave={textLeave}>
                <motion.div style={{x}}>
                    <Intro2 >
                        Frontend developer <span><img src={Cartoon1}/></span> who cares deeply about user experience
                        <span><img src={Ui}/></span> with a
                        serious passion for graphics design and new technologies <span><img src={Cartoon2}/></span>.
                    </Intro2>
                </motion.div>
            </SecondIntro>
            <Projects>
                <ProjectIntro onMouseEnter={textWhite} onMouseLeave={textLeave}>
                    <div>
                        <div>
                            <h3 onMouseEnter={textColor} onMouseLeave={textWhite}>PROJECTS</h3>
                        </div>
                        <p>If you think good design is expensive, you should try out the cost of bad design.</p>
                    </div>
                    <Selection>
                        <div><p>Web applications</p></div>
                        <div><p>Graphics design</p></div>
                        <div><p>Writing</p></div>
                        <div><p>SEO</p></div>
                    </Selection>
                </ProjectIntro>
                <ScrollZoom>

                    <div
                        style={{
                            height: "110vh",
                            display: "flex",
                            position: "sticky",
                            top: "0px",
                        }}
                    >
                        <motion.div className="child" style={{ height: "100%", width: "50vw" }}>
                            <h2>Slide In </h2>
                        </motion.div>
                        <motion.div
                            className="child"
                            style={{
                                height: "100%",
                                width: "50vw",
                                scale: scaleRight,
                                y: yRight,
                                x: xRight,
                            }}
                        >
                            <h2>Scroll Down to Zoom Out</h2>
                        </motion.div>
                    </div>
                </ScrollZoom>

            </Projects>

        </Main>


    )
}