import { Descriptions, DescriptionsProps, Modal } from "antd";
import { CruProps } from "../../../../common/interfaces/cru-props.interface"


const Detail = (props: CruProps) => {
    const {open, setOpen, id} = props;

    const items: DescriptionsProps['items'] = [
        {
            key: 'id',
            label: 'Id',
            children: ''
        },
        {
            key: 'title',
            label: 'Tiêu đề',
            children: ''
        },
        {
            key: 'category',
            label: 'danh mục',
            children: ''
        },
        {
            key: 'categoryId',
            label: 'Id danh mục',
            children: ''
        },
        {
            key: 'price',
            label: 'Giá tiền',
            children: ''
        },
        {
            key: 'discountPercentage',
            label: '% giảm giá',
            children: ''
        },
        {
            key: 'status',
            label: 'Trạng thái',
            children: ''
        },
        {
            key: 'thumbnail',
            label: 'Hình thu nhỏ',
            children: ''
        },
        {
            key: 'images',
            label: 'Hình ảnh',
            children: ''
        },
        {
            key: 'createdAt',
            label: 'Ngày tạo',
            children: ''
        },
        {
            key: 'quantity',
            label: 'Số lượng',
            children: ''
        },
        {
            key: 'totalOrders',
            label: 'Tổng số đơn hàng',
            children: ''
        },
        {
            key: 'updatedAt',
            label: 'Ngày cập nhật',
            children: ''
        },
        {
            key: 'slug',
            label: 'slug',
            children: ''
        }
    ]
    return (
        <Modal 
            width={1000}
            open={open} 
            onCancel={() => setOpen(false)} 
            onOk={() => setOpen(false)}
        >
            <Descriptions 
                title="THÔNG TIN SẢN PHẨM" 
                items={items}
                bordered
            />
        </Modal>
    )
}

export default Detail