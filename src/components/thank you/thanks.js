import "./thankyou"
import {Tnx} from "./thankyou";
import {motion} from "framer-motion"
export const Thanks=()=>{
    return(
        <Tnx>
            <motion.div
                initial={{
                    scale:0,
                    opacity:0
                }}
                animate={{
                    scale:1,
                    opacity:1
                }}
                transition={{
                    ease:"linear",
                    type:"spring",
                    duration:1
                }}
            >
                <h2>Thank you</h2>
                <p>I have have received your message and will respond immediately.</p>
            </motion.div>
        </Tnx>
    )
}