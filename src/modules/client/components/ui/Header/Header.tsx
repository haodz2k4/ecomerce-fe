
import styles from "./Header.module.scss";
import { Flex, Image, Input, Button, Badge, Avatar, Space, Dropdown } from "antd";
import ecomerce_logo from "../../../../../assets/images/ecomerce_logo.png";
import { NavLink } from "react-router-dom";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
;
import type { MenuProps } from 'antd';


const {Search} = Input;

function AppHeader() {


    const userItems: MenuProps['items'] = [
        {
            label: 'Đăng ký',
            key: '1'
        },
        {
            label: 'Đăng nhập',
            key: '2'
        }
    ]
    return (
        <header className={styles.header}>
            <div className={styles.header__top}>
                <div className="container">
                    <Flex justify="space-between" align="center" className={styles["header__top-inner"]}>
                        <div className={styles.header__desc}>
                            KYO Authentic - Shop Mỹ Phẩm, Son Môi, Nước Hoa Chính Hãng
                        </div>
                        <div className={styles.header__contact}>
                            <ul>
                                <li>
                                    <i className="fa-solid fa-envelope"></i> <span>hosonhao23052004@gmail.com</span>
                                </li>
                                <li>
                                    <i className="fa-solid fa-phone"></i> <span>0862048402</span>
                                </li>
                                <li><i className="fa-brands fa-facebook"></i></li>
                                <li><i className="fa-brands fa-square-instagram"></i></li>
                                <li><i className="fa-brands fa-youtube"></i></li>
                            </ul>
                        </div>
                    </Flex>
                </div>
            </div>
            
                
                <div className={styles.header__main}>
                    <Flex className="container" justify="space-between" align="center">
                        <div className={styles.header__logo}>
                            <Image src={ecomerce_logo} alt="" className={styles["header__logo-img"]} />
                            <span className={styles["header__logo-title"]}>KYO.VN</span>
                        </div>
                        <div className={styles.header__search}>
                            <Search style={{width: '340px'}} placeholder="Vui lòng nhập từ khóa tìm kiếm" size="large"/>
                        </div>
                        <div className={styles.header__menu}>
                            <ul>
                                <li>
                                    <NavLink to="/">Trang chủ <i className="fa-solid fa-house"></i></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about">Về chúng tôi <i className="fa-solid fa-hand"></i></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/products">Sản phẩm <i className="fa-solid fa-box-open"></i></NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contacts">Liên hệ <i className="fa-solid fa-phone"></i></NavLink>
                                </li>
                                <li>
                                    <NavLink to=""></NavLink>
                                </li>
                            </ul>
                        </div>
                        <Space className={styles.header__other}>
                            <Badge count={10}>
                                <Button shape="circle" size="large" color="pink" icon={<ShoppingCartOutlined  /> }/>
                            </Badge>
                            <Dropdown menu={{items: userItems}} placement="bottom">
                               <Avatar icon={<UserOutlined />}/>
                            </Dropdown>
                        </Space>
                    </Flex>
                </div>
                <div className={styles.header__categories}>
                    <Flex  className="container">
                        <Button color="default"  variant="text">Thời trang nam</Button>
                        <Button color="default"  variant="text">Thời trang nữ</Button>
                    </Flex>
                </div>
        </header>
    )
}

export default AppHeader