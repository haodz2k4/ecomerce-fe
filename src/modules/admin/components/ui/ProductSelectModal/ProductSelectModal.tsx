import { Image, Modal, Radio, Space, Table, TableColumnProps, Tag } from "antd";
import { camulatorDiscountPrice } from "../../../../../utils/camulator";
import { getColorByStatus, transfromStatus } from "../../../../../utils/transform";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../../common/types/store.type";
import { useEffect } from "react";
import { fetchProducts } from "../../../../../features/products/products.thunk";
import { formatPriceToVnd } from "../../../../../utils/format";
import { showNotification } from "../../../../../features/notifications/notification.slice";


interface ProductSelectModalProps {
    open: boolean;
    setOpen: (val: boolean) => void;
    setProductId: (id: string) => void;
    productId: string;
    productTitle: string;
    setProductTitle: (val: string) => void;
}
const ProductSelectModal = (props: ProductSelectModalProps) => {
    const {open, setOpen, setProductId, productId, productTitle, setProductTitle} = props
    const {items} = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchProducts({}))
    },[dispatch]);

    const onOk = () => {
        if(!productId) {
            dispatch(showNotification({type: 'error',message: 'Vui lòng chọn 1 sản phẩm'}))
        }else {
            setOpen(false)
        }
    }
    const columns: TableColumnProps[] = [
        {
            key: 'checkbox',
            title: 'Chọn',
            dataIndex: 'id',
            render: (val, record) => 
                <Radio
                    onClick={() => {
                        
                        setProductId(val)
                        setProductTitle(record.title)
                        
                    }} 
                    checked={val === productId } 
                    
                />
        },
        {
            key: '#',
            title: '#',
            render: (_, record, index) => index + 1 
        },
        {
            key: 'title',
            dataIndex: 'title',
            title: 'Tiêu đề'
        },
        {
            key: 'category',
            dataIndex: ['category','title'],
            title: 'Danh mục'
        },
        {
            key: 'thumbnail',
            dataIndex: 'thumbnail',
            title: 'Ảnh',
            render: (val) => (
                <Image 
                    width={50} 
                    height={50} 
                    src={val} 
                />
            )
        },
        {
            key: 'price',
            title: 'Giá tiền',
            dataIndex: 'price',
            render: (val, record) => formatPriceToVnd(camulatorDiscountPrice(val, record.discountPercentage))
        },
        {
            key: 'status',
            dataIndex: 'status',
            title: 'Trạng thái',
            render: (val) => <Tag color={getColorByStatus(val)}>{transfromStatus(val)}</Tag>
        }
    ]
    return (
        <Modal
            open={open}
            onOk={onOk}
            onClose={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            width={1000}
        >
            <Table 
                columns={columns}
                dataSource={items}
            />
        </Modal>
    )
}

export default ProductSelectModal;
