import { createBrowserRouter } from "react-router-dom";
import { clientRoutes } from "./client.route";
import { MainLayout } from "../components/layouts/Main/Main.layout";
import Register from "../pages/Register/Register";




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
        }

    ]
);

export default routes 