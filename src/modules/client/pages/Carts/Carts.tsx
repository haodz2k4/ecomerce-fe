import { Button, Flex, Image, InputNumber, Popconfirm, Space, Table, TableColumnProps,Input, TableProps, Typography, Form, Radio, Modal } from "antd";
import styles from "./Carts.module.scss";
import { camulatorDiscountPrice } from "../../../../utils/camulator";
import { AlertOutlined, CheckOutlined, CloseCircleOutlined, CloseOutlined, CreditCardOutlined, ExclamationCircleFilled, LoadingOutlined, SnippetsOutlined } from "@ant-design/icons";
import { formatPriceToVnd } from "../../../../utils/format";
import { InputFormatPrice } from "../../../../components/Input/InputFormatPrice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../common/types/store.type";
import React, { useEffect, useState } from "react";
import { clearCart, fetchCart, removeCart, updateCart } from "../../../../features/carts/carts.thunk";
import { showAlert } from "../../../../features/alert/alert.slice";
import { showNotification } from "../../../../features/notifications/notification.slice";
import { CartItems } from "../../../../features/carts/interfaces/cart-items.interface";
import { CreateOrderItem } from "../../../../features/orders/interfaces/create-order-item.interface";
import ModalConfirm from "../../../../components/ModalConfirm/ModalConfirm";

const {Title} = Typography;
const {Search} = Input;
const {confirm} = Modal;
const Carts = () => {

    const [openModalConfirm, setOpenModalConfirm] = useState<boolean>(false);
    const [checkOutItems,setCheckOutItems] = useState<CreateOrderItem[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [keyword, setKeyword] = useState<string>();
    const {cart} = useSelector((state: RootState) => state.carts);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchCart({
            keyword
        }))
    },[dispatch, keyword])   

    const handleUpdateCart = async (productId: string, quantity: number) => {
        try {
            await dispatch(updateCart({
                productId,
                quantity
            })).unwrap()
            dispatch(showAlert({
                type: 'success',
                message: 'Cập nhật số lượng thành công'
            }))
        } catch (error) {
            console.log(error)
            dispatch(showAlert({
                type: 'error',
                message: 'Cập nhật số lượng thất bại'
            }))
        }
    }

    const handleconfirmRemove = async (productId: string) => {
        try {
            await dispatch(removeCart(productId)).unwrap()
            dispatch(showAlert({
                type: 'success',
                message: 'Loại bỏ sản phẩm khỏi giỏ hàng thành công'
            }))
        } catch {
            dispatch(showAlert({
                type: 'error',
                message: 'Loại bỏ sản phẩm khỏi giỏ hàng thất bại'
            }))
        }
    }


    const handleConfirmClear = async () => {
        try {
            await dispatch(clearCart()).unwrap()
            dispatch(showNotification({
                type: 'success',
                message: 'Loại bỏ toàn bộ thành công'
            }))
        } catch{
            dispatch(showNotification({
                type: 'error',
                message: 'Loại bỏ toàn bộ thất bại'
            }))
        }
    }
    const columns: TableColumnProps<CartItems>[] = [
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
            dataIndex: ['product','thumbnail'],
            render: (val) => <Image 
                                src={val}
                                width={50}
                                height={50}
                                className={styles.carts__img}
                              />
        },
        {
            key: 'price',
            title: 'Đơn giá',
            dataIndex: ['product','price'],
            render: (val, record) => formatPriceToVnd(camulatorDiscountPrice(val, record.product.discountPercentage)),
            filterDropdown: () => (
                <Space style={{padding: '5px'}}>
                    <InputFormatPrice customInput={Input as any}/>
                    <InputFormatPrice customInput={Input as any} />
                </Space>
            ),
            sorter: true
        },
        {
            key: 'totalPrice',
            title: 'Tổng tiền',
            render: (_, record) => formatPriceToVnd(record.quantity * camulatorDiscountPrice(record.product.price, record.product.discountPercentage))
        },
        {
            key: 'quantity',
            title: 'Số lượng',
            dataIndex: 'quantity',
            render: (val, record) => <InputNumber 
                                defaultValue={val}
                                min={1}
                                max={100}
                                onChange={(val) => handleUpdateCart(record.product.id, parseInt(val))}
                              />,
            sorter: true
        },
        {
            key: 'actions',
            title: 'Thao tác',
            render: (_, record) =>   <Popconfirm
                                title="Bạn có chắc muốn xóa sản phẩm này ko ?"
                                onConfirm={() => handleconfirmRemove(record.product.id)}
                            >
                                <Button  
                                    icon={<CloseOutlined />} 
                                    color="primary"
                                    variant="text"
                                />
                            </Popconfirm>
        }
    ]
 
    const rowSelection: TableProps<CartItems>['rowSelection'] = {
        onChange: (_, selectedRows: CartItems[]) => {
            const total = selectedRows.reduce((sum, item) => {
                return sum + item.quantity * camulatorDiscountPrice(item.product.price, item.product.discountPercentage);
            }, 0);
            const orderItems = selectedRows.map((item) => ({
                productId: item.product.id,
                quantity: item.quantity
            }))
            setCheckOutItems(orderItems);
            setTotalPrice(total);
        }
    };
    
    return (
        <div className="container">
            <div className={styles.carts}>
                <Space 
                    className={styles.carts__actions}
                    size="large"
                >
                    <Search 
                        placeholder="Nhập thông tin tìm kiếm..." 
                        onChange={(e) => setKeyword(e.target.value)}
                    />
                    <Popconfirm
                        title="Xóa toàn bộ"
                        description="Bạn có chắc muốn xóa toàn bộ sản phẩm trong giỏ hàng"
                        onConfirm={() => handleConfirmClear()}
                    >
                        <Button
                            icon={<CloseCircleOutlined />}
                            iconPosition="end"
                        >
                            Xóa toàn bộ
                        </Button>
                    </Popconfirm>
                </Space>
                <Flex justify="space-between" className={styles.carts__inner}>
                    <div className={styles.carts__list}>
                        <Table 
                            rowKey={(record) => record.product.id}
                            rowSelection={{
                                type: 'checkbox',
                                ...rowSelection
                            }}
                            columns={columns}
                            dataSource={cart?.cart_items.items}
                        />
                    </div>
                    <div className={styles.carts__checkout}>
                        <Form layout="vertical">
                            <Title level={3} className={styles.checkout__title}>Thông tin thanh toán</Title>
                            <Form.Item label="Phương thức thanh toán" required>
                                <Radio.Group>
                                    <Radio value="cash"><SnippetsOutlined /> Tiền mặt</Radio>
                                    <Radio value="credit-card"><CreditCardOutlined /> Qua VNPAY  </Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item label="Nhập số điện thoại" required>
                                <Input placeholder="Số điện thoại..."/>
                            </Form.Item>
                            <Form.Item label="Nhập địa chỉ" required>
                                <Input placeholder="Địa chỉ..."/>
                            </Form.Item>
                            <Form.Item label="">
                                <Flex justify="space-between">
                                    <span>Tổng tiền: {formatPriceToVnd(totalPrice)}</span>
                                    <span>SL sản phẩm: {checkOutItems.length}</span>
                                </Flex>
                            </Form.Item>
                            <Button 
                                className={styles.checkout__btn}
                                icon={<LoadingOutlined />}
                                iconPosition="end"
                                onClick={() => {
                                    if(checkOutItems.length === 0) {
                                        dispatch(showAlert({
                                            type: 'error',
                                            message: 'Vui lòng chọn 1 sản phẩm'
                                        }))
                                    } else {
                                        setOpenModalConfirm(true)
                                    }
                                    
                                }}
                            >
                                Thanh toán
                            </Button>
                        </Form>
                    </div>
                </Flex>
            </div>
            <ModalConfirm 
                open={openModalConfirm} 
                setOpen={setOpenModalConfirm} 
                title="Tiến hành thanh toán"
                description="Bạn có chăc muốn thanh toán không"

            />
        </div>
    )
}

export default Carts 