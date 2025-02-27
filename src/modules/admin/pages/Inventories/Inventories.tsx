import { Col, Row, Table, Input, Button } from "antd"
import { inventoriesColums } from "../../../../features/inventories/inventories-columns"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../../common/types/store.type"
import { useEffect, useState } from "react"
import { fetchInventories } from "../../../../features/inventories/inventories.thunk"
import { PlusOutlined } from "@ant-design/icons"
import Create from "./Create"
import styles from "./Inventories.module.scss"

const {Search} = Input

const Inventories = () => {
    
    const [openCreate, setOpenCreate] = useState<boolean>(false);
    const {items} = useSelector((state: RootState) => state.inventories);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchInventories({}))
    },[dispatch])
    return (
        <>  
            <Row gutter={16} className={styles.actions}>
                <Col span={6}>
                    <Search />
                </Col>
                <Col span={6}>
                    <Button 
                        iconPosition="end" 
                        icon={<PlusOutlined />}
                        onClick={() => setOpenCreate(true)}
                    > 
                    Thêm
                    </Button>
                </Col>
            </Row>
            <Table columns={inventoriesColums()} dataSource={items}/>
            <Create open={openCreate} setOpen={setOpenCreate}/>
        </>
    )
}

export default Inventories