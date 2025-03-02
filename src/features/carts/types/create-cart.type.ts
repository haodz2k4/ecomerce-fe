import { CreateOmitFields } from "../../../common/types/create-omit-feilds.type";
import { CartItems } from "../interfaces/cart-items.interface";


export type CreateCart = Omit<CartItems, CreateOmitFields>;