import {motion} from "framer-motion";

export const AnimatedTextsWord =({text})=>{
    const words = text.split(" ")
    const container = {
        hidden:{opacity:0},
        visible: (i=1)=>({
            opacity: 1,
            transition:{
                staggerChildren: 0.12,
                delayChildren: 0.04 * i
            }
        })
    }

    const child = {
        visible:{
            opacity:1,
            y:0,
            transition: {
                type:"spring",
                damping:12,
                stiffness:100,
            }
        },
        hidden:{
            opacity:0,
            y:20,
            transition:{
                type: "spring",
                damping:12,
                stiffness: 100
            }
        }
    }

    return(
        <motion.div
            style={{overflow: "hidden", display:"flex", width:"60%"}}
            variants={container}
            initial={"hidden"}
            animate={"visible"}
        >
            <h1 style={{fontSize:"4rem", fontWeight:"800"}}>{words.map((words, index)=>(
                <motion.span
                    style={{marginRight:"30px"}}
                    key={index}
                    variants={child}
                >
                    {words}
                </motion.span>
            ))}</h1>
        </motion.div>
    )
}