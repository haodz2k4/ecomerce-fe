import { OrderStatus } from "../../../constants/app.constant";
import { CreateOrderItem } from "./create-order-item.interface";


export interface CreateOrder {
    status: OrderStatus;
    address: string;
    paymentMethod: string;
    phone: string;
    items: CreateOrderItem[];
}