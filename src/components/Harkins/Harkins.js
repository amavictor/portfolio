import "./Harkins.styles"
import {motion, useMotionValue, useScroll, useTransform} from "framer-motion";
import React from "../../Assest/images/react.png";
import {
    HarkinBody,
    HarkinLaptop,
    HarkinLaptop2,
    HarkinPad, HarkinPad2,
    HarkinPhone,
    HarkinPhone2,
    HarkinPhone3
} from "./Harkins.styles";
import {useRef} from "react";
/*

export const Harkins =()=>{
    //card dragger
    const itemX = useMotionValue(0)
    const itemY = useMotionValue(0)
    const rotateItemX = useTransform(itemY,[-100,100],[30,-30])
    const rotateItemY = useTransform(itemX, [-100,100], [-30,30])

    const HarkinRef=useRef(null)
    const {scrollYProgress} = useScroll({
        target:HarkinRef,
        offset:["end end", "center center"]
    })
    const pic1 = useTransform(scrollYProgress,[0,1],["0%","15%"])

    return(
        <HarkinBody ref={HarkinRef}>
            <motion.div
                layout
                /!*drag
                dragElastic={0.16}
                dragConstraints={{top:30,left:20,right:20,bottom:30}}
                whileTap={{cursor:"grabbing"}}*!/
            >
                <h6>Harkins Theatres</h6>
                <aside>
                    <p>This is a movie trailer app that gives information on the latest movies,
                        upcoming movies, popular movies and lots more. While letting you watch trailers,
                        bloopers, and clips of the movie. Built using React and TMDB free movie API.
                    </p>
                </aside>
                <motion.div
                    className={"play"}
                    style={{
                        itemX,
                        pic1,
                        itemY,
                        rotateItemX,
                        rotateItemY,
                        z:100,
                    }}
                    drag
                    dragElastic={0.16}
                    dragConstraints={{top:0,left:0,right:0,bottom:0}}
                    whileTap={{cursor:"grabbing"}}
                >

                    <HarkinLaptop src={HarkinsLaptop}/>
                </motion.div>
                <HarkinLaptop2 src={HarkinsLaptop}/>
                <HarkinPhone
                    className={"play"}
                    style={{
                        itemX,
                        itemY,
                        rotateItemX,
                        rotateItemY,
                        z:100,
                    }}
                    drag
                    dragElastic={0.16}
                    dragConstraints={{top:3,left:3,right:3,bottom:3}}
                    whileTap={{cursor:"grabbing"}}
                    src={HarkinsPhone}/>
                <HarkinPhone2 src={HarkinsPhone}/>
                <HarkinPhone3 src={HarkinsPhone}/>
                <HarkinPad
                    className={"play"}
                    style={{
                        itemX,
                        itemY,
                        rotateItemX,
                        rotateItemY,
                        z:100,
                    }}
                    drag
                    dragElastic={0.16}
                    dragConstraints={{top:0,left:0,right:3,bottom:0}}
                    whileTap={{cursor:"grabbing"}}
                    src={HarkinsPad}
                />
                <HarkinPad2 src={HarkinsPad}/>
            </motion.div>
        </HarkinBody>
    )

}*/
