import { Pagination } from "../../../common/interfaces/pagination.interface";
import { LoadingConstant } from "../../../constants/loading.constant";
import { CartItems } from "./cart-items.interface";
import { Cart } from "./cart.interface";


export interface CartState {
    cart: Cart | null;
    loading: LoadingConstant;
    error: null | unknown;
}