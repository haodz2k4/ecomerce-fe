import { RouteObject } from "react-router-dom";
import Dashboard from "../modules/admin/pages/Dashboard/Dashboard";
import Products from "../modules/admin/pages/Products/Products";


export const adminRoutes: RouteObject[] = [
    {
        path: "dashboard",
        element: <Dashboard />
    },
    {
        path: "products",
        element: <Products />
    }
]