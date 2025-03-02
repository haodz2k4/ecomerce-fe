import { CartItems } from "./cart-items.interface";


export interface Cart {
    id: string;
    userId: string;
    cartsItems: CartItems[];
    createdAt: Date;
    updatedAt: Date;
}