import { RouteObject } from "react-router-dom";
import Home from "../modules/client/pages/Home/Home";


export const clientRoutes: RouteObject[] = [
    {
        path: "/",
        element: <Home />
    }
]   