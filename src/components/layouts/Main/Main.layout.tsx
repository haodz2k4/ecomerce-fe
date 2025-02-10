import { Outlet } from "react-router-dom"
import Header from "../../ui/Header/Header"
import { Footer } from "antd/es/layout/layout"


export const MainLayout = () => {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}