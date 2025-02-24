import { Modal } from "antd";



interface CategoryProps {
    open: boolean;
    setOpen: (value: boolean) => void;
}
const CategoryModal = (props: CategoryProps) => {
    const {open, setOpen} = props;

    return (
        <Modal
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
            
        >

        </Modal>
    )
}

export default CategoryModal