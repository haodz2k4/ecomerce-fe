import { Button, Collapse, CollapseProps, Empty, Flex, Image, List, Pagination, Popconfirm, Segmented, Space, Tabs, TabsProps, Tag } from "antd"
import { OrderStatus } from "../../../../constants/app.constant"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../common/types/store.type";
import { fetchOrders } from "../../../../features/orders/orders.thunk";
import { formatDate, formatPriceToVnd } from "../../../../utils/format";
import { CloseOutlined } from "@ant-design/icons";
import styles from "./Profile.module.scss";


const OrderedTab = () => {

    const [status, setStatus] = useState<OrderStatus>(OrderStatus.PENDING);
    const {items} = useSelector((state: RootState)  => state.orders);
    const {currentUser} = useSelector((state: RootState) => state.users);
    const dispatch = useDispatch<AppDispatch>();
    
    

    useEffect(() => {
        dispatch(fetchOrders({
            userId: currentUser?.id,
            status
        }))
    },[
        dispatch, 
        currentUser?.id,
        status  
    ])

    const collapseItems: CollapseProps['items'] = items.map((item) => ({
        key: item.id,
        label:  <Flex justify="space-between">
                    <span>{formatDate(item.createdAt)}</span>
                    <span>Số lượng: {item.ordersItems.length}</span>
                    <span>Tổng tiền: {formatPriceToVnd(item.ordersItems.reduce((total, order) => total + order.price * order.quantity,0))}</span>
                    <Popconfirm
                        title="Bạn có chắc muốn hủy đơn hàng ko"
                    >
                        <Button 
                            icon={<CloseOutlined />}
                            variant="text"
                            color="red"
                        >
                            Hủy 
                        </Button>
                    </Popconfirm>
                </Flex>,
        children:   <List
                        itemLayout="horizontal"
                        dataSource={item.ordersItems}
                        renderItem={(item) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Image width="50px" height="50px" src={item.product.thumbnail} />}
                                    title={item.product.title}
                                    description={<Space>
                                        <strong>Giá tiền:</strong>{formatPriceToVnd(item.price)}
                                        <strong>Số lượng:</strong>{item.quantity}
                                    </Space>}
                                />
                            </List.Item>
                        )} 
                    />
    }) )
    return (
       <>
        <Segmented
            className={styles.segmented}
            options={Object.entries(OrderStatus).map((item) => {
                const [key, value] = item;
                return value
            })}
            onChange={(val) => setStatus(val)}
        />
        {items.length > 0 ? <Collapse items={collapseItems} /> : <Empty />}
       </>
    )
}

export default OrderedTab