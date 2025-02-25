import { Button, Image, Popconfirm, Select, Space, TableColumnType, Tag } from "antd";
import { StatusActiveEnum } from "../../constants/app.constant";
import { getColorByStatus, transfromStatus } from "../../utils/transform";
import { formatDate, formatPriceToVnd } from "../../utils/format";
import { CloseOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { DESC_CONFIRM_REMOVE, TITLE_CONFIRM_REMOVE } from "../../constants/title.constant";



interface ProductsColumns {
    setOpenDetail: (value: boolean) => void;
    setOpenEdit: (value: boolean) => void;
    currentPage?: number;
    setFilterStatus: (status: StatusActiveEnum) => void;
}

export const productsColumns = (productColumns: ProductsColumns): TableColumnType[] => {

    const {setOpenDetail, setOpenEdit, currentPage = 0, setFilterStatus} = productColumns

    return [
        {
            key: '#',
            title: '#',
            render: (_,record, i) => (i + currentPage + 1),
            rowScope: 'row'
        },
        {
            key: 'title',
            title: 'Tiêu đề',
            dataIndex: 'title'
        },
        {
            key: 'thumbnail',
            title: 'Hình ảnh',
            dataIndex: 'thumbnail',
            render: (thumbnailUrl: string) => 
            <Image 
                width={50} 
                height={50} 
                src={thumbnailUrl}
            />
        },
        {
            key: 'category',
            title: 'Danh mục',
            dataIndex: ['category','title']
        },
        {
            key: 'price',
            title: 'Giá tiền',
            dataIndex: 'price',
            render: (price: number) => formatPriceToVnd(price),
            sorter: true
        },
        {
            key: 'discountPercentage',
            title: '% giảm giá',
            dataIndex: 'discountPercentage',
            render: (value: number) => `${value}%`,
            sorter: true
        },
        {
            key: 'status',
            title: 'Trạng thái',
            dataIndex: 'status',
            filterDropdown: () => (
                <div className="">
                    <Select
                        style={{ width: 150 }}
                        placeholder="Lọc theo trạng thái"
                        allowClear
                        onChange={(val) => setFilterStatus(val)}
                    >
                        <Select.Option value={StatusActiveEnum.ACTIVE}>Hoạt động</Select.Option>
                        <Select.Option value={StatusActiveEnum.INACTIVE}>Không hoạt động</Select.Option>
                    </Select>    
                </div>
            ),
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
            render: (date: Date) => formatDate(date),
            sorter: true
        },
        {
            key: 'updatedAt',
            title: 'Ngày cập nhật',
            dataIndex: 'updatedAt',
            render: (date: Date) => formatDate(date),
            sorter: true
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