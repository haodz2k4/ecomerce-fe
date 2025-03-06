import { Product } from "../../products/interfaces/product.interface";


export interface OrderItem {
    id: number;
    product: Pick<Product,'id'|'title'|'price'|'discountPercentage'|'thumbnail'| 'inventories'>;
    price: number;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
}