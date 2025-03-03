import { createBrowserRouter } from "react-router-dom";
import { clientRoutes } from "./client.route";
import { MainLayout } from "../modules/client/components/layouts/Main/Main.layout";
import Register from "../modules/client/pages/Register/Register";
import Login from "../modules/client/pages/Login/Login";
import AdminLayout from "../modules/admin/components/layouts/Main/Admin.layout";
import { adminRoutes } from "./admin.route";
import PrivateRouter from "./Private.route";
import Roles from "./Roles.route";




const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout />,
            children: clientRoutes
        },
        {
            path: "admin",
            element: <PrivateRouter>
                <Roles >
                    <AdminLayout />
                </Roles>
            </PrivateRouter>,
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