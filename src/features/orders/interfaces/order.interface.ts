import { OrderStatus } from "../../../constants/app.constant";
import { User } from "../../users/interfaces/user.interface";
import { OrderItem } from "./order-items.interface";


export interface Order {
    id: string;
    status: OrderStatus;
    user: Pick<User,'id' | 'fullName' | 'email'>;
    address: string;
    items: OrderItem[]
    createdAt: Date;
    updatedAt: Date;
}