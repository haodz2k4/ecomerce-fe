import { Button, Flex, Image, InputNumber, Popconfirm, Space, Table, TableColumnProps,Input, Col } from "antd";
import styles from "./Carts.module.scss";
import { camulatorDiscountPrice } from "../../../../../utils/camulator";
import { Product } from "../../../../../features/products/interfaces/product.interface";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { formatPriceToVnd } from "../../../../../utils/format";
import { InputFormatPrice } from "../../../../../components/Input/InputFormatPrice";

const {Search} = Input;
const Carts = () => {


    const columns: TableColumnProps<Product>[] = [
        {
            key: '#',
            title: '#',
            render: (_, record, index) => index + 1 
        },
        {
            key: 'title',
            title: 'Tên sản phẩm',
            dataIndex: ['product','title']
        },
        {
            key: 'thumbnail',
            title: 'Hình ảnh',
            dataIndex: 'thumbnail',
            render: (val) => <Image 
                                src={val}
                                width={50}
                                height={50}
                                className={styles.carts__img}
                              />
        },
        {
            key: 'price',
            title: 'Giá tiền',
            dataIndex: 'price',
            render: (val, record) => camulatorDiscountPrice(val, record.discountPercentage),
            filterDropdown: () => (
                <Space style={{padding: '5px'}}>
                    <InputFormatPrice customInput={Input as any}/>
                    <InputFormatPrice customInput={Input as any} />
                </Space>
            ),
            sorter: true
        },
        {
            key: 'quantity',
            title: 'Số lượng',
            dataIndex: 'quantity',
            render: (val) => <InputNumber 
                                value={val} 
                                min={1}
                                max={100}
                              />,
            sorter: true
        },
        {
            key: 'actions',
            title: 'Thao tác',
            render: () =>   <Popconfirm
                                title="Bạn có chắc muốn xóa sản phẩm này ko ?"
                            >
                                <Button  
                                    icon={<CloseOutlined />} 
                                    color="primary"
                                    variant="text"
                                />
                            </Popconfirm>
        }
    ]
 
    return (
        <div className="container">
            <div className={styles.carts}>
                <Space className={styles.carts__actions}>
                    <Search placeholder="Nhập thông tin tìm kiếm..." />
                    

                </Space>
                <div className={styles.carts__items}>
                    <Table 
                        rowSelection={{
                            type: 'checkbox'
                        }}
                        columns={columns}
                        dataSource={[{}]}
                    />
                </div>
                <Flex justify="space-between">
                    <p 
                        className={styles.title__total}
                    >
                        Tổng tiền: {formatPriceToVnd(100000)}
                    </p>
                    <Button 
                        icon={<CheckOutlined />} 
                        iconPosition="end"
                        color="pink"
                        className={styles.btn__checkout}
                    >
                        Thanh toán
                    </Button>
                </Flex>
            </div>
            
        </div>
    )
}

export default Carts 