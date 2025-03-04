import { LoadingConstant } from "../../../constants/loading.constant";
import { Cart } from "./cart.interface";


export interface CartState {
    cart: Cart;
    loading: LoadingConstant;
    error: null | unknown;
}