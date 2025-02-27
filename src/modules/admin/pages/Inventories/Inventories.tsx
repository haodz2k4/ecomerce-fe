import { Table } from "antd"
import { inventoriesColums } from "../../../../features/inventories/inventories-columns"


const Inventories = () => {
    

    return (
        <Table columns={inventoriesColums()} dataSource={[{}]}/>
    )
}

export default Inventories