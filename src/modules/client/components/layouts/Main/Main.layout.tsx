import { Outlet, useLocation } from "react-router-dom"
import Header from "../../ui/Header/Header"
import Footer from "../../ui/Footer/Footer"
import { useEffect } from "react";
import NProgress from "../../../../../config/nprogress";
import { FloatButton } from "antd";
import { MessageFilled } from "@ant-design/icons";
import { socket } from "../../../../../socket";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../../common/types/store.type";
import { showNotification } from "../../../../../features/notifications/notification.slice";
export const MainLayout = () => {
    const dispatch = useDispatch<AppDispatch>();
    socket.on('SERVER_UPDATE_STATUS',(val) => {
        const {id, status} = val;
        dispatch(showNotification({
            type: 'success',
            message: `Cập nhật đơn hàng`,
            description: `Đơn hàng có id: ${id} đã chuyển sang ${status}`
        }))
    })
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