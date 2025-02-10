import { Outlet } from "react-router-dom"



export const MainLayout = () => {

    return (
        <>
            header 
            <Outlet />
            footer 
        </>
    )
}