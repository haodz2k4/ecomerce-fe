import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../../common/types/store.type"
import { useEffect } from "react";
import { fetchProducts } from "../../../../features/products/products.thunk";
import ProductsList from "../../components/ui/ProductsList/ProductsList";
import { Button, Col, Input, Pagination, Row, Select, Space } from "antd";
import { InputFormatPrice } from "../../../../components/Input/InputFormatPrice";
import styles from "./Products.module.scss";

const Products = () => {

    const {items} = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchProducts({}))
    },[dispatch])
    //
    return (
        
        <div className="container">
            <Row className={styles.actions}>
                <Col span={6} className={styles.actions__item}>
                    <span>Khoảng giá: </span>
                    <Space className={styles.actions__inner}>
                        <InputFormatPrice  
                            customInput={Input} 
                            className={styles.input__range__price}
                            placeholder="Từ..."
                        />
                        <InputFormatPrice 
                            customInput={Input}
                            className={styles.input__range__price}
                            placeholder="Tới..."
                        />
                    </Space>
                </Col>
                <Col span={6} className={styles.actions__item}>
                    <span>Sắp xếp</span>
                    <Select className={styles.select__sort}>
                        <Select.Option></Select.Option>
                    </Select>
                </Col>
                <Col span={6} className={styles.actions__item}>
                    <span>Khác</span>
                    <Space>
                        <Select className={styles.select__limit}>
                            <Select.Option value={5}>
                                Giới hạn 5
                            </Select.Option>
                        </Select>
                        <Button>
                            Nổi bậc
                        </Button>
                    </Space>
                </Col>
            </Row>
            <ProductsList products={items} />
            <Pagination 
                total={50}
                align="center"
            />
        </div>
    )
}

export default Products