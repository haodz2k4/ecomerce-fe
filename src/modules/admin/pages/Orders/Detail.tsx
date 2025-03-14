import { Descriptions, DescriptionsProps, Image, List, Modal, Space, Tag } from "antd";
import { CruProps } from "../../../../common/interfaces/cru-props.interface";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../common/types/store.type";
import { useEffect } from "react";
import { fetchOrderById } from "../../../../features/orders/orders.thunk";
import { formatDate, formatPriceToVnd } from "../../../../utils/format";
import Title from "antd/es/typography/Title";
import styles from "./Orders.module.scss";
import { getColorByOrderStatus } from "../../../../utils/color";



const Detail = (props: Required<CruProps>) => {

    const {open, setOpen, id} = props;
    const {item} = useSelector((state: RootState) => state.orders);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchOrderById(id))
    },[dispatch, id])
    const items: DescriptionsProps['items'] = item ? [
        {
            key: '#',
            label: 'Id',
            children: item.id
        },
        {
            key: 'status',
            label: 'Trạng thái',
            children: <Tag  
                        color={getColorByOrderStatus(item.status)}
                        className={styles.orders__status}
                        >
                            {item.status}
                        </Tag>
        },
        {
            key: 'user',
            label: 'Người mua',
            children: item.user?.fullName
        },
        {
            key: 'address',
            label: 'Địa chỉ',
            children: item.address
        },
        {
            key: 'totalPrice',
            label: 'Tổng tiền',
            children: formatPriceToVnd(item.ordersItems ? item.ordersItems.reduce((total, item) => total + item.price * item.quantity,0): 0)
        },
        {
            key: 'createdAt',
            label: 'Ngày mua',
            children: formatDate(item.createdAt)
        },
    ] : []

    return (
        <Modal
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            centered
            width={800}
        >
            <Title className={styles.orders__title} level={3}>Chi tiết đơn hàng</Title>
            <Descriptions 
                column={1} 
                items={items}
                bordered
            />
            <List
                itemLayout="horizontal"
                dataSource={item ? item.ordersItems : []}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta 
                            avatar={<Image 
                                        width={70} 
                                        height={70}
                                        className={styles.orders__img} 
                                        src={item.product.thumbnail}
                                    />}
                            title={`${item.product.title}`}
                            description={
                                <Space>
                                    <p>Giá tiền: {formatPriceToVnd(item.price)}</p> 
                                    <p>Số lượng:  {item.quantity}</p> 
                                </Space>
                            }
                        />
                    </List.Item>
                )}
            />
        </Modal>
    )

}

export default Detail 