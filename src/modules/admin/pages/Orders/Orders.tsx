import { Table } from "antd"
import orderColumns from "../../../../features/orders/order_columns"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../../common/types/store.type"
import { useEffect, useState } from "react"
import { fetchOrders } from "../../../../features/orders/orders.thunk"
import Detail from "./Detail"



const Orders = () => {
    const [id, setId] = useState<string>('');
    const [openDetail, setOpenDetail] = useState<boolean>(false);
    const {items} = useSelector((state: RootState) => state.orders);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchOrders({}))
    },[dispatch])

    return (
        
        <>
            <Table
                columns={
                    orderColumns({
                        setOpenDetail,
                        setId
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