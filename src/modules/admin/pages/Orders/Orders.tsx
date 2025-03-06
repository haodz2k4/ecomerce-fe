import { Table } from "antd"
import orderColumns from "../../../../features/orders/order_columns"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../../common/types/store.type"
import { useEffect } from "react"
import { fetchOrders } from "../../../../features/orders/orders.thunk"



const Orders = () => {

    const {items} = useSelector((state: RootState) => state.orders);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchOrders({}))
    },[dispatch])

    return (
        
        <Table
            columns={orderColumns()} 
            dataSource={items}
        />
    )
}

export default Orders 