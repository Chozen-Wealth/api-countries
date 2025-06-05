import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";


export default function Layout({darkMode,togleMode}) {
    return(
        <div className={darkMode?'dark Layout':'Layout'}>
            <Nav togleMode={togleMode} darkMode={darkMode}/>
            <Outlet />
            <Footer />
        </div>
    )
}
