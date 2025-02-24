import { Outlet } from "react-router-dom"
import Header from "../../ui/Header/Header"
import Footer from "../../ui/Footer/Footer"


export const MainLayout = () => {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}