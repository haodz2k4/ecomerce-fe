import { RouteObject } from "react-router-dom";
import Home from "../modules/client/pages/Home/Home";
import Profile from "../modules/client/pages/Profiles/Profile";


export const clientRoutes: RouteObject[] = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: '/profiles',
        element: <Profile />
    }
]   