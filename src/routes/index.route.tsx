import { createBrowserRouter } from "react-router-dom";
import { clientRoutes } from "./client.route";




const routes = createBrowserRouter(
    [
        {
            path: "/",
            children: clientRoutes
        }

    ]
);

export default routes 