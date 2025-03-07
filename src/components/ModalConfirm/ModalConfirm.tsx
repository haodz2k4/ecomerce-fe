import { CheckCircleFilled, CheckCircleOutlined, ExclamationCircleFilled, ExclamationCircleOutlined } from "@ant-design/icons";
import { Modal, Flex } from "antd"
import Title from "antd/es/typography/Title";
import styles from "./ModalConfirm.module.scss";


interface ModalConfirmProps {
    open: boolean;
    setOpen: (val: boolean) => void;
    onOk: () => void;
    title: string;
    description?: string;
}

export const ModalConfirm = (props: ModalConfirmProps) => {
    const {open, setOpen, onOk, title, description} = props;
    return (
        <Modal
            open={open}
            onCancel={() => setOpen(false)}
            onOk={onOk}
            centered
            className={styles.modal}
            okText="Có"
            cancelText="Không"
            okButtonProps={{
                style: {
                    backgroundColor: 'pink'
                }
            }}
        >
           <div className={styles.modal__inner}>
                <ExclamationCircleFilled className={styles.modal__icon}/>
                <p className={styles.modal__title}>{title}</p>
                <p>{description}</p>
           </div>
        </Modal>
    )
}

export default ModalConfirm