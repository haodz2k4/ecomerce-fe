import { ArrowDownOutlined, FileExcelOutlined, PlusCircleOutlined, PlusOutlined } from "@ant-design/icons"
import { Button, Col, Row, Space, Table, Input, Select, DatePicker, Slider, TableProps, Badge } from "antd"
import Create from "./Create";
import { useEffect, useState } from "react";
import { productsColumns } from "../../../../features/products/products_columns";
import Detail from "./Detail";
import Edit from "./Edit";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../common/types/store.type";
import { fetchProducts, updateProduct } from "../../../../features/products/products.thunk";
import SelectLimit from "../../components/ui/SelectLimit/SelectLimit";
import { SortOrder, StatusActiveEnum } from "../../../../constants/app.constant";
import { SorterResult } from "antd/es/table/interface";
import styles from "./Products.module.scss"
import { transformReverseStatus } from "../../../../utils/transform";

const {RangePicker} = DatePicker
const {Search} = Input


const Products = () => {

    const [openCreate, setOpenCreate] = useState<boolean>(false);
    const [openDetail, setOpenDetail] = useState<boolean>(false);
    const [openEdit, setOpenEdit] = useState<boolean>(false)
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [keyword, setKeyword] = useState<string>();
    const [sortBy, setSortBy] = useState<string>();
    const [sortOrder, setSortOrder] = useState<SortOrder>();
    const [filterStatus, setFilterStatus] = useState<StatusActiveEnum>();
    const {items, loading, pagination} = useSelector((state: RootState) => state.products);
    const [id, setId] = useState<string>();

    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchProducts({
            limit,
            page,
            keyword,
            status: filterStatus,
            sortBy,
            sortOrder
        }))
    },[
        dispatch, 
        page, 
        limit, 
        keyword, 
        filterStatus, 
        sortBy, 
        sortOrder
    ])

    const onChangePagination = (page: number) => {
        setPage(page)
    }

    const handleTableChange = (pagination, filters, sorter: SorterResult) => {
        setSortBy(sorter.field as string);
        setSortOrder(sorter.order === "ascend" ? SortOrder.ASC : SortOrder.DESC)
    }

    const handleChangeStatus = async (id: string, status: StatusActiveEnum) => {
        await dispatch(updateProduct({id, data: {status: transformReverseStatus(status)}}));
    }
    return (        
        <>
            <Row justify='space-between' className={styles.tool} gutter={[30,16]}>
                <Col sm={12} lg={6}>
                    <Search 
                        placeholder="Tìm kiếm..."
                        onChange={(e) => setKeyword(e.target.value)} 
                    />
                </Col>
                <Col sm={12} lg={10}>
                    <Space>
                        <Button icon={<PlusOutlined />} onClick={() => setOpenCreate(true)}>Thêm</Button>
                        <Button icon={<PlusCircleOutlined />}>Thêm SLL</Button>
                        <Button icon={<FileExcelOutlined />}>Xuất</Button>
                        <SelectLimit limit={limit} setLimit={setLimit}/>
                    </Space>
                </Col >
                <Col sm={12} lg={8}>
                    <Space size="large">
                        <Badge status="default" text={<>Tổng <strong>10</strong></>}/>
                        <Badge status="success" text={<>Hoạt động <strong>10</strong></>}/>
                        <Badge status="error" text={<>Không hoạt động <strong>10</strong></>}/>
                        
                    </Space>
                </Col>
            </Row>
            <Table 
                onChange={handleTableChange}
                columns={productsColumns({
                    setOpenDetail,
                    setOpenEdit,
                    currentPage: pagination?.skip,
                    setFilterStatus,
                    setId,
                    handleChangeStatus
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
                id={id}
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