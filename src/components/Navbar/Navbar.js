import {Circle, Menu, Navigation} from "./Navbar.styles"
import {motion} from "framer-motion";
import {Link, NavLink} from "react-router-dom";
export const Navbar =()=>{
    return(
        <Navigation>
            <motion.ul
                initial={{
                    opacity: 0,
                    y: 12,
                }}
                animate={{
                    opacity:1,
                    y:0,
                }}
                transition={{
                    delay:1.5,
                    ease:"linear",
                    type:"spring",
                    duration: 1
                }}
            >
                <li><Link to={"/home"}><h1>Ama <br/><section>Victor <Circle/> </section></h1></Link></li>

                <Menu fontSize={"large"}/>

                <div>
                    <li><NavLink  to={"/about-me"}>About me</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact me</NavLink></li>
                </div>
            </motion.ul>
        </Navigation>
    )
}