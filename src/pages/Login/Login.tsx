import { Layout, Typography, Form, Input, Checkbox, Space, Flex, Button } from "antd";
import styles from "./Login.module.scss";
import { Content } from "antd/es/layout/layout";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";

const {Title} = Typography

const Login = () => {

    return (
        <Layout className={styles.login}>
            <Content className={styles.login__content}>
                <div className={styles.login__inner}>
                    <Form layout="vertical">
                        <Title className={styles.login__title} level={2}>Đăng nhập</Title>
                        <Form.Item label="Email: ">
                            <Input type="email" prefix={<MailOutlined />} placeholder="Nhập email của bạn..."/>
                        </Form.Item>
                        <Form.Item label="Password: ">
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
                        <Button className={styles.login__btn}  >Đăng nhập</Button>
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