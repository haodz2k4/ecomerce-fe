import { Button, Popconfirm, Space, TableColumnProps, Tag } from "antd";
import { formatDate, formatPriceToVnd } from "../../utils/format";
import { OrderStatus } from "../../constants/app.constant";
import { Order } from "./interfaces/order.interface";
import { OrderItem } from "./interfaces/order-items.interface";
import { CloseOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { DESC_CONFIRM_REMOVE, TITLE_CONFIRM_REMOVE } from "../../constants/title.constant";


interface OrderColumnsProps {
    setOpenDetail(open: boolean): void;
    setId(id: string): void;
}

const orderColumns = (props: OrderColumnsProps):TableColumnProps<Order>[] => {

    const {setOpenDetail, setId} = props
    return [
        {
            key: '#',
            title: '#',
            render: (_, record, index) => index  + 1
        },
        {
            key: 'user',
            title: 'Người dùng',
            dataIndex: ['user','fullName'],
            render: (val) => val
        },
        {
            key: 'address',
            title: 'Địa chỉ',
            dataIndex: 'address'
        },
        {
            key: 'status',
            title: 'Trạng thái',
            dataIndex: 'status',
            render: (val: OrderStatus) => <Tag >{val}</Tag>
        },
        {
            key: 'countOrderItem',
            title: 'Số lượng đơn hàng',
            dataIndex: 'ordersItems',
            render: (val) => val.length
        },
        {
            key: 'totalPrice',
            title: 'Tổng tiền',
            dataIndex: 'ordersItems',
            render: (val) => formatPriceToVnd(val.reduce((total: number, item: OrderItem) => total + item.quantity * item.price,0))
        },
        {
            key: 'createdAt',
            title: 'Ngày tạo',
            render: (val) => formatDate(val)
        },
        {
            key: 'updatedAt',
            title: 'Ngày cập nhật',
            render: (val) => formatDate(val)
        },
        {
            key: 'actions',
            title: 'Thao tác',
            render: (_, record) => (
                <Space>
                    <Button
                        icon={<EyeOutlined/>}
                        variant="filled"
                        color="blue"
                        size="large"
                        onClick={() => {
                            setOpenDetail(true)
                            setId(record.id)
                        }}
                    />
                    <Button
                        icon={<EditOutlined/>} 
                        variant="filled"
                        color="yellow"
                        size="large"
                    />
                    <Popconfirm 
                        title={TITLE_CONFIRM_REMOVE}
                        description={DESC_CONFIRM_REMOVE}
                        okText='Có'
                        cancelText='Không'
                    >
                        <Button
                            icon={<CloseOutlined color="red" />} 
                            variant="filled"
                            color="red"
                            size="large"
                        />
                    </Popconfirm>
                </Space>
            )
        }
    ]
}

export default orderColumns;