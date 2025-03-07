import { Image, List, Pagination, Tabs, TabsProps } from "antd"
import { OrderStatus } from "../../../../constants/app.constant"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../common/types/store.type";
import { fetchOrders } from "../../../../features/orders/orders.thunk";



const OrderedTab = () => {

    const [status, setStatus] = useState<OrderStatus>(OrderStatus.PENDING);
    const {items} = useSelector((state: RootState)  => state.orders);
    const {currentUser} = useSelector((state: RootState) => state.users);
    const dispatch = useDispatch<AppDispatch>();
    
    const tabsItems: TabsProps['items'] = Object.entries(OrderStatus).map((item) => {
        const [key, value] = item;
        return {
            key,
            label: <span onClick={(() => setStatus(value))}>{value}</span>
        }
    })

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
    return (
       <>
        <Tabs items={tabsItems}/>
        <List
            itemLayout="horizontal"
            dataSource={items}
            renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Image width="50px" height="50px" />}
                        title={item.id}
                        description={<><strong>Giá tiền: </strong> 1000</>}
                    />
                </List.Item>
            )} 
        />
        <Pagination 
            total={50} 
            align="end"
        />
       </>
    )
}

export default OrderedTab