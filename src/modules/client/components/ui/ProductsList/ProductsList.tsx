import { Col, Row, Space, Typography, Button, Rate } from "antd";
import { Product } from "../../../../../features/products/interfaces/product.interface";
import styles from "./ProductList.module.scss";
import { formatPriceToVnd } from "../../../../../utils/format";
import { ShoppingCartOutlined, ShoppingOutlined, StarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { camulatorDiscountPrice } from "../../../../../utils/camulator";

const { Title } = Typography;

interface ProductsListProps {
    products: Product[];
    title: string;
}

const ProductsList = (props: ProductsListProps) => {
    const { products = [], title } = props;
    return (
        <div className={"container " + styles.products  }>
            <Title className={styles.title}>{title}</Title>
            <Row gutter={[16, 16]}>
                
                {products.map((item) => (
                    <Col span={6} key={item.id}>
                        <Link to={`products/${item.slug}`} className={styles.products__card}>
                            <img 
                                src={item.thumbnail} 
                                className={styles.products__thumbnail} 
                                width={255}
                                height={250}
                                alt={item.title}
                            />
                            <div className={styles.products__title}>{item.title}</div>
                            <div className={styles.products__content}>
                                <p className={styles.products__reviews}>({4.3}) <StarOutlined /></p>
                                <Space className={styles.products__price}>
                                    <span className={styles.products__discountedPrice}>{formatPriceToVnd(camulatorDiscountPrice(item.price, item.discountPercentage))}</span>
                                    <span className={styles.products__originalPrice}>{formatPriceToVnd(item.price)}</span>
                                </Space>
                                <p>Đã bán: {10}</p>
                                <p>Còn: {item.inventories.quantity}</p>
                            </div>
                            <div className={styles.products__buttons}>
                                <Button 
                                    icon={<ShoppingOutlined />} 
                                    iconPosition="end"
                                    className={styles.buyNow}
                                >
                                    Mua
                                </Button>
                                <Button 
                                    icon={<ShoppingCartOutlined />} 
                                    iconPosition="end"
                                    variant="solid"
                                    className={styles.addToCart}
                                >
                                    Thêm
                                </Button>
                            </div>
                        </Link>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ProductsList;