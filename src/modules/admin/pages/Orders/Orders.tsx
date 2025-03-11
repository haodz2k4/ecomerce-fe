import { Col, Row, Table, Input, Space, Button } from "antd"
import orderColumns from "../../../../features/orders/order_columns"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../../common/types/store.type"
import { useEffect, useState } from "react"
import { fetchOrders, updateOrder } from "../../../../features/orders/orders.thunk"
import Detail from "./Detail"
import styles from "./Orders.module.scss";
import { OrderStatus } from "../../../../constants/app.constant"
import { showAlert } from "../../../../features/alert/alert.slice"
import Stats from "./Stats"
import { DashboardOutlined } from "@ant-design/icons"

const {Search} = Input

const Orders = () => {
    const [id, setId] = useState<string>('');
    const [keyword, setKeyword] = useState<string>();
    const [status, setStatus] = useState<OrderStatus>();
    const [openDetail, setOpenDetail] = useState<boolean>(false);
    const [openStats, setOpenStats] = useState<boolean>(false);
    const {items} = useSelector((state: RootState) => state.orders);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchOrders({
            keyword,
            status
        }))
    },[dispatch, keyword, status])

    const handleUpdateStatus = async (id: string,status: OrderStatus) => {
        console.log(status)
        try {
            await dispatch(updateOrder({id, data: {status} })).unwrap()
            dispatch(showAlert({
                type: 'success',
                message: 'Cập nhật trạng thái đơn hàng thành công'
            }))
        } catch (error) {
            dispatch(showAlert({
                type: 'error',
                message: 'Lỗi khi cập nhật trạng thái đơn'
            }))
        }
    }
    return (
        
        <>
            <Row gutter={16} className={styles.orders__actions}>
                <Col span={6}>
                    <Search 
                        placeholder="Nhập thông tin tìm kiếm..."
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </Col>
                <Col span={6}>
                    <Button 
                        icon={<DashboardOutlined />} 
                        iconPosition="end"
                        onClick={() => setOpenStats(true)}
                    >
                        Thống kê
                    </Button>
                </Col>
            </Row>
            <Table
                columns={
                    orderColumns({
                        setOpenDetail,
                        setId,
                        setStatus,
                        handleUpdateStatus
                    })
                } 
                dataSource={items}
            />
            <Detail 
                open={openDetail}
                setOpen={setOpenDetail}
                id={id}
            />
            <Stats open={openStats} setOpen={setOpenStats} />
        </>

    )
}

export default Orders 