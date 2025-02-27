import { Button, Descriptions, DescriptionsProps } from "antd";
import styles from "./Profile.module.scss"
import { EditOutlined } from "@ant-design/icons";
const InfoTab = () => {
    const items: DescriptionsProps['items'] = [
        { key: "1", label: "Id", children: "Id", span: 'filled'},
        { key: "2", label: "Họ và tên", children: "Hồ Sơn Hào", span: 'filled' },
        { key: "3", label: "Email", children: "Email", span: 'filled' },
        { key: "4", label: "Trạng thái", children: "NULL", span: 'filled' },
        { key: "5", label: "Giới tính", children: "", span: 'filled' },
        { key: "6", label: "Sinh nhật", children: "", span: 'filled' },
    ];

    return  <>
        <Descriptions bordered items={items} />
        <Button 
            className={styles.btn__edit}
            icon={<EditOutlined />} 
            iconPosition="end"
        > 
        Chỉnh sửa
        </Button>
    </>
};

export default InfoTab;