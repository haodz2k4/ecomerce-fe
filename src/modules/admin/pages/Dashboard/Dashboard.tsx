import { Col, Row, Statistic, StatisticProps } from "antd"
import CountUp from 'react-countup';


const Dashboard = () => {

    const formatterPrice: StatisticProps['formatter'] = (value) => (
        <CountUp end={value as number} separator="," duration={3} suffix=" VND" />
      );
    const formatter: StatisticProps['formatter'] = (value) => (
        <CountUp end={value as number} duration={3}/>
    )
    return (
        <>
            <Row gutter={16} >
                <Col span={6}>
                    <Statistic title="Tổng doanh thu" value={1230923} formatter={formatterPrice}/>
                </Col>
                <Col span={6}>
                    <Statistic title="Số lượng người dùng đăng ký" value={120} formatter={formatter}/>
                </Col>
                <Col span={6}>
                    <Statistic title="Sản phẩm bán được" value={30} formatter={formatter}/>
                </Col>
                <Col>
                    <Statistic title="Số đơn hàng được nhập" value={120} formatter={formatter}/>
                </Col>
            </Row>
        </>
    )
}

export default Dashboard