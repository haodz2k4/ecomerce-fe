import { Button, Checkbox, Form, Input, List, Modal } from "antd"
import { CruProps } from "../../../../common/interfaces/cru-props.interface"
import TextArea from "antd/es/input/TextArea";
import Title from "antd/es/typography/Title";
import styles from "./Roles.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../common/types/store.type";
import { useEffect, useState } from "react";
import { fetchPermissions } from "../../../../features/permissions/permissions.thunk";
import { Permission } from "../../../../features/permissions/interfaces/Permission.interface";
import { CreateRole } from "../../../../features/roles/interfaces/create-role.interface";
import { createRole } from "../../../../features/roles/roles.thunk";


const Create = (cruProps: CruProps) => {
    const {open, setOpen} = cruProps;
    const {items} = useSelector((state: RootState) => state.permissions);
    const [ids, setIds] = useState<string[]>([]);
    const [count, setCount] = useState<number>(0);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(fetchPermissions({}))
    },[dispatch])

    const onFinish = async (data: CreateRole) => {
        await dispatch(createRole(data)).unwrap();
    }
    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            centered
        >
            <Form
                layout="vertical"
                onFinish={onFinish}
            >   
                <Title  className={styles.create__title} level={2}>Thêm</Title>
                <Form.Item label="Tiêu đề" required name="title">
                    <Input placeholder="Tiêu đề..." />
                </Form.Item>
                <Form.Item label="Mô tả">
                    <TextArea rows={4} />
                </Form.Item>
                <Form.Item label={`Các quyền (${count})`}>
                    <div className={styles.list__role}>
                        <List
                            itemLayout="horizontal"
                            dataSource={items}
                            renderItem={(item: Permission) => (
                                <List.Item>
                                    <Checkbox 
                                            className={styles.permissions__checkbox}
                                            onClick={(e) => {
                                                setIds([...ids, ])
                                                if(e.target.checked) {
                                                    setCount(count + 1)
                                                }else {
                                                    setCount(count - 1)
                                                }
                                            }} 
                                            value={item.id}
                                    />
                                    <List.Item.Meta
                                    title={<a href="https://ant.design">{item?.name}</a>}
                                    description={item.resource}
                                    />
                                </List.Item>
                            )} 
                        />
                    </div>
                </Form.Item>
                <Button className={styles.btn__create__submit}>Thêm</Button>
            </Form>
        </Modal>
    )
}

export default Create