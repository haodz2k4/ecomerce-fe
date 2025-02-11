import { createBrowserRouter } from "react-router-dom";
import { clientRoutes } from "./client.route";
import { MainLayout } from "../components/layouts/Main/Main.layout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";




const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout />,
            children: clientRoutes
        },
        {
            path: "/register",
            element: <Register />
        },
        {
            path: "/login",
            element: <Login />
        }

    ]
);

export default routes 