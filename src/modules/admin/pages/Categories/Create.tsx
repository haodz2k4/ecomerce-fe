import { Button, Form, Input, Modal, Radio, Upload } from "antd"
import { CruProps } from "../../../../common/interfaces/cru-props.interface"
import Title from "antd/es/typography/Title";
import { StatusActiveEnum } from "../../../../constants/app.constant";
import { useForm } from "antd/es/form/Form";
import styles from "./Categories.module.scss";
import { PlusOutlined } from "@ant-design/icons";
const {TextArea} = Input

const Create = (cruProps: CruProps) => {
    const {open, setOpen} = cruProps;
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
                <Title level={2} className={styles.create__title}>Thêm danh mục</Title>
                <Form.Item label="Tiêu đề" name="title" required>
                    <Input placeholder="Tiêu đề..." />
                </Form.Item>
                <Form.Item label="Hình ảnh">
                    <Upload>
                        <Button 
                            icon={<PlusOutlined />}
                            className={styles.upload__btn}
                        >
                            Upload
                        </Button>
                    </Upload>
                </Form.Item>
                <Form.Item label="Mô tả">
                    <TextArea placeholder="Mô tả..." rows={4}/>
                </Form.Item>
                <Form.Item label="Trạng thái">
                    <Radio.Group>
                        <Radio value={StatusActiveEnum.ACTIVE}>Hoạt động</Radio>
                        <Radio value={StatusActiveEnum.INACTIVE}>Không hoạt động</Radio>
                    </Radio.Group>
                </Form.Item>
                <Button className={styles.btn__create__submit}>Thêm</Button>
            </Form>

        </Modal>
    )
}

export default Create