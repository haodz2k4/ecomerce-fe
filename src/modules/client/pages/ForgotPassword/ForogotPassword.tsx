import styles from "./ForgotPassword.module.scss"
import { Layout, Form, Input, Checkbox, Flex, Button, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link, NavLink } from "react-router-dom";

const {Title} = Typography
const ForgotPassword = () => {

    const onFinish = () => {
        
    }
    return (
        <Layout className={styles.forgot}>
            <Content className={styles.forgot__content}>
                <div className={styles.forgot__inner}>
                    <Form 
                        layout="vertical" 
                    >
                        <Title className={styles.forgot__title} level={2}>Quên mật khẩu <LockOutlined /> </Title>
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
                        <Button className={styles.forgot__btn} htmlType="submit"  >Xác nhận</Button>
                        <div className={styles.forgot__other}>
                            Bạn đã có tài khoản ? <NavLink to={"/register"}>Đăng nhập</NavLink>
                        </div>
                    </Form>
                </div>
            </Content>
        </Layout>
    )
}

export default ForgotPassword