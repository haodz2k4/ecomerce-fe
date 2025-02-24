import { PlusOutlined, SearchOutlined } from "@ant-design/icons"
import { Button, Flex, Form, Input, InputNumber, Modal, Select, Space, Upload, Typography, Radio } from "antd"
import { CruProps } from "../../../../common/interfaces/cru-props.interface"
import { DiscountPercentage } from "../../../../constants/app.constant"
import styles from "./Products.module.scss"
const {TextArea} = Input
const {Title} = Typography


const Create = (props: CruProps) => {

    const {openCreate, setOpenCreate, id} = props
    return (
        <Modal
            open={openCreate}
            onOk={() => setOpenCreate(false)}
            onCancel={() => setOpenCreate(false)}
            
            centered
        >
            <Form layout="vertical">
                <Title level={3}>Thêm sản phẩm</Title>
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
                    >
                        <Button icon={<SearchOutlined />}>
                            Danh mục
                        </Button>
                    </Form.Item>
                </Flex>
                <Form.Item label="Giá tiền">
                        <Input type="number" width={400} min={0}/>
                    </Form.Item>
                    
                <Flex justify="space-between" gap={50}>
                    
                    <Form.Item label="% giảm giá">
                        <InputNumber

                            min={DiscountPercentage.MIN} 
                            defaultValue={0}
                        />
                    </Form.Item>
                    <Form.Item label="Trạng thái">
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
                >
                    Thêm
                </Button>
            </Form>
        </Modal>
    )
}

export default Create