import { Button, Select, Space, TableColumnProps, Tag } from "antd";
import { formatDate, formatPriceToVnd } from "../../utils/format";
import { OrderStatus } from "../../constants/app.constant";
import { Order } from "./interfaces/order.interface";
import { OrderItem } from "./interfaces/order-items.interface";
import { EyeOutlined } from "@ant-design/icons";
import { getColorByOrderStatus } from "../../utils/color";


interface OrderColumnsProps {
    setOpenDetail: (open: boolean) => void;
    setId(id: string): void;
    setStatus: (status: OrderStatus) => void;
    handleUpdateStatus: (id: string, status: OrderStatus) => void;
}

const orderColumns = (props: OrderColumnsProps):TableColumnProps<Order>[] => {

    const {
        setOpenDetail, 
        setId, 
        setStatus, 
        handleUpdateStatus
    } = props
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
            render: (val: OrderStatus, record) => (
                <Select 
                    style={{width: '150px'}}
                    defaultValue={val}
                    onChange={(val) => handleUpdateStatus(record.id, val)}
                >
                    {
                        Object.entries(OrderStatus).map((item) => {
                            const [_, value] = item;
                            return (
                                <Select.Option  
                                    value={value}
                                    style={{
                                        color: getColorByOrderStatus(value),
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {value}
                                </Select.Option>
                            )
                        })
                    }
                </Select>
            ),
            filterDropdown: () => (
                <Select 
                    style={{width: '150px'}}
                    allowClear
                    onChange={(val) => setStatus(val) }
                >
                    {
                        Object.entries(OrderStatus).map((item) => {
                            const [_, value] = item;
                            return (
                                <Select.Option  
                                    value={value}
                                    style={{
                                        color: getColorByOrderStatus(value),
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {value}
                                </Select.Option>
                            )
                        })
                    }
                </Select>
            )
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
                </Space>
            )
        }
    ]
}

export default orderColumns;