import { createBrowserRouter } from "react-router-dom";
import { clientRoutes } from "./client.route";
import { MainLayout } from "../components/layouts/Main/Main.layout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import AdminLayout from "../components/layouts/Admin/Admin.layout";
import { adminRoutes } from "./admin.route";




const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout />,
            children: clientRoutes
        },
        {
            path: "admin",
            element: <AdminLayout />,
            children: adminRoutes
        },
        {
            path: "register",
            element: <Register />
        },
        {
            path: "login",
            element: <Login />
        }

    ]
);

export default routes 