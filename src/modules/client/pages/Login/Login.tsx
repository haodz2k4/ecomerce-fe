import { Layout, Typography, Form, Input, Checkbox, Space, Flex, Button } from "antd";
import styles from "./Login.module.scss";
import { Content } from "antd/es/layout/layout";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "antd/es/form/Form";

const {Title} = Typography

const Login = () => {
    

    const [form] = useForm();
    return (
        <Layout className={styles.login}>
            <Content className={styles.login__content}>
                <div className={styles.login__inner}>
                    <Form layout="vertical" form={form}>
                        <Title className={styles.login__title} level={2}>Đăng nhập</Title>
                        <Form.Item 
                            label="Email: " 
                            rules={[{
                                required: true,
                                message: 'Email ko được bỏ trống'
                            }]}
                            name="email"
                        >
                            <Input type="email" prefix={<MailOutlined />} placeholder="Nhập email của bạn..."/>
                        </Form.Item>
                        <Form.Item 
                            label="Password: "
                            name="password"
                            rules={[{
                                required: true, 
                                message: 'Mật khẩu không được bỏ trống'
                            }]}
                        >
                            <Input.Password prefix={<LockOutlined />} placeholder="Nhập password của bạn..."/>
                        </Form.Item>
                        <Flex justify="space-between">
                            <Form.Item>
                                <Checkbox>Ghi nhớ tôi</Checkbox>
                            </Form.Item>
                            <Form.Item>
                                <Link to={"/forgot-password"}> Quên mật khẩu ?</Link>
                            </Form.Item>
                        </Flex>
                        <Button className={styles.login__btn} htmlType="submit"  >Đăng nhập</Button>
                        <div className={styles.login__other}>
                            Bạn chưa có tài khoản ? <NavLink to={"/register"}>Đăng ký</NavLink>
                        </div>
                    </Form>
                </div>
            </Content>
        </Layout>
    )
}

export default Login