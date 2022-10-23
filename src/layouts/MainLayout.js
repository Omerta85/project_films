import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

import {Header, Footer} from "../components";

const MainLayout = () => {

    const {themes} = useSelector(state => state.themeReducer);

    return(
        <div id={themes.body}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    )

}

export {MainLayout}