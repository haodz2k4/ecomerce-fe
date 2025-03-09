import { useDispatch } from "react-redux";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom"
import { AppDispatch } from "../../../../common/types/store.type";
import { loginGoogle } from "../../../../features/auth/auth.slice";
import { showAlert } from "../../../../features/alert/alert.slice";
import { Flex, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";


const LoginGoogle = () => {
    const [searchParam] = useSearchParams();
    const token = searchParam.get('token');
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    setTimeout(() => {
        navigate("/")
    }, 1000)
    try {
        dispatch(loginGoogle(token))
       
        dispatch(showAlert({
            type: 'success',
            message: 'Đăng nhập thành công'
        }))
    } catch {
        dispatch(showAlert({
            type: 'error',
            message: 'Đăng nhập thất bại'
        }))
    }

    return <Flex justify="center" align="center">
        <Spin indicator={<LoadingOutlined spin />} size="large" style={{ fontSize: 300 }} />
    </Flex>
}

export default LoginGoogle