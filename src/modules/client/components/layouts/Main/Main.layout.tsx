import { Outlet, useLocation } from "react-router-dom"
import Header from "../../ui/Header/Header"
import Footer from "../../ui/Footer/Footer"
import { useEffect } from "react";
import NProgress from "../../../../../config/nprogress";
import { FloatButton } from "antd";
import { MessageFilled } from "@ant-design/icons";
export const MainLayout = () => {

    const location = useLocation();
    useEffect(() => {
        NProgress.start()
        NProgress.done()
    },[location.pathname])
    return (
        <>
            <Header />
                <Outlet />
                <FloatButton 
                    icon={<MessageFilled color="white"/>}
                    badge={{count: 5}}
                    style={{ insetInlineEnd: 50 }}
                />
                <FloatButton.BackTop style={{ insetInlineEnd: 100 }}/>
            <Footer />

        </>
    )
}