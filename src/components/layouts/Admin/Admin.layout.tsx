import { Flex, Layout, Menu, Typography, Input, Row, Col, Space, Button, Badge, Avatar, Dropdown } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout"
import Sider from "antd/es/layout/Sider"
import { Outlet } from "react-router-dom"
import styles from "./AdminLayout.module.scss";
import logo from "../../../assets/images/ecomerce_logo.png"
import { getItem } from "../../../utils/item";
import { 
    AlertOutlined, 
    AppstoreOutlined, 
    BellOutlined, 
    ContactsOutlined, 
    DashboardOutlined, 
    FundProjectionScreenOutlined, 
    InboxOutlined, 
    LockOutlined, 
    LogoutOutlined, 
    MenuOutlined, 
    MessageOutlined, 
    PartitionOutlined, 
    PieChartOutlined, 
    ProductOutlined, 
    ProjectOutlined, 
    SettingOutlined, 
    TeamOutlined, 
    ToolOutlined, 
    UserOutlined, 
    UserSwitchOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const {Title} = Typography
const {Search} = Input

const itemsMenu = [
    getItem('Dashboard', '1', <DashboardOutlined />, [
        getItem('Chung','1.1', <PieChartOutlined />),
        getItem('Thương mại','1.2', <ProjectOutlined />),
        getItem('Thống kê','1.3', <FundProjectionScreenOutlined />)
    ]),
    getItem('Người dùng', '2',<TeamOutlined />),
    getItem('Sản phẩm','3',<ProductOutlined />),
    getItem('Kho hàng','4',<AppstoreOutlined />),
    getItem('Đơn hàng','5',<InboxOutlined />),
    getItem('Quyền','6',<LockOutlined />, [
        getItem('Nhóm quyền', '6.1', <UserSwitchOutlined />),
        getItem('Phân quyền','6.2', <LockOutlined />)
    ]),
    getItem('Hỗ trợ', '7', <ContactsOutlined />, [
        getItem('Nhắn tin','7.1', <MessageOutlined />),
        getItem('Khiếu nại', '7.2',<AlertOutlined />)
    ])
]

const itemsOther = [
    getItem('Cài đặt','1', <SettingOutlined />, [
        getItem('Cài đặt chung','1.1', <PartitionOutlined />),
        getItem('Cài đặt hệ thống','1.2', <ToolOutlined />)
    ]),
    getItem('Tài khoản của bạn','2', <UserOutlined />),
    getItem('Đăng xuất', '3',<LogoutOutlined />)
]


const accountItems = [
    {
        key: '1',
        label: 'Tài khoản',
        icon: <UserOutlined />
    },
    {
        key: '2',
        label: 'Đăng xuất',
        icon: <LogoutOutlined />
    }
]
const AdminLayout = () => {

    const [collapsed, setCollapsed] =  useState(false);

    return (
        <Layout className={styles.layout}>
            <Sider  collapsed={collapsed} collapsible onCollapse={(value) => setCollapsed(value)} className={styles.sider} width="19%">
                <div className={styles.sider__inner}>
                    <Flex justify="center" align="center" className={styles.sider__logo}>
                        <img src={logo} alt="" className={styles["sider__logo-img"]}/>
                        <Title className={collapsed ? 'd-none' : ''} level={2}>Dashboard</Title>
                    </Flex>
                    <div className={styles.sider__content}>
                        <Menu mode="inline" items={itemsMenu} className={styles.sider__menu}/>
                        <div className={styles.sider__space}></div>
                        <Menu mode="inline" items={itemsOther}/>

                    </div>
                </div>
            </Sider>
            <Layout>
                <header className={styles.header}>
                    <Row justify="space-between">
                        <Col span={6}>
                            <Search placeholder="Nhập tìm kiếm ở đây..."/>
                        </Col>
                        <Col span={15}/>
                        <Col span={3}>
                            <Space>
                                <Badge count={4}>
                                    <Button size="large" color="default" variant="text" icon={<BellOutlined />} />
                                </Badge>
                                <Dropdown menu={{items: accountItems}} placement="bottomLeft">
                                    <Avatar />
                                </Dropdown>
                                <Button variant="text" color="default" icon={<MenuOutlined />} />
                            </Space>
                        </Col>
                    </Row>
                </header>
                <Content className={styles.content}>
                    <Outlet />
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    )
}

export default AdminLayout