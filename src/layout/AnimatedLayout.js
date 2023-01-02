import {Route, Routes, useLocation} from "react-router-dom";
import {Unboarding} from "../routes/Unboarding/unboarding";
import {Home} from "../routes/Home/Home";
import {AnimatePresence} from "framer-motion";
import {AboutMe} from "../routes/About me/aboutMe";
import {Contact} from "../routes/contact/contact";

export const AnimatedLayout =()=>{
    const location = useLocation()
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path={"/"} element={<Unboarding/>}/>
                <Route path={"/home"} element={<Home/>}/>
                <Route  path={"/about-me"} element={<AboutMe/>}/>
                <Route path={"/contact"} element={<Contact/>}/>
            </Routes>
        </AnimatePresence>

    )
}