import "./ProjectCard.styles"
import {CardBody, Item} from "./ProjectCard.styles";
import {motion, useScroll, useTransform} from "framer-motion";

import {useRef} from "react";

export const ProjectCard = ({image, title, description, link}) => {
    const zoomRef = useRef()
    const projectRef = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: zoomRef,
            offset: ["start center", "end start"]
        },
    );

    const rightScale = useTransform(scrollYProgress, [0, 3], [1, 4])
    const rightY = useTransform(scrollYProgress, [0, 1], ["0%", "280%"])
    const shiftLeft = useTransform(scrollYProgress, [0, 1.2], ["0%", "-60%"])
    const liftBox = useTransform(scrollYProgress, [0, 1.2], [1, 0])
    const leftOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])

    return (
        <CardBody>
            <Item ref={zoomRef}>
                <motion.div
                    style={{
                        scale: liftBox,
                        opacity: leftOpacity
                    }}
                    ref={projectRef}
                    intial={{
                        opacity:0,
                        y:20
                    }}
                    aminate={{
                        opacity:1,
                        y:0
                    }}
                    transition={{
                        delay:1.5,
                        ease:"linear",
                        type:"spring",
                        duration: 1
                    }}

                >
                    <h3>{title}</h3>
                    <p>
                        {description}
                    </p>
                </motion.div>

                {window.innerWidth<=800 ?
                    <motion.div
                    >
                        <a href={`${link}`} target={"_blank"} rel="noreferrer">

                            {
                                image.map((item,index) => <img id={index} alt={index} src={item}/>)
                            }
                        </a>

                    </motion.div>
                    :
                    <motion.div
                        style={{
                            scale: rightScale,
                            y: rightY,
                            x: shiftLeft,
                        }}
                    >
                        <a href={`${link}`} target={"_blank"} rel="noreferrer">

                            {
                                image.map((item,index) => <img id={index} alt={index} src={item}/>)
                            }
                        </a>

                    </motion.div>
                }

            </Item>
        </CardBody>

    )
}