import {Navbar} from "../../components/Navbar/Navbar";
import {Form} from "../../components/Form/form";
import {motion} from "framer-motion"

export const Contact =()=>{
    return(
        <motion.div
            layout
            exit={{x: window.innerWidth,
                transition:{duration:1}
            }}
        >
            <Navbar/>
            <Form/>
        </motion.div>

    )
}