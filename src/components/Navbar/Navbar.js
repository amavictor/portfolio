import {Circle, Navigation} from "./Navbar.styles"
import {motion} from "framer-motion";

export const Navbar =()=>{
    return(
        <Navigation>
            <motion.ul>
                <li><h1>Ama <br/><div>Victor <Circle/> </div></h1></li>
                <div>
                    <li>About me</li>
                    <li>Contact me</li>
                </div>
            </motion.ul>
        </Navigation>
    )
}