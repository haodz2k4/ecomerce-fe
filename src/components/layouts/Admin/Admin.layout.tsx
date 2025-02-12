import { Layout } from "antd"
import { Content, Footer, Header } from "antd/es/layout/layout"
import Sider from "antd/es/layout/Sider"
import { Outlet } from "react-router-dom"




const AdminLayout = () => {

    return (
        <Layout>
            <Sider>
                Sider
            </Sider>
            <Layout>
                <Header>
                    Header
                </Header>
                <Content>
                    <Outlet />
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    )
}

export default AdminLayout