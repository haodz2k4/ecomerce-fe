import { CloseOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { TableColumnProps, Space, Button, Popconfirm } from "antd";
import { DESC_CONFIRM_REMOVE, TITLE_CONFIRM_REMOVE } from "../../constants/title.constant";


export const inventoriesColums = (): TableColumnProps[] => {


    return [
        {
            key: 'index',
            title: '#',
            render: () => 1
        },
        {
            key: 'supplier',
            title: 'Nhà cung cấp',
            dataIndex: 'supplier'
        },
        {
            key: 'address',
            title: 'Địa chỉ',
            dataIndex: 'address'
        },
        {
            key: 'products',
            title: 'Sản phẩm',
            dataIndex: ['product','id']
        },
        {
            key: 'quantity',
            title: 'Số lượng tồn',
            dataIndex: 'quantity'
        },
        {
            key: 'createdAt',
            title: 'Ngày tạo',
            dataIndex: 'createdAt' 
        },
        {
            key: 'updatedAt',
            title: 'Ngày cập nhật',
            dataIndex: 'updatedAt'
        },
        {
            key: 'actions',
            title: 'Thao tác',
            render: () => (
                <Space>
                    <Button
                        icon={<EyeOutlined/>}
                        variant="filled"
                        color="blue"
                        size="large"
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

