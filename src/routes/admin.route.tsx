import { RouteObject } from "react-router-dom";
import Dashboard from "../modules/admin/pages/Dashboard/Dashboard";
import Products from "../modules/admin/pages/Products/Products";
import Inventories from "../modules/admin/pages/Inventories/Inventories";
import Categories from "../modules/admin/pages/Categories/Categories";
import Users from "../modules/admin/pages/Users/Users";


export const adminRoutes: RouteObject[] = [
    {
        path: "dashboard",
        element: <Dashboard />
    },
    {
        path: "users",
        element: <Users />
    },
    {
        path: "products",
        element: <Products />
    },
    {
        path: "inventories",
        element: <Inventories />
    },
    {
        path: "categories",
        element: <Categories />
    }
]