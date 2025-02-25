import { ArrowDownOutlined, FileExcelOutlined, PlusCircleOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Col, Row, Space, Table, Input, Select, DatePicker, Slider } from "antd"
import Create from "./Create";
import { useState } from "react";
import { productsColumns } from "../../../../features/products/products_columns";
import Detail from "./Detail";
 
const {RangePicker} = DatePicker
const {Search} = Input


const Products = () => {

    const [openCreate, setOpenCreate] = useState<boolean>(false);
    const [openDetail, setOpenDetail] = useState<boolean>(false);

    

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
            <Table 
                columns={productsColumns({
                    setOpenDetail
                })} 
                dataSource={[{}]}
            />
            {/* MODAL  */}
            <Create 
                open={openCreate} 
                setOpen={setOpenCreate}
                id="" 
            />
            <Detail
                open={openDetail}
                setOpen={setOpenDetail} 
                id=""
            />
        </>
    )
}

export default Products