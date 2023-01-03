import styled from "styled-components"
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useReducer, useState} from "react";
import Typewriter from "typewriter-effect";
import {useNavigate} from "react-router-dom";

export const UnboardingContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--black);
  
  h6{
    font-size: 3rem;
    font-weight: 600;
    color: var(--green);
   
    @media only screen and (max-width: 768px){
    font-size:2rem;
  }
`
export const Rest = styled(motion.div)`
  width: 60%;
  height: 40vh;
  background-color: chocolate;
  margin: 0 auto;
`

const animationState = {
    show:true,
    showTwo:false,
    showThree:false,
    showFour:false,
    showFive:false,
    type:false
}

const reducer=(state,action)=>{
    const {type} = action
    switch (type) {
        case "animation1":
            return {
                show:false
            }
        case "animation2":
            return {
                showTwo:true
            }
        case "animation2Exit":
            return {
                showTwo: false
            }

        case "animation3":
            return {
                showThree:true
            }
        case "animation3Exit":
            return {
                showThree: false
            }
        case "animation4":
            return {
                showFour:true
            }
        case "animation4Exit":
            return {
                showFour: false
            }
        case "animation5":
            return {
                showFive:true
            }
        case "animation5Exit":
            return {
                showFive: false
            }
        case "typeWriter":
            return {
                type:true
            }
        default:return {...state}
    }
}

export const Unboarding =()=>{
    const [state, dispatch] = useReducer(reducer,animationState)
    const navigate = useNavigate()
    useEffect(()=>{
       const time =setTimeout(()=>(dispatch({
            type:"animation1"
        }),console.log(state.show)),2000)
        const time2 = setTimeout(()=>dispatch({
            type:"animation2"
        }),3000)
        const time3 = setTimeout(()=>dispatch({
            type:"animation2Exit"
        }),5000)
        const time4 = setTimeout(()=>(dispatch({
            type:"animation3"
        }),console.log(state.show)),6000)
        const time5 = setTimeout(()=>dispatch({
            type:"animation3Exit"
        }),8000)
        const time6 = setTimeout(()=>dispatch({
            type:"animation4"
        }),9000)
        const time7 = setTimeout(()=>dispatch({
            type:"animation4Exit"
        }),11000)
        const time8 = setTimeout(()=>dispatch({
            type:"animation5"
        }),12000)
        const time9 = setTimeout(()=>dispatch({
            type:"animation5Exit"
        }),14000)
        const time10 = setTimeout(()=>dispatch({
            type:"typeWriter"
        }),15000)
        const time11 = setTimeout(()=>{navigate("/home")},22000)


        return () => {
           [time,time2,time3,time4,time5,time6,time7,time8,time9,time10,time11].forEach(timer => {
               clearTimeout(timer)
           })
        }

    },[])




    const intro = {
        hidden:{
            opacity:0,
            y:20,
            transition: {duration: .5, ease: "easeOut"}
        },
        visible:{
            opacity: 1,
            y:0,
            transition:{
                ease:"easeIn",
                duration: .5
            }
        },
    }
    return(
        <motion.div
            initial={{height:0}}
            animate={{height:"100vh", transition:{duration:1}}}
            exit={{x: window.innerWidth,
                    transition:{duration:1}
            }}
        >
            {
                <UnboardingContainer
                    layout
                >
                   <AnimatePresence>
                       {
                           state.show && (<motion.h6
                               variants={intro}
                               initial={"hidden"}
                               animate={"visible"}
                               exit={"hidden"}
                               layout
                           >Hey there.</motion.h6>)

                       }
                   </AnimatePresence>
                    <AnimatePresence>
                        {
                            state.showTwo && (<motion.h6
                                variants={intro}
                                initial={"hidden"}
                                animate={"visible"}
                                exit={"hidden"}
                                layout
                            >Welcome to my portfolio.</motion.h6>)
                        }
                    </AnimatePresence>
                    <AnimatePresence>
                        {
                            state.showThree && (<motion.h6
                                variants={intro}
                                initial={"hidden"}
                                animate={"visible"}
                                exit={"hidden"}
                                layout
                            >You might like it....</motion.h6>)
                        }
                    </AnimatePresence>
                    <AnimatePresence>
                        {
                            state.showFour && (<motion.h6
                                variants={intro}
                                initial={"hidden"}
                                animate={"visible"}
                                exit={"hidden"}
                                layout
                            >You might not....</motion.h6>)
                        }
                    </AnimatePresence>
                    <AnimatePresence>
                        {
                            state.showFive && (<motion.h6
                                variants={intro}
                                initial={"hidden"}
                                animate={"visible"}
                                exit={"hidden"}
                                layout
                            >So here goes nothing 🚀 😎</motion.h6>)
                        }
                    </AnimatePresence>
                    {
                        state.type && (
                            <h6>
                                <Typewriter

                                    onInit={(typewriter)=> {

                                        typewriter
                                            .typeString("Loading...")

                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString("Let's go! 🚀")
                                            .start();
                                    }}
                                />
                            </h6>

                        )
                    }
                </UnboardingContainer>

            }
        </motion.div>
    )
}