import { RouteObject } from "react-router-dom";
import Home from "../modules/client/pages/Home/Home";
import Profile from "../modules/client/pages/Profiles/Profile";
import PrivateRouter from "./Private.route";
import ProductDetail from "../modules/client/components/ui/ProductDetail/ProductDetail";
import Products from "../modules/client/pages/Products/Products";
import CategoryProducts from "../modules/client/pages/Categories/CategoryProducts";


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
        path: '/products',
        element: <Products />
    },
    {
        path: '/products/:slug',
        element: <ProductDetail />
    },
    {
        path: '/categories/:slug',
        element: <CategoryProducts />
    }
    
]   