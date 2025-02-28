import { Table } from "antd"
import { categoriesColumns } from "../../../../features/categories/categories_columns"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../../common/types/store.type"
import { useEffect } from "react"
import { fetchCategories } from "../../../../features/categories/categories.thunk"



const Categories = () => {
    
    const {items} = useSelector((state: RootState) => state.categories);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchCategories({}))
    },[dispatch])
    return (
        <Table 
            columns={categoriesColumns()} 
            dataSource={items}
        />
    )
}

export default Categories