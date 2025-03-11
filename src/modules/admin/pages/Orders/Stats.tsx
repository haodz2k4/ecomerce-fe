import { Col, Modal, Row, Space, Statistic, StatisticProps, DatePicker } from "antd"
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../common/types/store.type";
import { useEffect, useState } from "react";
import { statsOrder } from "../../../../features/orders/orders.thunk";


interface StatsProps {
    open: boolean;
    setOpen: (val: boolean) => void;
}
const { RangePicker } = DatePicker;
const Stats = (props: StatsProps) => {

    const {open,setOpen} = props;
    const [startAt, setStartAt] = useState<Date>();
    const [endAt, setEndAt] = useState<Date>()
    const {stats} = useSelector((state: RootState) => state.orders);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(statsOrder({
            startAt,
            endAt
        }))
    },[dispatch, startAt, endAt])
    const formatterPrice: StatisticProps['formatter'] = (value) => (
        <CountUp end={value as number} suffix=" VND" separator="," />
    );

    const handleRangeCreatedAt = (values: any) => {
        const [start, end] = values
        setStartAt(start.toDate())
        setEndAt(end.toDate())
    }
    return (
        <Modal
            width={1000}
            open={open}
            onOk={() => setOpen(false)}
            onCancel={() => setOpen(false)}
        >
            <Space style={{marginBottom: '10px'}}>
                <RangePicker onChange={handleRangeCreatedAt}/>
            </Space>
            <Row gutter={16}>
                <Col span={6}>
                    <Statistic title="Tổng đơn hàng" value={stats?.totalOrders}/>
                </Col>
                <Col span={6}>
                    <Statistic title="Tổng doanh thu" formatter={formatterPrice} value={stats?.totalRevenue}/>
                </Col>
                <Col span={6}>
                    <Statistic title="Tổng sản phẩm đã bán" value={stats?.totalProductsSold}/>
                </Col>
                <Col span={6}>
                    <Statistic title="Tổng khách hàng đã mua" value={stats?.totalCustomer}/>
                </Col>
            </Row>
        </Modal>
    )
}

export default Stats 