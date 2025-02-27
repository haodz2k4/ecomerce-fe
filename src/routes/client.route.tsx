import { RouteObject } from "react-router-dom";
import Home from "../modules/client/pages/Home/Home";
import Profile from "../modules/client/pages/Profiles/Profile";
import PrivateRouter from "./private.route";
import ProductDetail from "../modules/client/components/ui/ProductDetail/ProductDetail";


export const clientRoutes: RouteObject[] = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: '/profiles',
        element: <PrivateRouter>
            <Profile />
        </PrivateRouter>,
    },
    {
        path: '/products/:slug',
        element: <ProductDetail />
    }
]   