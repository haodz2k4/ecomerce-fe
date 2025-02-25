import { PlusOutlined, SearchOutlined } from "@ant-design/icons"
import { Button, Flex, Form, Input, InputNumber, Modal, Select, Space, Upload, Typography, Radio } from "antd"
import { CruProps } from "../../../../common/interfaces/cru-props.interface"
import { DiscountPercentage, StatusActiveEnum } from "../../../../constants/app.constant"
import styles from "./Products.module.scss"
import { useState } from "react"
import CategoryModal from "../../components/ui/CategoryModal/CategoryModal"
import { useForm } from "antd/es/form/Form"
import { InputFormatPrice } from "../../../../components/Input/InputFormatPrice"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../../common/types/store.type"
import { createProduct } from "../../../../features/products/products.thunk"
import { CreateProduct } from "../../../../features/products/types/create-product.type"
import { formatVndToNumber } from "../../../../utils/format"
import { showAlert } from "../../../../features/alert/alert.slice"
const {TextArea} = Input
const {Title} = Typography


const Create = (props: CruProps) => {

    const {open, setOpen} = props
    const [form] = useForm();
    const [openCategory, setOpenCategory] = useState<boolean>(false);
    const [thumbnail, setThumbnail] = useState([]);
    const [images, setImages] = useState([]);
    const dispatch = useDispatch<AppDispatch>();
    form.setFieldValue('status',StatusActiveEnum.ACTIVE);

    const handlePreview = async (file: Record<string, any>) => {
        const src = file.url || (file.preview || URL.createObjectURL(file.originFileObj))
        const imgWindow = window.open(src);
        imgWindow?.document.write(`<img src="${src}" width="100%" />`);
    }

    const handleThumbnailChange = ({fileList}: Record<string,any>) => {
        setThumbnail(fileList.slice(-1))
    }

    const handleImagesChange = ({ fileList }: Record<string, any>) => {
        setImages(fileList.slice(-4)); 
    };

    const onFinish = async (values: any) => {
        
        values.price = formatVndToNumber(values.price);
        values.categoryId = '08855b2b-ef30-11ef-9cc3-c84bd64b6215';
        
        try {
            await dispatch(createProduct(values))
            dispatch(showAlert({type: 'success', message: 'Thêm sản phẩm thành công'}))
            setOpen(false)
        } catch{
            dispatch(showAlert({type: 'error',message: 'Thêm sản phẩm thất bại' }))
        }
    }
    return (
        <Modal
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            centered
            width={900}
        >
            <Form 
                form={form} 
                layout="vertical"
                onFinish={onFinish}
            >
                <Title className={styles.title} level={3}>Thêm sản phẩm</Title>
                <Form.Item 
                    label="Tiêu đề" 
                    name="title"
                    rules={[{
                        required: true,
                        message: 'Tiêu đề không được bỏ trống'
                    }]}
                >
                    <Input placeholder="Tiêu đề..." />
                </Form.Item>
                <Form.Item
                    label="Mô tả"
                    name="description"
                >
                    <TextArea rows={4}/>
                </Form.Item>
                <Flex justify="space-between">
                    {/* THUMBNAIL  */}
                    <Form.Item
                        label="Ảnh thu nhỏ"
                        name="thumbnail"
                    >
                        <Upload
                            listType="picture-card"
                            fileList={thumbnail}
                            beforeUpload={()=> false}
                            onPreview={handlePreview}
                            onChange={handleThumbnailChange}
                            maxCount={1}
                        >
                            {thumbnail.length >= 1 ? null : (
                                <button className={styles.btn__upload}>
                                <PlusOutlined />
                                </button>
                            )}
                        </Upload>
                    </Form.Item>
                    {/* IMAGES */}
                    <Form.Item
                        label="Ảnh con"
                        name="images"
                    >
                        <Upload
                            listType="picture-card"
                            fileList={images}
                            beforeUpload={() => false}
                            onPreview={handlePreview}
                            onChange={handleImagesChange}
                            maxCount={4}
                        >
                            {images.length >= 4 ? null : (
                                <button className={styles.btn__upload}>
                                <PlusOutlined />
                                </button>
                            )}
                        </Upload>

                    </Form.Item>
                </Flex>
                    
                <Flex justify="space-between" gap={50}>
                    
                    <Form.Item label="% giảm giá" name="discountPercentage" required>
                        <InputNumber

                            min={DiscountPercentage.MIN} 
                        />
                    </Form.Item>
                    <Form.Item label="Trạng thái" name="status" required>
                        <Radio.Group>
                            <Radio value="active">Hoạt động</Radio>
                            <Radio value="inactive">Không hoạt động</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        label="Danh mục"
                        name="categoryId"
                    >
                        <Button icon={<SearchOutlined />} onClick={() => setOpenCategory(true)}>
                            Danh mục
                        </Button>
                        <Input type="hidden" />
                    </Form.Item>
                    <Form.Item label="Giá tiền" name="price" required>
                            <InputFormatPrice customInput={Input as any}/>
                    </Form.Item>
                    
                    
                </Flex>
                <Button 
                    icon={<PlusOutlined />} 
                    iconPosition="end"
                    className={styles.btn__submit}
                    htmlType="submit"
                    size="large"
                >
                    Thêm
                </Button>
            </Form>
            <CategoryModal open={openCategory} setOpen={setOpenCategory}/>
        </Modal>
    )
}

export default Create