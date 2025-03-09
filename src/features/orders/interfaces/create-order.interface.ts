import { OrderStatus, PaymentMethod } from "../../../constants/app.constant";
import { CreateOrderItem } from "./create-order-item.interface";


export interface CreateOrder {
    status: OrderStatus;
    address: string;
    paymentMethod: PaymentMethod;
    phone: string;
    items: CreateOrderItem[];
}