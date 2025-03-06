import { Col, Row, Table, Input, Space, Button } from "antd"
import orderColumns from "../../../../features/orders/order_columns"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../../common/types/store.type"
import { useEffect, useState } from "react"
import { fetchOrders } from "../../../../features/orders/orders.thunk"
import Detail from "./Detail"
import styles from "./Orders.module.scss";
import { OrderStatus } from "../../../../constants/app.constant"

const {Search} = Input

const Orders = () => {
    const [id, setId] = useState<string>('');
    const [keyword, setKeyword] = useState<string>();
    const [status, setStatus] = useState<OrderStatus>();
    const [openDetail, setOpenDetail] = useState<boolean>(false);
    const {items} = useSelector((state: RootState) => state.orders);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchOrders({
            keyword,
            status
        }))
    },[dispatch, keyword, status])

    return (
        
        <>
            <Row className={styles.orders__actions}>
                <Col span={6}>
                    <Search 
                        placeholder="Nhập thông tin tìm kiếm..."
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                </Col>
            </Row>
            <Table
                columns={
                    orderColumns({
                        setOpenDetail,
                        setId,
                        setStatus
                    })
                } 
                dataSource={items}
            />
            <Detail 
                open={openDetail}
                setOpen={setOpenDetail}
                id={id}
            />
        </>

    )
}

export default Orders 