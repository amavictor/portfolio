import {motion, useMotionValue, useScroll, useTransform, useViewportScroll} from "framer-motion";
import {
    Black,
    Cursor, Footer,
    Intro,
    Intro2,
    Main,
    Mark, Project1, ProjectGrid, ProjectIntro,
    Projects, ScrollZoom,
    SecondIntro, Selection, Talk,

} from "./Home.styles";
import Screen1 from "../../Assest/images/Harkins/screen1.png"
import Screen2 from "../../Assest/images/Harkins/screen2.png"
import Screen3 from "../../Assest/images/Harkins/screen3.png"
import Screen4 from "../../Assest/images/Harkins/harkinMobile.png"
import Vac1 from "../../Assest/images/vaclab/vac1.png"
import Vac2 from "../../Assest/images/vaclab/vac2.png"
import Vac3 from "../../Assest/images/vaclab/vac3.png"
import Vac4 from "../../Assest/images/vaclab/vac4.png"
import VacMobile from "../../Assest/images/vaclab/vacMobile.png"
import Msg1 from "../../Assest/images/messenger/mes1.png"
import Msg2 from "../../Assest/images/messenger/mes2.png"
import Msg3 from "../../Assest/images/messenger/mes3.png"
import trip1 from "../../Assest/images/trip/trip1.png"
import trip2 from "../../Assest/images/trip/trip2.png"
import trip3 from "../../Assest/images/trip/trip3.png"
import Exp1 from "../../Assest/images/expense/exp1.png"
import Exp2 from "../../Assest/images/expense/exp2.png"
import Exp3 from "../../Assest/images/expense/exp3.png"
import Shop1 from "../../Assest/images/shop/shop1.png"
import Shop2 from "../../Assest/images/shop/shop2.png"
import Shop3 from "../../Assest/images/shop/shop3.png"
import {Navbar} from "../../components/Navbar/Navbar";
import React from "../../Assest/images/react.png";
import Typewriter from "typewriter-effect";
import Cartoon1 from "../../Assest/images/cartoon.jpg"
import Cartoon2 from "../../Assest/images/Cartoon2.jpg"
import Ui from "../../Assest/images/ui.jpg"
import {useEffect, useRef, useState} from "react"
import {ProjectCard} from "../../components/project card/ProjectCard";
import {Link} from "react-router-dom";




export const Home =()=>{
    const intoRef=useRef(null)
    const {scrollYProgress} = useScroll({
        target:intoRef,
        offset:["end end", "end center"]
    })
    const x = useTransform(scrollYProgress,[0,1],["0%","150%"])
    const [mousePosition, setMousePosition] = useState({
        x:0,
        y:0
    })
    const [cursorVariant, setCursorVariant] = useState("default")

     const projects=[
        {
            img:[`${Screen1}`,`${Screen2}`,`${Screen3}`,`${Screen4}` ],
            title: "Harkins movie app",
            description: "A movie trailer site that gives information on the latest movies, and tv shows. " +
                "get access to movie trailer and clips. Built with React, Firebase, TMDB etc...",
        },
        {
            img:[`${Vac1}`,`${Vac2}`,`${Vac4}`,`${VacMobile}` ],
            title: "Vaclab",
            description: "A movie trailer site that gives information on the latest movies, and tv shows. " +
                "get access to movie trailer and clips. Built with React, Firebase, TMDB etc...",
        },
        {
            img:[`${Screen1}`,`${Screen2}`,`${Screen3}` ],
            title: "Harkins movie app",
            description: "A movie trailer site that gives information on the latest movies, and tv shows. " +
                "get access to movie trailer and clips. Built with React, Firebase, TMDB etc...",
        },
        {
            img:[`${Screen1}`,`${Screen2}`,`${Screen3}` ],
            title: "Harkins movie app"
        },
    ]

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
            backgroundColor: "white",
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
            <SecondIntro ref={intoRef}onMouseEnter={textWithout} onMouseLeave={textLeave}>
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
                   {/* <Selection>
                        <div><p>Web applications</p></div>
                        <div><p>Graphics design</p></div>
                        <div><p>Writing</p></div>
                        <div><p>SEO</p></div>
                    </Selection>*/}
                </ProjectIntro>
                <div onMouseEnter={textWhite} onMouseLeave={textLeave}>
                    <ProjectCard image={[Screen1,Screen2,Screen3,Screen4]}
                                 title={"Harkins movie app"}
                                 description={"A movie trailer site that gives information on the latest movies, and tv shows. " +
                                     "get access to movie trailer and clips. Built with React, Firebase, TMDB etc..."}
                    />
                    <ProjectCard image={[Vac1,Vac2,Vac3,VacMobile]}
                                 title={"Vaclab"}
                                 description={"A movie trailer site that gives information on the latest movies, and tv shows. " +
                                     "get access to movie trailer and clips. Built with React, Firebase, TMDB etc..."}
                    />
                    <ProjectCard
                        image={[Msg1,Msg2,Msg3]}
                        title={"Messenger App"}
                        description={"This is a messennger application that allows user to easily chat and connect with " +
                            "other friends using the app."}
                    />
                    <ProjectCard
                        image={[trip1,trip2,trip3]}
                        title={"Trip Global"}
                        description={"Freelance work done for a logistic company in need of online presence."}
                    />
                    <ProjectCard
                        image={[Exp1,Exp2,Exp3]}
                        title={"Expensify"}
                        description={"Shopping list web app to easily track your shopping item while being able" +
                            "to categorize them."}
                    />
                    <ProjectCard
                        image={[Shop1,Shop2,Shop3]}
                        title={"Kings Collection"}
                        description={"An ecommerce clothing site. Built using react, redux, and firebase"}
                    />
                </div>

            </Projects>

            <Footer>
                <div>
                    <div>
                        <h4>Let's discuss your ideas</h4>

                            <Talk to={"/contact"}>Talk now</Talk>
                    </div>
                    <div>
                        <a target={"_blank"} href={"https://twitter.com/i_vamaa"} ><img src={"https://cdn-icons-png.flaticon.com/512/2168/2168336.png"} alt={"twitter"}/></a>
                        <a target={"_blank"} href={"https://www.instagram.com/i_v.amaa/"}><img src={"https://cdn-icons-png.flaticon.com/512/1384/1384015.png"}/></a>
                    </div>
                </div>

            </Footer>

        </Main>


    )
}