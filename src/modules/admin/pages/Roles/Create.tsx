import { Button, Form, Input, List, Modal } from "antd"
import { CruProps } from "../../../../common/interfaces/cru-props.interface"
import TextArea from "antd/es/input/TextArea";
import Title from "antd/es/typography/Title";
import styles from "./Roles.module.scss"



const Create = (cruProps: CruProps) => {
    const {open, setOpen} = cruProps;
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            onCancel={() => setOpen(false)}
        >
            <Form
                layout="vertical"
            >   
                <Title  className={styles.create__title} level={2}>Thêm</Title>
                <Form.Item label="Tiêu đề" required name="title">
                    <Input placeholder="Tiêu đề..." />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item label="Các quyền">
                    <List
                        itemLayout="horizontal"
                        renderItem={() => (
                            <List.Item>
                                <List.Item.Meta
                                title={<a href="https://ant.design">{"Quản trị viên"}</a>}
                                />
                            </List.Item>
                        )} 
                    />
                </Form.Item>
                <Button className={styles.btn__create__submit}>Thêm</Button>
            </Form>
        </Modal>
    )
}

export default Create