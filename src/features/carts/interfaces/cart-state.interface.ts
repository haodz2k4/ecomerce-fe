import { LoadingConstant } from "../../../constants/loading.constant";
import { Cart } from "./cart.interface";


export interface CartState {
    cart: Cart | null;
    loading: LoadingConstant;
    error: null | unknown;
}