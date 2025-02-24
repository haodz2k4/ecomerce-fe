import { ArrowDownOutlined, CloseOutlined, EditOutlined, EyeOutlined, FileExcelOutlined, PlusCircleOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Col, Row, Space, Table, TableColumnType, Tag, Input, Select, DatePicker, Slider } from "antd"
import { StatusActiveEnum } from "../../../../constants/app.constant"
import {getColorByStatus, transfromStatus} from "../../../../utils/transform";
import { formatDate, formatPriceToVnd } from "../../../../utils/format";
import Create from "./Create";
import { useState } from "react";
 
const {RangePicker} = DatePicker
const {Search} = Input


const Products = () => {

    const [openCreate, setOpenCreate] = useState<boolean>(false);
    

    const products_columns: TableColumnType[] = [
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
                    />
                    <Button
                        icon={<EditOutlined/>} 
                        variant="filled"
                        color="yellow"
                        size="large"
                    />
                    <Button
                        icon={<CloseOutlined color="red" />} 
                        variant="filled"
                        color="red"
                        size="large"
                    />
                </Space>
            )
        }
    ]

    return (
        <>
            <Row justify='space-between' gutter={[30,16]}>
                <Col sm={12} lg={8}>
                    <Search placeholder="Tìm kiếm..." />
                </Col>
                <Col sm={12} lg={8}>
                    <Space>
                        <Button icon={<PlusOutlined />} onClick={() => setOpenCreate(true)}>Thêm</Button>
                        <Button icon={<PlusCircleOutlined />}>Thêm SLL</Button>
                        <Button icon={<FileExcelOutlined />}>Xuất</Button>
                    </Space>
                </Col >
                <Col sm={12} lg={8}>
                    <Space>
                        <Select value={10}>
                            <Select.Option value={10}>Giới hạn 10</Select.Option>
                        </Select>
                        <Select value='createdAt-desc'>
                            <Select.Option value="createdAt-desc">Ngày tạo <ArrowDownOutlined /> </Select.Option>
                        </Select>
                        <RangePicker />
                    </Space>
                </Col>

                <Col sm={12} lg={8}>
                    <Slider range defaultValue={[0, 100]}/>
                </Col>
                <Col sm={12} lg={8}>
                    
                </Col>
            </Row>
            <Table columns={products_columns} dataSource={[{}]}/>
            {/* MODAL  */}
            <Create 
                open={openCreate} 
                setOpen={setOpenCreate}
                id="" 
            />
        </>
    )
}

export default Products