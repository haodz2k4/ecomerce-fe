import { EditOutlined, PlusOutlined, SearchOutlined } from "@ant-design/icons"
import { Button, Flex, Form, Input, InputNumber, Modal, Upload, Typography, Radio} from "antd"
import { CruProps } from "../../../../common/interfaces/cru-props.interface"
import { DiscountPercentage } from "../../../../constants/app.constant"
import styles from "./Products.module.scss"
import { useEffect, useState } from "react"
import CategoryModal from "../../components/ui/CategoryModal/CategoryModal"
import { useForm } from "antd/es/form/Form"
import { InputFormatPrice } from "../../../../components/Input/InputFormatPrice"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../../common/types/store.type"
import { fetchProductById, updateProduct } from "../../../../features/products/products.thunk"
const {TextArea} = Input
const {Title} = Typography


const Edit = (props: CruProps) => {

    const {open, setOpen, id = ''} = props
    const [form] = useForm();
    const [openCategory, setOpenCategory] = useState<boolean>(false);
    const [thumbnail, setThumbnail] = useState([]);
    const [images, setImages] = useState([]);

    const {item, error} = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch<AppDispatch>();
    const onFinish = async (values: Record<string, unknown>) => {
        await dispatch(updateProduct({id, data: values})).unwrap()
    }
    useEffect(() => {
        dispatch(fetchProductById(id))
    },[dispatch, id])
    

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
    

    form.setFieldsValue({
        title: item?.title,
        description: item?.description,
        discountPercentage: item?.discountPercentage,
        status: item?.status,
        categoryId: item?.category,
        price: item?.price
    })
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
                <Title className={styles.title} level={2}>Sửa sản phẩm</Title>
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
                            defaultValue={0}
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
                        icon={<EditOutlined />} 
                        iconPosition="end"
                        className={styles.btn__submit}
                        htmlType="submit"
                        size="large"
                    >
                        Sửa
                    </Button>
            </Form>
            <CategoryModal open={openCategory} setOpen={setOpenCategory}/>
        </Modal>
    )
}

export default Edit