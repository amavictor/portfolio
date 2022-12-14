import {Route, Routes, useLocation} from "react-router-dom";
import {Unboarding} from "../routes/Unboarding/unboarding";
import {Home} from "../routes/Home/Home";
import {AnimatePresence} from "framer-motion";

export const AnimatedLayout =()=>{
    const location = useLocation()
    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path={"/"} element={<Unboarding/>}/>
                <Route path={"/home"} element={<Home/>}/>
            </Routes>
        </AnimatePresence>

    )
}