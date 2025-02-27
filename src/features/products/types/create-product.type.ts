import { CreateOmitFields } from "../../../common/types/create-omit-feilds.type";
import { Product } from "../interfaces/product.interface";


export type CreateProduct = Omit<Product,CreateOmitFields | 'slug'>;