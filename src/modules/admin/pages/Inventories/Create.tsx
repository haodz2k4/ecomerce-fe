import { Modal, Form, Input, Button, Space, Flex } from "antd"
import { CruProps } from "../../../../common/interfaces/cru-props.interface"
import Title from "antd/es/typography/Title"
import styles from "./Inventories.module.scss"
import { ProductOutlined } from "@ant-design/icons"
import { useForm } from "antd/es/form/Form"

const Create = (props: CruProps) => {
    const {open, setOpen} =props
    const [form] = useForm();
    return (
        <Modal
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
        >
            <Form 
                layout="vertical"
                form={form}
            >
                <Title level={2} className={styles.create__title}>Thêm</Title>
                <Form.Item label="Nhà cung cấp">
                    <Input placeholder="Nhà cung cấp..."/>
                </Form.Item>
                <Form.Item label="Địa chỉ">
                    <Input placeholder="Địa chỉ..."/>
                </Form.Item>
                <Flex justify="space-between">
                    <Form.Item label="Số lượng tồn">
                        <Input type="number" placeholder="Số lượng tồn..."/>
                    </Form.Item>
                    <Form.Item label="Sản phẩm">
                        <Button icon={<ProductOutlined />}>Chọn sản phẩm</Button>
                        <Input type="hidden"/>
                    </Form.Item>
                </Flex>
                <Button 
                    htmlType="submit" 
                    className={styles.create__submit}
                >
                    Thêm
                </Button>
            </Form>
        </Modal>
    )
}

export default Create