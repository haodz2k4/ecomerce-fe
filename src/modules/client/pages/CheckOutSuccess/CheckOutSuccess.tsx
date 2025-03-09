import { Button, Result } from "antd"
import styles from "./CheckOutSuccess.module.scss";

const CheckOutSuccess = () => {
    
    
    return (
        <Result
            status="success"
            title="Đơn hàng đã được tạo thành công"
            subTitle={`Đơn hàng sẽ được vận chuyển tới bạn trong 2 tới 4 ngày`}
            extra={[
            <Button type="default" className={styles.btn__back}>
                Quay trở lại trang chủ 
            </Button>,
            <Button key="buy">Mua lại</Button>,
            ]}
        />
    )
}

export default CheckOutSuccess