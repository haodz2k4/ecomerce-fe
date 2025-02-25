import { ArrowDownOutlined, FileExcelOutlined, PlusCircleOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Col, Row, Space, Table, Input, Select, DatePicker, Slider } from "antd"
import Create from "./Create";
import { useEffect, useState } from "react";
import { productsColumns } from "../../../../features/products/products_columns";
import Detail from "./Detail";
import Edit from "./Edit";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../common/types/store.type";
import { fetchProducts } from "../../../../features/products/products.thunk";
import SelectLimit from "../../components/ui/SelectLimit/SelectLimit";
 
const {RangePicker} = DatePicker
const {Search} = Input


const Products = () => {

    const [openCreate, setOpenCreate] = useState<boolean>(false);
    const [openDetail, setOpenDetail] = useState<boolean>(false);
    const [openEdit, setOpenEdit] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [keyword, setKeyword] = useState<string>();
    const {items, loading, pagination} = useSelector((state: RootState) => state.products);

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchProducts({
            limit,
            page,
            keyword
        }))
    },[dispatch, page, limit, keyword])

    const onChangePagination = (page: number) => {
        setPage(page)
    }
    return (        
        <>
            <Row justify='space-between' gutter={[30,16]}>
                <Col sm={12} lg={8}>
                    <Search 
                        placeholder="Tìm kiếm..."
                        onChange={(e) => setKeyword(e.target.value)} 
                    />
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
                        <SelectLimit limit={limit} setLimit={setLimit}/>
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
                    setOpenDetail,
                    setOpenEdit,
                    currentPage: pagination?.skip
                })} 
                dataSource={items}
                pagination={
                    {
                        pageSize: pagination?.limit,
                        current: pagination?.page,
                        total: pagination?.total,
                        onChange: onChangePagination
                    }
                }
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
            <Edit
                open={openEdit}
                setOpen={setOpenEdit}
                id=""
            />
        </>
    )
}

export default Products