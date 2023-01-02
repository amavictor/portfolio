import {Circle, Navigation} from "./Navbar.styles"
import {motion} from "framer-motion";
import {Link, NavLink} from "react-router-dom";

export const Navbar =()=>{
    return(
        <Navigation>
            <motion.ul>
                <li><Link to={"/home"}><h1>Ama <br/><div>Victor <Circle/> </div></h1></Link></li>
                <div>
                    <li><NavLink  to={"/about-me"}>About me</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact me</NavLink></li>
                </div>
            </motion.ul>
        </Navigation>
    )
}