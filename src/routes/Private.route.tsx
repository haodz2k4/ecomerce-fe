import { useSelector } from "react-redux";
import { RootState } from "../common/types/store.type";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }: { children: React.ReactNode }) => {

    const {isAuth} = useSelector((state: RootState) => state.auth);
    if(!isAuth) {
        return <Navigate to="/login"/>
    }
    return children
};

export default PrivateRouter;
