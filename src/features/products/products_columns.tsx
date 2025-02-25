import { Button, Popconfirm, Space, TableColumnType, Tag } from "antd";
import { StatusActiveEnum } from "../../constants/app.constant";
import { getColorByStatus, transfromStatus } from "../../utils/transform";
import { formatDate } from "../../utils/format";
import { CloseOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { DESC_CONFIRM_REMOVE, TITLE_CONFIRM_REMOVE } from "../../constants/title.constant";



interface ProductsColumns {
    setOpenDetail: (value: boolean) => void;
    setOpenEdit: (value: boolean) => void;
}

export const productsColumns = (productColumns: ProductsColumns): TableColumnType[] => {

    const {setOpenDetail, setOpenEdit} = productColumns

    return [
        {
            key: '#',
            title: '#'
        },
        {
            key: 'title',
            title: 'Tiêu đề',
            dataIndex: 'title'
        },
        {
            key: 'thumbnail',
            title: 'Hình ảnh',
            dataIndex: 'thumbnail'
        },
        {
            key: 'category',
            title: 'Danh mục',
            dataIndex: ['category','title']
        },
        {
            key: 'price',
            title: 'Giá tiền',
            dataIndex: 'price'
        },
        {
            key: 'discountPercentage',
            title: '% giảm giá',
            dataIndex: 'discountPercentage'
        },
        {
            key: 'status',
            title: 'Trạng thái',
            dataIndex: 'status',
            render: (status: StatusActiveEnum) => (
                <Tag 
                    color={getColorByStatus(status)}
                >
                    {transfromStatus(status)}
                </Tag>
            )
        },
        {
            key: 'createdAt',
            title: 'Ngày tạo',
            dataIndex: 'createdAt',
            render: (date: Date) => formatDate(date)
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
                        onClick={() => setOpenDetail(true)}
                    />
                    <Button
                        icon={<EditOutlined/>} 
                        variant="filled"
                        color="yellow"
                        size="large"
                        onClick={() => setOpenEdit(true)}
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