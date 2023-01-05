import {Circle, Links, Menu, Navigation} from "./Navbar.styles"
import {motion} from "framer-motion";
import {Link, NavLink} from "react-router-dom";
import {useState} from "react";
export const Navbar =()=>{
    const [mobile, setMobile] = useState(false)
    const mobileHandler =()=>{
        return setMobile(!mobile)
    }
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

                <Menu
                    fontSize={"large"}
                    onClick={mobileHandler}
                />

                <Links mobile={`${mobile}`}>
                    <li><NavLink  to={"/about-me"}>About me</NavLink></li>
                    <li><NavLink to={"/contact"}>Contact me</NavLink></li>
                </Links>
            </motion.ul>
        </Navigation>
    )
}