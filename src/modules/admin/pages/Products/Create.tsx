import { PlusOutlined, SearchOutlined } from "@ant-design/icons"
import { Button, Flex, Form, Input, InputNumber, Modal, Select, Space, Upload, Typography, Radio } from "antd"
import { CruProps } from "../../../../common/interfaces/cru-props.interface"
import { DiscountPercentage, StatusActiveEnum } from "../../../../constants/app.constant"
import styles from "./Products.module.scss"
import { useState } from "react"
import CategoryModal from "../../components/ui/CategoryModal/CategoryModal"
import { useForm } from "antd/es/form/Form"
const {TextArea} = Input
const {Title} = Typography


const Create = (props: CruProps) => {

    const {open, setOpen, id} = props
    const [form] = useForm();
    const [openCategory, setOpenCategory] = useState<boolean>(false);

    form.setFieldValue('status',StatusActiveEnum.ACTIVE)
    return (
        <Modal
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            centered
        >
            <Form form={form} layout="vertical">
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
                    
                    <Form.Item
                        label="Upload ảnh"
                    >
                        <Upload>
                            <button  
                               
                                className={styles.btn__upload}
                            >
                                <PlusOutlined />
                            </button>
                        </Upload>
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
                </Flex>
                <Form.Item label="Giá tiền" name="price" required>
                        <Input type="number" width={400} min={0}/>
                    </Form.Item>
                    
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