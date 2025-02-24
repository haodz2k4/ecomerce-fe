import { Button, Checkbox, Flex, Form, Input, Layout, Radio, Space, Typography  } from "antd"
import styles from "./Register.module.scss";
import { Content } from "antd/es/layout/layout";
import { LockOutlined, MailOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { Gender } from "../../../../constants/app.constant";

const {Title} = Typography
const Register = () => {

    const [form] = useForm();
    return (
        <>
            <Layout className={styles.register}>
                
                <Content className={styles.register__content}>
                    <div className={styles.register__inner}>
                        <Title className={styles.register__title} level={1}>Đăng ký</Title>
                        <Form layout="vertical" action={"/face"} form={form}>
                            <Form.Item 
                                label="Họ và tên: " 
                                rules={[{
                                    required: true,
                                    message: 'Họ và tên không được bỏ trống'
                                }]}
                                name="fullName"
                            >
                                <Input 
                                    prefix={<UserOutlined />} 
                                    placeholder="Điền họ và tên của bạn..." 
                                />
                            </Form.Item>
                            <Form.Item 
                                label="Email: " 
                                rules={[{
                                    required: true, message: 'Email không được bỏ trống',
                                    type: 'email'
                                }]}
                                name='email'
                            >
                                <Input 
                                    type="mail" 
                                    prefix={<MailOutlined />} 
                                    placeholder="Điền Email của bạn..."
                                />
                            </Form.Item>
                            <Form.Item 
                                name='gender'
                                label="Giới tính: "  
                                rules={[{
                                    required: true, 
                                    message: "Bạn phải chọn 1 giới tính"
                                }]}  
                            >
                                <Radio.Group>
                                    <Radio value={Gender.MALE}>Nam</Radio>
                                    <Radio value={Gender.FEMALE}>Nữ</Radio>
                                </Radio.Group>
                            </Form.Item>
                            <Form.Item 
                                label="Ngày sinh: " 
                                rules={[{
                                    required: true, message: 'Ngày sinh không được bỏ trống'
                                }]}
                                name='birthDate'
                            >
                                <Input type="date"/>
                            </Form.Item>
                            <Space size="large">
                                <Form.Item 
                                    label="Mật khẩu: " 
                                    name='password'
                                    rules={[{
                                        required: true,
                                        message: 'Mật khẩu không được để trống'
                                    }]}
                                    
                                >
                                    <Input.Password 
                                        prefix={<LockOutlined />} 
                                        placeholder="Nhập mật khẩu...."
                                    />
                                </Form.Item>
                                <Form.Item 
                                    label="Xác nhận mật khẩu: " 
                                    name='confirmPassword'
                                    rules={[{
                                        message: 'Mật khẩu xác nhận ko được để trống',
                                        required: true
                                    }]}
                                >
                                    <Input type="password" prefix={<LockOutlined />} placeholder="Nhập lại mật khẩu..."/>
                                </Form.Item>
                            </Space>
                            <Form.Item rules={[{required: true, message: "Vui lòng chấp nhận điều khoản và dịch vụ"}]}>
                                <Checkbox>Chập nhận tất cả điều khoản và dịch vụ trên</Checkbox>
                            </Form.Item>
                            <Flex justify="center">
                                <Button 
                                    iconPosition="end" 
                                    className={styles.register__btn} 
                                    size="large" 
                                    icon={<UserAddOutlined />}
                                    htmlType="submit"
                                >
                                    Đăng ký 
                                </Button>
                            </Flex>
                            <div className={styles.register__other}>
                                Bạn đã có tài khoản ? <span className={styles.register__login}>Đăng nhập</span>
                            </div>
                        </Form>
                    </div>
                </Content>
            </Layout>
        </>
    )
}

export default Register